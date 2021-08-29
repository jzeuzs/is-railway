import { rm } from 'fs/promises';

await rm(new URL('../dist', import.meta.url), { recursive: true, force: true });
