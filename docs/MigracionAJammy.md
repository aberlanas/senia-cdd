# Migración a Jammy.

Esta guia describe los pasos para PS necesarios para migrar los equipos del IES La Senia a la versión 22.04.
Desde Focal Fossa (20.04).

## Paso 0

Nos aseguramos de que tenemos los repositorios de la Senia configurados:

El fichero `/etc/apt/sources.list` ha de contener *únicamente* los siguientes repositorios:

```shell
deb http://tic.ieslasenia.org/ubuntu focal main universe restricted multiverse
deb http://tic.ieslasenia.org/ubuntu focal-updates main universe restricted multiverse
deb http://tic.ieslasenia.org/ubuntu focal-security main universe restricted multiverse
deb http://tic.ieslasenia.org/ubuntu focal-backports main universe restricted multiverse
```

Se realiza un `apt update` y se está atento a posibles fallos, estamos descubriendo varios posibles. Se describen a continuación:

### i386 Not Found

Se trata de máquinas que tienen instalado software de 32 bits y eso ya no está soportado en Jammy, así que mejor deshabilitar esa 
opción desde la base:

```shell
sudo dpkg --remove-architecture i386
```
Si no os deja, habrá que quitar los paquetes que tengamos instalados con esa arquitectura obsoleta:

```shell
LISTA=$(dpkg -l | awk '/^ii/ && $4 == "i386" { print }'  | tr -s " " | cut -d " " -f2 | tr "\n" " " )
sudo apt purge ${LISTA}
```

O, si queréis un *one-liner*:

```shell
LISTA=$(dpkg -l | awk '/^ii/ && $4 == "i386" { print }'  | tr -s " " | cut -d " " -f2 | tr "\n" " " ); sudo apt purge ${LISTA}
```

### icons 64x64 Not found

El paquete appstream es una *castaña* y no mejor lo quitamos

```shell
sudo apt purge appstream

```

Si detectamos más problemas colgaremos aquí la solución.

## Continuamos

Se actualiza en *focal* todo lo posible:

```shell
sudo apt update; sudo apt full-upgrade --yes
```

Durante la actualización, asegurarse de que el repositorio de la Senia está habilitado, en caso de no estarlo:

```
sudo add-apt-repository ppa:ticsenia/ppa
```

Y luego de nuevo

```shell
sudo apt update; sudo apt full-upgrade --yes
```

Una vez tengamos la máquina a tope dentro de la versión 20.04, reiniciamos (para arrancar con el último kernel disponible),
y así tener menos problemas en el upgrade.

## Paso 1

Limpiar los repositorios.

Vamos a actualizar sólo contra Ubuntu (Repositorio de tic.ieslasenia.org), sin vscode, gns3, ni nada de eso.
Así que:

```shell
sudo rm -rf /etc/apt/sources.list.d/*
```

Y ahora cambiamos `focal` por `jammy` en el fichero `/etc/apt/sources.list`:

Desde línea de comandos con el *todopoderoso sed*:

```shell
sudo sed -i "s%focal%jammy%g" /etc/apt/sources.list
```

Desde el vim

En modo comando:

```vim
: % s/focal/jammy/g 
```

Con el `nano` pues será leyendo el menú ese raro que tiene, y p'alante.


Una vez *limpio*, hacemos un update:

```shell
sudo apt update
```

Y veremos que si todo va bien, aparecen varios miles de paquetes para actualizar. Sin miedo.

```shell
sudo apt full-upgrade --yes
```

A lo largo de la actualización irán surgiendo preguntas de restart de servicios (sí), de instalación de dispositivos de arranque para el GRUB (primer disco presente), de reinicio de `docker`, etc.  No es ciencia de cohetes, seguir vuestra intuición de informáticos y conseguiréis llegar al final.


Una vez actualizado, yo reiniciaría.

```shell
sudo reboot
```

Nos volvemos a conectar, y ahora añadimos el PPA del IES La Senia:

```shell
sudo add-apt-repository ppa:ticsenia/ppa
```

E instalamos los paquetes guia:

```shell
sudo apt install senia-cdd senia-cdd-xfce
```

Con esto instalado, ya tendremos el Escritorio configurado, con la *suite* de programas instaladas, utilidades, configuraciones para el alumnado, etc....*IT'S MAGIC!*.

Para asegurarse de todo ha ido bien, se ha desarrollado un software que muestra la versión de la Senia, estará disponible al final de la actualización:

```shell
senia-version
```

Comprobad que sale la versión de Junio y con el escritorio deseado. 

Gracias por su atención.

