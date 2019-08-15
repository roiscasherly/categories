const fs = require('fs');

const utils = require('./dist/bundle');

const langs = ['fil', 'id', 'ms', 'th', 'vi', 'zh-Hans'];

const en_cats = utils.flatten(utils.dump());

async function main() {
  for (let lang of langs) {
    const JSON_FILE = `./src/data/categories_${lang}.json`;
    const PO_FILE = `./src/locales/${lang}/messages.po`;

    // Load translated json file
    const translated = utils.flatten(require(JSON_FILE));

    // Load pofile
    const po = fs.readFileSync(PO_FILE);

    // Translation files are in English for now.
    // For each English msgstr in the pofile, replace it with the corresponding name
    // from the translated json.
    const newpo = Object.keys(en_cats).reduce((acc, cur) => {
      return acc.replace(new RegExp(`msgstr "${en_cats[cur].name}"`, 'g'), `msgstr "${translated[cur].name}"`)
    }, po.toString());

    fs.writeFileSync(`new-${lang}.po`, newpo, 'utf8');
  }
}

main()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch(e => {
    console.error('Uh oh...');
    console.error(e);
    process.exit(1);
  });

