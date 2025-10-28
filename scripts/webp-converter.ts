
const webpPath = process.env["WEBP_PATH"];
if (!webpPath) {
  throw new Error("WEBP_PATH environment variable is not set.");
}

import { execSync } from "child_process";
import fs from "node:fs";
import path from "node:path";


const inputImages = fs.globSync("assets/screenshots/*.png");
const outputDir = "public/screenshots/";

for (const inputImage of inputImages) {
  const outputImage = path.join(
    outputDir,
    path.basename(inputImage, path.extname(inputImage)) + ".webp",
  );

  const command = `"${webpPath}" -q 80 "${inputImage}" -o "${outputImage}"`;
  console.log(`Converting ${inputImage} to ${outputImage}...`);
  execSync(command);
  console.log(`Converted ${inputImage} to ${outputImage}`);
}