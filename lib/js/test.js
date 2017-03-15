"use strict";
const baseemailservice_1 = require("./service/baseemailservice");
const boxservice_1 = require("./service/boxservice");
function testBaseEmailService() {
    baseemailservice_1.BaseEmailService.sendHtmlEmail('linxiaoyi@gagogroup.com', '佳格数据测试', '测试标题', '<p>Hello</p>').then((reqId) => {
        console.log(`Request ID is ${reqId}`);
    });
}
function testUploadFileToOss() {
    boxservice_1.BoxService.uploadFileToOss('path', 'bucket-name', 'new-name').then((statusCode) => {
        console.log(`Status code is ${statusCode}`);
    });
}

//# sourceMappingURL=test.js.map
