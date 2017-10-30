#!/bind/bash
find . -type f -name *\component.ts -exec sed -Ei '' '/templateUrl\s*:\s*([^,]+)\s*(,)/ s//template: require(\1)\2/g' {} \;
