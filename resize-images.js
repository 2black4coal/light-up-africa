// resize-images.js  (ESM version)
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "src/assets/images");
const outputDir = path.join(__dirname, "src/assets/images/resized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .resize(TARGET_WIDTH, TARGET_HEIGHT, {
      fit: "cover",
      position: "center"
    })
    .toFile(outputPath)
    .then(() => console.log(`✔ Resized & overwritten: ${file}`))
    .catch(err => console.error(`✖ Error resizing ${file}:`, err));
});
 // To run this script, use:  "" node resize-images.js "" 
 // at the root of your project.
 //  It will read images from src/assets/images, 
 // resize them to 1920x1080, and save them in src/assets/images/resized.