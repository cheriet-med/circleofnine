const fs = require('fs');
const path = require('path');

const globePath = path.join(__dirname, '../src/app/data/globe.json');
const outPath = path.join(__dirname, '../src/app/data/countries-list.json');

(async function main() {
  try {
    const raw = await fs.promises.readFile(globePath, 'utf8');
    const geo = JSON.parse(raw);
    if (!geo.features || !Array.isArray(geo.features)) {
      throw new Error('globe.json does not contain a features array');
    }

    const list = geo.features.map((f) => {
      const p = f.properties || {};
      return {
        admin: p.admin || p.ADM0_A3 || null,
        name: p.name || p.NAME || null,
        continent: p.continent || p.CONTINENT || null,
        iso_a3: p.iso_a3 || p.ISO_A3 || null,
      };
    }).filter(Boolean);

    await fs.promises.writeFile(outPath, JSON.stringify(list, null, 2), 'utf8');
    console.log(`Wrote ${list.length} countries to ${outPath}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
