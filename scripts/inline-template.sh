#!/bind/bash
find ./src/app -type f -name *\component.ts -exec sed -Ei '' '/templateUrl\s*:\s*([^,]+)\s*(,)/ s//template: require(\1)\2/g' {} \;

find ./src/app -type f -name *component.ts -exec sed -Ei '' '/(\.html)/ s//.template\1/g' {} \;


find ./src/app -type f -name *.html -exec bash -c 'mv {} `echo {} | sed "s/html/template.html/g"`' \;
