import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(fileURLToPath(new URL('./entry.png', import.meta.url)), join(outputDir, 'entry.png'));
