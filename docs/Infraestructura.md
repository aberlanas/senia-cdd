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

| Aula | Hostname   | IP            | Versión | senia-cdd  |GVAInventario|
|------|------------|---------------|---------|------------|-------------|
|AP1   | aulas-ap01 | 172.29.0.91   | jammy   | 2022-06-19 | Instalado   |
|AP2   | aulas-ap02 | 172.29.0.92   | jammy   | 2022-06-19 | Instalado   |
|AP3   | aulas-ap03 | 172.29.0.93   | jammy   | 2022-06-19 | Instalado   |
|AP4   | aulas-ap04 | 172.29.0.94   | jammy   | 2022-06-19 | Instalado   |
|AP5   | aulas-ap05 | 172.29.0.95   | jammy   | 2022-06-19 | Instalado   |
|AP6   | aulas-ap06 | 172.29.0.96   | jammy   | 2022-06-19 | Instalado   |
|AP7   | aulas-ap07 | 172.29.0.97   | jammy   | 2022-06-19 | Instalado   |
|AP8   | aulas-ap08 | 172.29.0.98   | jammy   | 2022-06-19 | Instalado   |

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

| Aula | Hostname |      IP        | Versión | senia-cdd  |GVAInventario|
|------|----------|----------------|---------|------------|-------------|
|aula11  | aula11 | 172.29.0.111   | jammy   | 2022-06-19 | Instalado   |
|aula12  | aula12 | 172.29.0.112   | jammy   | 2022-06-19 | Instalado   |
|aula13  | aula13 | 172.29.0.113   | jammy   | 2022-06-19 | Instalado   |
|aula14  | aula14 | 172.29.0.114   | jammy   | 2022-06-19 | Instalado   |
|aula15  | aula15 | 172.29.0.115   | jammy   | 2022-06-19 | Instalado   |
|aula16  | aula16 | 172.29.0.116   | jammy   | 2022-06-19 | Instalado   |
|aula17  | aula17 | 172.29.0.117   | jammy   | 2022-06-19 | Instalado   |
|aula18  | aula18 | 172.29.0.118   | jammy   | 2022-06-19 | Instalado   |
|aula19  | aula19 | 172.29.0.119   | jammy   | 2022-06-19 | Instalado   | 

#### Laboratorio Ciencias 

|     Aula     |    Hostname     |      IP      | Versión | senia-cdd  |GVAInventario|
|--------------|-----------------|--------------|---------|------------|-------------|
| Lab.Ciencias  | lab-biologia   | 172.29.0.102 | focal  | - |  -  | 

Aula portátil 

#### Dep.Lenguas Extranjeras

| Aula | Hostname | IP | Versión | senia-cdd |
|------|----------|----|---------|-----------|
|aula11  |          |    | focal   | -         |
|aula12  |          |    | focal   | -         |


#### Aula PT

|     Aula     |    Hostname     |      IP      | Versión | senia-cdd  |GVAInventario|
|--------------|-----------------|--------------|---------|------------|-------------|
|aulapt-julio  | aulapt-julio    | 172.29.0.170 | jammy   | 2022-06-19 |  Instalado  |  
|aulapt-01     | aulapt-01       | 172.29.0.161 | focal   | -          |             |
|aulapt-02     | aulapt-02       | 172.29.0.162 | jammy   | 2022-06-19 |  Instalado  |
|aulapt-03     | aulapt-03       | 172.29.0.163 | jammy   | 2022-06-19 |  Instalado  |
|aulapt-04     | aulapt-04       | 172.29.0.164 | jammy   | 2022-06-19 |  Instalado  |

### Planta 2

