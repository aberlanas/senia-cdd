network:
  ethernets:
    _@_IFACE_@_:
      routes:
      - to: default
        via: _@_MYIP_@_
      nameservers:
        addresses:
          - 1.1.1.1
          - 1.0.0.1

