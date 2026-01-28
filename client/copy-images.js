const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\\\Users\\\\Kavin Kharthik\\\\.gemini\\\\antigravity\\\\brain\\\\9febd3bf-e607-40b2-b7d6-331ed6ccb434';
const targetDir = path.join(__dirname, 'public');

const files = [
    { src: 'uploaded_media_0_1769347417816.png', dest: 'atm-security.png' },
    { src: 'uploaded_media_1_1769347417816.jpg', dest: 'book-library.jpg' },
    { src: 'uploaded_media_2_1769347417816.png', dest: 'vivo-showroom.png' }
];

files.forEach(file => {
    const srcPath = path.join(sourceDir, file.src);
    const destPath = path.join(targetDir, file.dest);

    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✓ Copied ${file.dest}`);
    } catch (err) {
        console.error(`✗ Error copying ${file.dest}:`, err.message);
    }
});

console.log('\\nDone! Check the public folder.');
