
const webpPath = process.env["WEBP_PATH"];
if (!webpPath) {
  throw new Error("WEBP_PATH environment variable is not set.");
}

import { execSync } from "child_process";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const inputImages = fs.globSync("assets/screenshots/*.png");
const outputDir = "public/screenshots/";

const outputSizeOverride = {
  "feed-page.png": { width: 400, height: 0 },
  "home-page.png": { width: 400, height: 0 },
  "playlist-editor-exporting.png": { width: 0, height: 600 },
  "playlist-editor.png": { width: 0, height: 600 },
}

for (const inputImage of inputImages) {
  const outputImage = path.join(
    outputDir,
    path.basename(inputImage, path.extname(inputImage)) + ".webp",
  );

  let outputWidth: number | undefined = undefined;
  let outputHeight: number | undefined = undefined;
  const override = outputSizeOverride[path.basename(inputImage)];
  if (override) {
    outputWidth = override.width;
    outputHeight = override.height;
  }
  else {
    const scale = 0.5;
    const metadata = await sharp(inputImage).metadata();
    if (!metadata.width || !metadata.height) {
      throw new Error(`Could not get dimensions for image: ${inputImage}`);
    }
    outputWidth = Math.round(metadata.width * scale);
    outputHeight = Math.round(metadata.height * scale);
  }

  const command = `"${webpPath}" "${inputImage}" -resize ${outputWidth} ${outputHeight} -o "${outputImage}"`;
  console.log(`Converting ${inputImage} to ${outputImage}...`);
  execSync(command);
  console.log(`Converted ${inputImage} to ${outputImage}`);
}