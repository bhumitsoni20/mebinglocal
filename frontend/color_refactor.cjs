const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Off-White
  { regex: /#ffffff|#fff(?!a-fA-F0-9)/gi, replacement: '#FCFAF5' },
  // Terracotta
  { regex: /#FF6B35|#0FB8B0|#8B5CF6|#F59E0B/gi, replacement: '#C96F52' },
  // Lighter Terracotta for gradients
  { regex: /#FF8C42/gi, replacement: '#D97A5E' },
  // Sand
  { regex: /#FFF3EE|#F1F5F9|#FAFAF8|#F3F4F6|#F9FAFB/gi, replacement: '#F4E9D8' },
  // Deep Forest Green
  { regex: /#111827|#1F2937|#0D0D1A|#000000|#000(?!a-fA-F0-9)|#10B981/gi, replacement: '#1A3B2B' },
  // Lighter Forest Green shades for secondary text
  { regex: /#374151/gi, replacement: '#2C4F3E' },
  { regex: /#4B5563/gi, replacement: '#39634F' },
  // Muted Greenish-Gray for tertiary text/borders
  { regex: /#6B7280|#9CA3AF|#D1D5DB|#E5E7EB/gi, replacement: '#8B9E94' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Color replacement complete.');
