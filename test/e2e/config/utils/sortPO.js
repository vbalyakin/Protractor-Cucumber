const fs = require('fs-extra'),
  shopSelectors = require('../../po/elements/shopSelectors.json'),
  shopUrl = require('../../po/elements/shopUrl.json'),
  shopNumbers = require('../../po/elements/shopNumbers.json'),
  shopSelectorsPath = './test/e2e/po/elements/shopSelectors.json',
  shopUrlPath = './test/e2e/po/elements/shopUrl.json',
  shopNumbersPaths = './test/e2e/po/elements/shopNumbers.json',
  PageObjectElement = require('../../po/utils/poe');

const helperElement = new PageObjectElement();

function sortPO(po) {
  const sortedArray = Object.entries(po)
    .map(([a, b]) => [helperElement.unifyAlias(a), b])
    .sort((a, b) => a[0] > b[0] ? 1 : -1),
    sortedPO = Object.fromEntries(sortedArray);
  return sortedPO;
}

function writeSortedPO(path, po) {
  fs.writeFileSync(path, JSON.stringify(po, null, '\t'));
}

const sortedShopSelectors = sortPO(shopSelectors),
  sortedShopUrl = sortPO(shopUrl),
  sortedShopNumbers = sortPO(shopNumbers);

writeSortedPO(shopSelectorsPath, sortedShopSelectors);
writeSortedPO(shopUrlPath, sortedShopUrl);
writeSortedPO(shopNumbersPaths, sortedShopNumbers);
