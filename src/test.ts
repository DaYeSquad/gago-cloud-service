// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

import {BaseEmailService} from './service/baseemailservice';
import {BoxService} from './service/boxservice';

/**
 * 测试邮件服务，发送完之后去邮箱里看看
 */
function testBaseEmailService(): void {
  BaseEmailService.sendHtmlEmail('linxiaoyi@gagogroup.com', '佳格数据测试', '测试标题', '<p>Hello</p>').then((reqId: string) => {
    console.log(`Request ID is ${reqId}`);
  });
}

/**
 * 上传到 oss 的服务，上传完之后去 oss 上看看
 */
function testUploadFileToOss(): void {
  BoxService.uploadFileToOss('path', 'bucket-name', 'new-name').then((statusCode: number) => {
    console.log(`Status code is ${statusCode}`);
  });
}