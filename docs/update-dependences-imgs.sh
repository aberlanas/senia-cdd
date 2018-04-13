#!/bin/bash




echo "Creating image for senia-cdd-aulas-inf"
debtree senia-cdd-aulas-inf --max-depth=2 | dot -T png -o imgs/senia-cdd-aulas-inf.png

echo "Creating image for senia-cdd-ciclos-it"
debtree senia-cdd-ciclos-it --max-depth=1 | dot -T png -o imgs/senia-cdd-ciclos-it.png

echo "Creating image for senia-cdd-ciclos-afi"
debtree senia-cdd-ciclos-afi --max-depth=1 | dot -T png -o imgs/senia-cdd-ciclos-afi.png

echo "Creating image for senia-cdd-aulas"
debtree senia-cdd-aulas --max-depth=2 | dot -T png -o imgs/senia-cdd-aulas.png

echo "Creating image for senia-cdd"
debtree senia-cdd --max-depth=1 | dot -T png -o imgs/senia-cdd.png
