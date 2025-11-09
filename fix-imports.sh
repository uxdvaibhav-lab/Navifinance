#!/bin/bash

# Function to update imports in a file
update_imports() {
  local file=$1
  sed -i '' 's|@/components/ui/|../../components/ui/|g' "$file"
  sed -i '' 's|@/lib/|../../lib/|g' "$file"
  sed -i '' 's|@/components/|../../components/|g' "$file"
  sed -i '' 's|@/hooks/|../../hooks/|g' "$file"
}

# Update all TypeScript and JavaScript files in the src directory
find /Users/vaibhav/Downloads/navi-super-app-showcase-34423-main/src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) -exec sh -c 'update_imports "$1"' _ {} \;