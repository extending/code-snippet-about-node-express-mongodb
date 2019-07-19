
[初始项目引自](https://www.jianshu.com/p/db4df1938eca)

# node + express

## 技术栈

- express

- express-generator 项目生成功能

- nodemon ·restart nodejs server for any changes·

    ````
    restart node application
    ````

- pug

- mongod

    - mongodb

        Robo 3T ：mongodb 可视化管理工具，类似 navicete，连接数据库前应启动 mongodb

    - 启动 mongod

        sudo mongod ```(若无法启动，则去目录 /data/db，sudo 删除 mongod.lock和storage.bson)```

    - 关闭 mongod
        - mongo(进入 mongo shell)
        - use admin
        - db.shutdownserver()

## TODO

- use mongodb