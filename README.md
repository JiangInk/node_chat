# node_chat

Node.JS 聊天室应用

![node_chat](chat.jpg "chat root")

本项目运用 Express &amp; Socket.IO &amp; MongoDB ；

## 如何使用

1. `git clone https://github.com/JiangInk/node_chat.git`

2. `cd node_chat/`

3. `npm install && bower install`

### 如何运行

首先运行 _MongoDB_ 服务：

	mongod --config /usr/local/etc/mongod.conf

然后运行 _Express_ 应用:

    ./bin/www

### 如何构建

使用 `gulp` 进行前端工程构建：

*  构建命令： `gulp`

*  清空命令： `gulp clean`

*  监听命令： `gulp watch`


---

