const fs = require('fs');
const path = require('path');

const src = "e:/portfolio/client/public/profile.jpg";
const dest = "e:/portfolio/client/public/favicon.ico";

try {
    fs.copyFileSync(src, dest);
    console.log("Profile picture set as favicon successfully!");
} catch (err) {
    console.error("Error setting favicon:", err);
}
