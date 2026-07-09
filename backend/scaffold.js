const { execSync } = require('child_process');

const resources = [
  'auth',
  'users',
  'companions',
  'bookings',
  'reviews',
  'chat',
  'trips',
  'ai',
  'maps',
  'payments',
  'notifications'
];

for (const res of resources) {
  console.log(`Generating resource ${res}...`);
  try {
    // We will auto-answer 'REST API' (0) and 'Generate CRUD entry points? Yes' (Y) using input redirection,
    // actually `nest g resource` doesn't support a flag for REST API in older versions, but in newer it might.
    // wait, --no-spec --project etc. We can just use `nest g resource modules/${res} --no-spec --type rest --crud` if supported, but let's just generate modules and controllers manually to avoid interactive prompts.
    // Or we can just generate module, controller, service separately.
    execSync(`npx @nestjs/cli g module modules/${res} --no-spec`, { stdio: 'inherit' });
    execSync(`npx @nestjs/cli g controller modules/${res} --no-spec`, { stdio: 'inherit' });
    execSync(`npx @nestjs/cli g service modules/${res} --no-spec`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to generate ${res}:`, err.message);
  }
}

// Generate common folder structure
const fs = require('fs');
const path = require('path');

const commonDirs = [
  'config',
  'database',
  'guards',
  'middlewares',
  'filters',
  'interceptors',
  'decorators',
  'services'
];

commonDirs.forEach(dir => {
  const dirPath = path.join(__dirname, 'src', 'common', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log('Backend scaffolding complete.');
