const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function generate() {
    const inputPath = path.join(__dirname, "../resources/icon.svg");
    const outputPath = path.join(__dirname, "../resources/icon.png");
    const rootOutputPath = path.join(__dirname, "../icon.png");

    console.log(`Reading SVG from: ${inputPath}`);
    if (!fs.existsSync(inputPath)) {
        console.error("Error: SVG main icon does not exist!");
        process.exit(1);
    }

    try {
        // Render 128x128 PNG (the standard style per request & VS Code requirements)
        await sharp(inputPath).resize(128, 128).png().toFile(outputPath);
        console.log(
            `Successfully generated high-contrast 128x128 icon, written to: ${outputPath}`,
        );

        // Also render 256x256 and store in root as icon.png (great for high-DPI VS Code display)
        await sharp(inputPath).resize(256, 256).png().toFile(rootOutputPath);
        console.log(
            `Successfully generated 256x256 high-DPI icon in root: ${rootOutputPath}`,
        );
    } catch (err) {
        console.error("Failed to generate PNG from SVG:", err);
        process.exit(1);
    }
}

generate();
