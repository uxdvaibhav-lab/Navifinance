#!/bin/bash

cd /Users/vaibhav/Downloads/navi-super-app-showcase-34423-main/src

# Update imports in each directory
find . -type f -name "*.tsx" -o -name "*.ts" | while read -r file; do
  dirpath=$(dirname "$file")
  levels=$(echo "$dirpath" | tr -cd '/' | wc -c)
  prefix=""
  
  # Calculate the correct number of "../" based on directory depth
  for ((i=0; i<levels; i++)); do
    prefix="../$prefix"
  done
  
  # Replace imports
  sed -i '' "s|@/|$prefix|g" "$file"
done