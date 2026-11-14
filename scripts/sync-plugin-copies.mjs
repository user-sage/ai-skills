// Keeps the one-skill plugins in step with skills/.
//
// Claude Code installs a plugin from its own folder, so each skill is also
// copied to plugins/<skill>/skills/<skill>. Edit a skill under skills/ only,
// then run:
//
//   node scripts/sync-plugin-copies.mjs          copy skills/ into plugins/
//   node scripts/sync-plugin-copies.mjs --check  fail if the copies are out of date
//
// The copies are real files, not links, so a single-skill install also works on
// Windows, where links often do not survive a clone.

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

const slugs = readdirSync(join(root, 'skills')).filter((name) => statSync(join(root, 'skills', name)).isDirectory());
const stale = [];

for (const slug of slugs) {
  const from = join(root, 'skills', slug);
  const to = join(root, 'plugins', slug, 'skills', slug);
  if (check) {
    const source = files(from).map((file) => relative(from, file)).sort();
    const copy = existsSync(to) ? files(to).map((file) => relative(to, file)).sort() : [];
    const same =
      source.length === copy.length &&
      source.every((name, i) => name === copy[i] && readFileSync(join(from, name)).equals(readFileSync(join(to, name))));
    if (!same) stale.push(slug);
  } else {
    rmSync(to, { recursive: true, force: true });
    mkdirSync(dirname(to), { recursive: true });
    cpSync(from, to, { recursive: true });
  }
}

if (check) {
  if (stale.length > 0) {
    console.error(`Out of date: ${stale.join(', ')}. Run node scripts/sync-plugin-copies.mjs`);
    process.exit(1);
  }
  console.log(`All ${slugs.length} plugin copies match skills/.`);
} else {
  console.log(`Copied ${slugs.length} skills into plugins/.`);
}
