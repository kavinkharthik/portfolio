@echo off
echo Copying project images...

copy /Y "C:\Users\Kavin Kharthik\.gemini\antigravity\brain\9febd3bf-e607-40b2-b7d6-331ed6ccb434\uploaded_media_0_1769347417816.png" "public\atm-security.png"
if %errorlevel% equ 0 (echo ✓ ATM Security image copied) else (echo ✗ Failed to copy ATM Security image)

copy /Y "C:\Users\Kavin Kharthik\.gemini\antigravity\brain\9febd3bf-e607-40b2-b7d6-331ed6ccb434\uploaded_media_1_1769347417816.jpg" "public\book-library.jpg"
if %errorlevel% equ 0 (echo ✓ Book Library image copied) else (echo ✗ Failed to copy Book Library image)

copy /Y "C:\Users\Kavin Kharthik\.gemini\antigravity\brain\9febd3bf-e607-40b2-b7d6-331ed6ccb434\uploaded_media_2_1769347417816.png" "public\vivo-showroom.png"
if %errorlevel% equ 0 (echo ✓ Vivo Showroom image copied) else (echo ✗ Failed to copy Vivo Showroom image)

echo.
echo Done! Listing public folder:
dir public

pause
