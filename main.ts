import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = fileURLToPath(new URL('./entry.png', import.meta.url));
if (!existsSync(entryPath)) {
  console.error(`Error: entry.png not found at ${entryPath}`);
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(entryPath, join(outputDir, 'entry.png'));
