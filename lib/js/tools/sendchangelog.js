"use strict";
const path = require('path');
const baseemailservice_1 = require('../service/baseemailservice');
const toAddresses = ['back@gagogroup.com'];
const packageJson = require(path.resolve('./package.json'));
const currentVersion = String(packageJson.version);
const dataSourceMdPath = path.resolve('./CHANGELOG.md');
baseemailservice_1.BaseEmailService.sendChangelog(toAddresses, '基础库更新提醒', `gcs ${currentVersion} 更新提示`, dataSourceMdPath, '/tmp/cloud-service.version').then((requestId) => {
    console.log(`Send change log successes, request id is ${requestId}`);
}).catch((error) => {
    console.log(`Send change log fails, error is ${error.message}`);
});

//# sourceMappingURL=sendchangelog.js.map
