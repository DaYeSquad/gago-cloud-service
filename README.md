# 概述

cloud-service 是将佳格数据平台中用到的云服务的部分代码分离便于各个 app 分别调用。

目前包含了发送各种邮件的服务以及上传的服务。

# 模块

目前使用云服务的模块有阿里云的邮箱服务(dms)和阿里云的存储服务(oss)，调用代码见 `test.ts`。

# 安全性

等公司人员增加后需要按权限划分是否可以看到 key, secret 之后需要将 `Aliyun.ts` 中的代码分离出配置文件。

# 安装依赖

`npm install`

# 发布为库

`gulp`

# 测试

`npm test`

# Aliyun Config 建议在服务初始化是调用
## 使用AliyunConfig参数传入
 - `Aliyun.setConfig({enterpriseId: "ENTERPRISE_ID", accessId: "ACCESS_ID", accessSecret: "ACCESS_SECRET", ossRegion: "OSS_REGION"});`
 
**注:因为当前账号密码配置需要通过AliyunConfig传入或者通过ENV设置，现在调用上传下载使用ossClient需捕获错误三项**
**1.GET_OSS_CLIENT_ERROR_ACCESS_ID 表示ACCESS_ID未配置为空**
**2.GET_OSS_CLIENT_ERROR_ACCESS_SECRET 表示ACCESS_SECRET未配置为空**
**3.GET_OSS_CLIENT_ERROR_OSS_REGION 表示REGION 未配置为空**