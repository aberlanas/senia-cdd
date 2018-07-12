network:
  ethernets:
    _@_IFACE_@_:
      addresses:
        - _@_MYIP_@_/_@_MYMASK_@_
      gateway4: _@_MYGW_@_
      nameservers:
        addresses:
          - 8.8.8.8
          - 1.0.0.1
      #dhcp4: true

