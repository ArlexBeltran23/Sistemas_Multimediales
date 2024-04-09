const { existsSync } = require('fs');

if (process.platform === 'win32') {
  existsSync('cun360') && require('child_process').execSync('rmdir /s /q cun360');
} else {
  existsSync('cun360') && require('child_process').execSync('rm -rf cun360');
}
