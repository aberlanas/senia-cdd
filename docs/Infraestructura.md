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

172.29.0.1 $\leftarrow$ 172.29.1.254


