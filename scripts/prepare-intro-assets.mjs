import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const preferredSource = path.join(root, "public/assets/intro/intro-cup-clean.png");
const fallbackSource = path.join(root, "public/assets/intro/intro-01-matcha-closed.png");
const source = existsSync(preferredSource) ? preferredSource : fallbackSource;
const outputDir = path.join(root, "public/assets/intro/derived");
const output = path.join(outputDir, "matcha-cup-alpha.png");

await mkdir(outputDir, { recursive: true });

if (!existsSync(source)) {
  throw new Error("Missing public/assets/intro/intro-cup-clean.png or intro-01-matcha-closed.png");
}

const image = sharp(source).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const visited = new Uint8Array(width * height);
const queue = [];

function idx(x, y) {
  return y * width + x;
}

function offset(x, y) {
  return idx(x, y) * channels;
}

function isBackground(x, y) {
  const o = offset(x, y);
  const r = data[o];
  const g = data[o + 1];
  const b = data[o + 2];
  const alpha = data[o + 3];
  return alpha > 0 && r > 238 && g > 238 && b > 238 && Math.max(r, g, b) - Math.min(r, g, b) < 10;
}

function push(x, y) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const i = idx(x, y);
  if (visited[i] || !isBackground(x, y)) return;
  visited[i] = 1;
  queue.push([x, y]);
}

for (let x = 0; x < width; x += 1) {
  push(x, 0);
  push(x, height - 1);
}
for (let y = 0; y < height; y += 1) {
  push(0, y);
  push(width - 1, y);
}

for (let head = 0; head < queue.length; head += 1) {
  const [x, y] = queue[head];
  push(x + 1, y);
  push(x - 1, y);
  push(x, y + 1);
  push(x, y - 1);
}

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const o = offset(x, y);
    const cupDx = (x - width * 0.49) / (width * 0.455);
    const cupDy = (y - height * 0.5) / (height * 0.455);
    const handleDx = (x - width * 0.88) / (width * 0.11);
    const handleDy = (y - height * 0.48) / (height * 0.17);
    const inCup = cupDx * cupDx + cupDy * cupDy <= 1;
    const inHandle = handleDx * handleDx + handleDy * handleDy <= 1;
    if (visited[idx(x, y)] || (!inCup && !inHandle)) {
      data[o + 3] = 0;
    }
  }
}

await sharp(data, { raw: { width, height, channels } }).png().toFile(output);
console.log(`Prepared ${path.relative(root, output)}`);
