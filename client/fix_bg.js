const fs = require('fs');
const source = String.raw`C:\Users\Kavin Kharthik\.gemini\antigravity\brain\d51f2b40-b4c5-47a6-a4e2-9e091a5afe79\uploaded_image_1768836276886.png`;
const dest = String.raw`c:\Users\Kavin Kharthik\Desktop\portfolio\client\src\background.png`;

try {
    console.log('Copying from:', source);
    console.log('To:', dest);
    if (fs.existsSync(source)) {
        fs.copyFileSync(source, dest);
        console.log('Success: File copied.');
        if (fs.existsSync(dest)) {
            console.log('Verification: Destination file exists.');
        } else {
            console.error('Error: Destination file not found after copy.');
        }
    } else {
        console.error('Error: Source file does not exist.');
    }
} catch (err) {
    console.error('Exception:', err);
}
