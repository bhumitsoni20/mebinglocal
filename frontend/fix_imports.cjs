const fs = require('fs');
const path = require('path');

const srcDir = path.join('d:', 'mebinglocal', 'frontend', 'src');

function fixImports(filePath) {
  if (!fs.existsSync(filePath)) return;
  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(filePath);
    files.forEach(f => fixImports(path.join(filePath, f)));
  } else if (stat.isFile() && /\.(tsx|ts|jsx|js)$/.test(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix imports from data
    content = content.replace(/from "(\.\.\/)+data"/g, 'from "@/constants"');
    content = content.replace(/from '(\.\.\/)+data'/g, "from '@/constants'");
    
    // Fix imports from components
    content = content.replace(/from "(\.\.\/)+components\/(.*?)"/g, 'from "@/components/$2"');
    content = content.replace(/from '(\.\.\/)+components\/(.*?)'/g, "from '@/components/$2'");

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in ${filePath}`);
    }
  }
}

fixImports(srcDir);
console.log('Import fix complete.');