| Aula             | Hostname     | IP             | Versión | senia-cdd |GVAInventario|
|------------------|--------------|----------------|---------|-----------|-------------|
|depmatemticas     |depmatematicas| 172.29.0.230   | focal   | -         |             |
|deplenguas        |              | 172.29.1.38    | bionic* |           |             |
|aula21            |              |                | focal   | -         |             |
|aula23            |              |                | focal   | -         |             |
|aula24            |              |                | focal   | -         |             |
|aula25            |              |                | focal   | -         |             |
|aula26            |              |                | focal   | -         |             |
|aula27            |              |                | focal   | -         |             |
|aulaplastica      |              | 172.29.0.231   | jammy   | -         |             |


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


| Aula | Hostname | IP | Versión | senia-cdd | GVAInventario | 
|------|----------|----|---------|-----------|----------------|
| Inf04  | aulainf04-pcprofe     | 192.168.4.199    |jammy   | -          |-|
| Inf04  | aulainf04-pc01        | 192.168.4.101    |jammy    |           |-|
| Inf04  | aulainf04-pc02        | 192.168.4.102    |jammy    |           |-|
| Inf04  | aulainf04-pc03        | 192.168.4.103    |jammy    |           |-|
| Inf04  | aulainf04-pc04        | 192.168.4.104    |jammy    |           |-|
| Inf04  | aulainf04-pc05        | 192.168.4.105    |jammy    |           |-|
| Inf04  | aulainf04-pc06        | 192.168.4.106    |jammy    |           |-|
| Inf04  | aulainf04-pc07        | 192.168.4.107    |jammy    |           |-|
| Inf04  | aulainf04-pc08        | 192.168.4.108    |jammy    |           |-|
| Inf04  | aulainf04-pc09        | 192.168.4.109    |jammy    |           |-|
| Inf04  | aulainf04-pc10        | 192.168.4.110    |jammy    |           |-|
| Inf04  | aulainf04-pc11        | 192.168.4.111    |jammy    |           |-|
| Inf04  | aulainf04-pc12        | 192.168.4.112    |jammy    |           |-|
| Inf04  | aulainf04-pc13        | 192.168.4.113    |jammy    |           |-|
| Inf04  | aulainf04-pc14        | 192.168.4.114    |jammy    |           |-|
| Inf04  | aulainf04-pc15        | 192.168.4.115    |jammy    |           |-|
| Inf04  | aulainf04-pc16        | 192.168.4.116    |jammy    |           |-|
| Inf04  | aulainf04-pc17        | 192.168.4.117    |jammy    |           |-|
| Inf04  | aulainf04-pc18        | 192.168.4.118    |jammy    |           |-|
| Inf04  | aulainf04-pc19        | 192.168.4.119    |jammy    |           |-|
| Inf04  | aulainf04-pc20        | 192.168.4.120    |jammy    |           |-|
| Inf04  | aulainf04-pc21        | 192.168.4.121    |jammy    |           |-|

##### Aula Informatica 5

| Aula | Hostname | IP | Versión | senia-cdd | GVAInventario | 
|------|----------|----|---------|-----------|---------------|
| Inf05|aulainf05-pcprofe |      192.168.5.100   | jammy  | 2022.06.19 | Instalado     |
| Inf05| aulainf05-pc01        | 192.168.5.1     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc02       |  192.168.5.2     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc03        | 192.168.5.3     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc04        | 192.168.5.4     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc05        | 192.168.5.5     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc06        | 192.168.5.6     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc07        | 192.168.5.7     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc08        | 192.168.5.8     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc09        | 192.168.5.9     |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc10        | 192.168.5.10    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc11        | 192.168.5.11    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc12        | 192.168.5.12    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc13        | 192.168.5.13    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc14        | 192.168.5.14    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc15        | 192.168.5.15    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc16        | 192.168.5.16    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc17        | 192.168.5.17    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc18        | 192.168.5.18    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc19        | 192.168.5.19    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc20        | 192.168.5.20    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc21        | 192.168.5.21    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc22        | 192.168.5.22    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc23        | 192.168.5.23    |jammy   | 2022.06.19 | Instalado    |
| Inf05| aulainf05-pc24        | 192.168.5.24    |jammy   | 2022.06.19 | Instalado    |


