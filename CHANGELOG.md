# 1.1.3 (2017.03.14.)

### Features

* **获取所有bucket文件列表 bucket.list** BoxService
* **获取文件url bucket.getObjectUrl** BoxService

# 1.1.2 (2016.12.29.)

### Features

* **封装了使用阿里云 oss 下载文件的功能** BoxService

# 1.1.1 (2016.12.22.)

### Features

* **完善了 BaseEmailService:** 修正了在发送 email 之后丢失 requestId 的 bug。


# 1.1.0 (2016.12.20.)

### Features

* **完善了 BaseEmailService:** 自动替换英文括号为中文括号。
* **增加 BaseEmailService.sendChangelog:** 添加一个发送数据平台团队使用的 CHANGELOG.md 的服务。


# 1.0 (2016.11.10.)

### Features

* **封装了使用阿里云邮件服务器发邮件的功能:** BaseEmailService。
* **封装了使用阿里云 oss 上传的功能:** BoxService。
