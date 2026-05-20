import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';

const assetsDir = './src/assets';

function getAllImages(dir) {
  const results = [];
  for (const file of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      results.push(...getAllImages(fullPath));
    } else {
      const ext = extname(file.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const images = getAllImages(assetsDir);

for (const imgPath of images) {
  const ext = extname(imgPath).toLowerCase();
  const beforeSize = statSync(imgPath).size;

  if (beforeSize < 500 * 1024) continue; // skip files under 500KB

  const tmpPath = imgPath + '.tmp';

  try {
    if (ext === '.png') {
      await sharp(imgPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tmpPath);
    } else {
      await sharp(imgPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tmpPath);
    }

    const afterSize = statSync(tmpPath).size;
    const saved = ((beforeSize - afterSize) / beforeSize * 100).toFixed(1);

    unlinkSync(imgPath);
    renameSync(tmpPath, imgPath);

    console.log(`✓ ${basename(imgPath)}: ${(beforeSize/1024/1024).toFixed(1)}MB → ${(afterSize/1024/1024).toFixed(1)}MB (${saved}% saved)`);
  } catch (e) {
    console.error(`✗ ${basename(imgPath)}: ${e.message}`);
    try { unlinkSync(tmpPath); } catch {}
  }
}

console.log('\nDone!');
