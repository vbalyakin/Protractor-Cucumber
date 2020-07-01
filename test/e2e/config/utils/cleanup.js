const fs_extra = require('fs-extra');

fs_extra.emptyDirSync('.tmp');
fs_extra.removeSync('./combined.log');
fs_extra.removeSync('./errors.log');
fs_extra.removeSync('./debug.log');
