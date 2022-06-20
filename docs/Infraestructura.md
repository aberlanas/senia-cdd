# Infraestructura del IES La Senia

## Configuración de la Red del Centro

*Importante*: Todos los equipos salen por la Macrolan.

### Red de Secretaria

Hay una serie de bocas de todos los switches Huawei del centro que se encuentran en la red de secretaria.
En esta red funciona un DHCP no gestionable y que tiene un filtrado diferente del de las aulas. 

No podemos conectar equipos a esta red sin abrir tickets.

### Red del Centro (Aulas)

**Nuestra red de trabajo.**

Esta Red es la definida por la Dirección IP:

*172.29.0.0/23*

Nótese que nos hallamos en una *Doble C* para l@s fans de las categorizaciones
de las Redes en clases, pero que además no importa los dos primeros bits del primer octeto, así que de nuevo,
lo que importa no es cómo las clasificamos sino cómo funcionan ;-) .

Disponemos de 510 direcciones IP válidas en esa red:

172.29.0.1 $\rightarrow$ 172.29.1.254

Sin embargo, para facilitar la administración del centro y ya que no contamos con un DHCP propio ( y ser de esta 
manera más *Consellería-compliant*) lo que está configurado en el Switch del centro (Gestionado por el SAI), es que esta red de 510 direcciones 
está separada en dos mitades, la primera :

- `172.29.0.0/24` $\rightarrow$ NO TIENE DHCP, de esta manera nosotros ponemos IPs fijas en esta red para los equipos de las Aulas del centro.
- `172.29.1.0/24` $\rightarrow$ TIENE DHCP, donde los portátiles, móviles, y dispositivos no configurados en la red del centro se les asigna una dirección
   y pueden trabajar.

TODO: Rellenar con más información

## Red WiFi

Por ahora contamos con una serie de AP de Unifi configurados y gestionados desde el Servidor del Aula 4 (los más viejos). Y mediante la APP el de la sala de profes.

| Unifi | Ubicación | SSID | Switch de la planta |
|-------|-----------|------|---------------------|
|       |           |      |                     |

## Aulas y Equipos

### Aulas Prefabricadas

Switch distribuidor en la AulaPrefabricada 2

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|AP1   |          |    | focal   | -         |
|AP2   |          |    | focal   | -         |
|AP3   |          |    | focal   | -         |
|AP4   |          |    | focal   | -         |
|AP5   |          |    | focal   | -         |
|AP6   |          |    | focal   | -         |
|AP7   |          |    | focal   | -         |
|AP8   |          |    | focal   | -         |

### Taller de Tecnología

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|taller  |          |    | focal   | -         |


### Gimnasio 

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|Gimnasio  | gimnasio         |    | focal   | -         |


### Planta 0

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|audiovisuales  |          |    | focal   | -         |
|biblioteca  |          |    | focal   | -         |
|musica  |          |    | focal   | -         |
|aula0  |          |    | focal   | -         |
|salaguardias  |          |    | jammy   | -         |
|salaprofes01  |          |    | jammy   | -         |
|salaprofes02  |          |    | jammy   | -         |
|salaprofes03  |          |    | jammy   | -         |
|salaprofes04  |          |    | jammy   | -         |
|conserjeria  |          |    | focal   | -         |

### Planta 1

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|aula11  |          |    | focal   | -         |
|aula12  |          |    | focal   | -         |
|aula13  |          |    | focal   | -         |
|aula14  |          |    | focal   | -         |
|aula15  |          |    | focal   | -         |
|aula16  |          |    | focal   | -         |
|aula17  |          |    | focal   | -         |
|aula18  |          |    | focal   | -         |
|aula19  |          |    | focal   | -         |

#### Laboratorio Ciencias 

Aula portátil 

#### Dep.Lenguas Extranjeras

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|aula11  |          |    | focal   | -         |
|aula12  |          |    | focal   | -         |


#### Aula PT

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|aulapt-profe  |          |    | focal   | -         |
|aulapt-pc01  |          |    | focal   | -         |
|aulapt-pc02  |          |    | focal   | -         |
|aulapt-pc03  |          |    | focal   | -         |
|aulapt-pc04  |          |    | focal   | -         |

### Planta 2

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|depmatemticas  |          |    | focal   | -         |
|aula21 |          |    | focal   | -         |
|aula22 |          |    | focal   | -         |
|aula23 |          |    | focal   | -         |
|aula24 |          |    | focal   | -         |
|aula25 |          |    | focal   | -         |
|aula26 |          |    | focal   | -         |
|aula27 |          |    | focal   | -         |
|aulaplastica |          |    | focal   | -         |


#### Servidor Proxmox

Rellenar aqui

#### Aulas Informatica

#### Aula Informatica 1


| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|servidor-aula01 |          | 172.29.0.251/192.168.1.254   | focal   | -         |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |

##### Aula Informatica 2


| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|servidor-aula02 |          | 172.29.0.252/192.168.2.254   | jammy   | -         |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |

##### Aula Informatica 3


| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|aulainf03-pcprofe |          | 192.168.4.99   | jammy   | -         |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |

##### Aula Informatica 4

Servidor Aula 4

*Provisional*:

Establecer aqui el script de IPTables
```shell
# IPTABLES Script del NAT de las Aulas de Ciclos

```

| IP del Centro   | Red de las Aulas de Informatica |
|-----------------|---------------------------------|
| 172.29.0.254/23 | 192.168.4.254/23 |


| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|aulainf04-pcprofe |          | 192.168.4.199   | jammy   | -         |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |

##### Aula Informatica 5


| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|aulainf05-pcprofe |          | 192.168.5.100   | jammy   | -         |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
|      |         |     |jammy    |           |
