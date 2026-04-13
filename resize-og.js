// resize-og.js (ESM version)
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const inputPath = path.join(__dirname, "public", "og-home.jpg");
const tempOutputPath = path.join(__dirname, "public", "og-home-temp.jpg");
const finalOutputPath = path.join(__dirname, "public", "og-home.jpg");

// Standard OpenGraph size
const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 630;

sharp(inputPath)
  .resize(TARGET_WIDTH, TARGET_HEIGHT, {
    fit: "cover",
    position: "center"
  })
  .jpeg({ quality: 90 })
  .toFile(tempOutputPath)
  .then(() => {
    // Replace original file
    fs.renameSync(tempOutputPath, finalOutputPath);
    console.log("✔ OG image resized to 1200x630 successfully.");
  })
  .catch(err => console.error("✖ Error resizing OG image:", err));
// node resize-og.js  to run this script at the root of your project. It will resize public/og-home.jpg to 1200x630 and overwrite the original file.
