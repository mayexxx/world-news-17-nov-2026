import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
await mkdir(outputDir, { recursive: true });
await copyFile(fileURLToPath(new URL('./entry.png', import.meta.url)), join(outputDir, 'entry.png'));
