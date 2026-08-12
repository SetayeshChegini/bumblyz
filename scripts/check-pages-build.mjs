import fs from "node:fs";
import path from "node:path";

const outputRoot = path.resolve("out");
const basePath = "/bumblyz";
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolutePath);
    else if (entry.name.endsWith(".html")) htmlFiles.push(absolutePath);
  }
}

walk(outputRoot);

const incorrectBasePaths = [];
const missingTargets = [];

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8");

  for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) {
    const url = match[1];
    if (!url.startsWith("/")) continue;

    if (url !== basePath && !url.startsWith(`${basePath}/`)) {
      incorrectBasePaths.push({ htmlFile, url });
      continue;
    }

    const relativeUrl = url.slice(basePath.length).replace(/^\//, "").split(/[?#]/)[0];
    if (!relativeUrl) continue;

    const target = path.join(outputRoot, relativeUrl);
    const exists =
      fs.existsSync(target) ||
      fs.existsSync(`${target}.html`) ||
      fs.existsSync(path.join(target, "index.html"));

    if (!exists) missingTargets.push({ htmlFile, url });
  }
}

if (incorrectBasePaths.length || missingTargets.length) {
  console.error(JSON.stringify({ incorrectBasePaths, missingTargets }, null, 2));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} exported HTML files for ${basePath}/.`);
