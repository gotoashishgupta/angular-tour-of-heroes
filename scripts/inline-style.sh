#!/bin/bash
find ./src/app -type f -name *component.ts -exec sed -Ei '' '/styleUrls: \[([^,]+)\]/ s//styles: [require(\1)]/g' {} \;


find ./src/app -type f -name *component.ts -exec sed -Ei '' '/(\.s?css)/ s//.style\1/g' {} \;

find ./src/app -type f -name *.scss -exec bash -c 'mv {} `echo {} | sed "s/(s?css)/style.\1/g"`' \;
