// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

import * as path from 'path';
import {BaseEmailService} from '../service/baseemailservice';


const toAddresses: string[] = ['back@gagogroup.com'];

const packageJson: any = require(path.resolve('./package.json'));
const currentVersion: string = String(packageJson.version);

const dataSourceMdPath: string = path.resolve('./CHANGELOG.md');

BaseEmailService.sendChangelog(toAddresses, '基础库更新提醒', `gcs ${currentVersion} 更新提示`, dataSourceMdPath,
  '/tmp/cloud-service.version').then((requestId: string) => {
  console.log(`Send change log successes, request id is ${requestId}`);
}).catch((error) => {
  console.log(`Send change log fails, error is ${error.message}`);
});
