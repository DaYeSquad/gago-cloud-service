/**
 * Created by jiangwei on 2017/6/18.
 * Copyright (c) 2017 (jw872505975@gmail.com). All rights reserved.
 */
import * as chai from 'chai';
import {Aliyun, AliyunConfigOptions} from '../service/aliyun';

/**
 * 单元测试阿里云
 */
describe('Aliyun ', () => {

  /**
   * 单元测试阿里云配置方法
   */
  it('Test getOssClient() AliyunConfig', () => {

    let config: AliyunConfigOptions = {
      enterpriseId: '123456',
      accessId: 'test_accessKeyId',
      accessSecret: 'test_accessKeySecret',
      ossRegion: 'test_region'
    };

    Aliyun.setConfig(config);
    let ossClient: any = Aliyun.getOssClient('gago-data');
    chai.expect(ossClient['options']['region']).to.equal('test_region');
    chai.expect(ossClient['options']['accessKeyId']).to.equal('test_accessKeyId');
    chai.expect(ossClient['options']['accessKeySecret']).to.equal('test_accessKeySecret');
  });
});
