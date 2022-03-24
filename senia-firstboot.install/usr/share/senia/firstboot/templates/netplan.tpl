network:
  version: 2
  renderer: networkd
  ethernets:
    _@_IFACE_@_:
      addresses:
        - _@_MYIP_@_/_@_MYMASK_@_
      routes: 
        - to: default
          via: _@_MYGW_@_
      nameservers:
        addresses:
          - 172.27.111.5
          - 172.27.111.6
      # Uncomment this line and comment previous in 
      # case you are not sure about your IP 
      # DHCP could be your simple salvation. 
      #dhcp4: true

