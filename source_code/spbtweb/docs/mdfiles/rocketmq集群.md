# 理论先行
首先在这两台机器上分别启动NameServer（nohup sh bin/mqnamesrv &），这样我们就得到了一个无单点的NameServer服务，服务地址是“192.168.100. 131:9876; 192.168.100.132:9876”。然后启动Broker，每台机器上都要分别启动一个Master角色的Broker和一个Slave角色的Broker，并互为主备。可以基于RocketMQ自带的示例配置文件写自己的配置文件（示例配置文件在conf/2m-2s-sync目录下）。
- 192.168.100.131机器上Master Broker的配置文件：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020031717422770.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70)
- 192.168.100.132机器上Master Broker的配置文件：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200317174303342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70)
- 192.168.100.131机器上Slave Broker的配置文件：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200317174345496.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70)
- 192.168.100.132机器上Slave Broker的配置文件：
![在这里插入图片描述](https://img-blog.csdnimg.cn/202003171744109.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70)
然后分别使用如下命令启动四个Broker：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200317174500308.png)
这样一个高可用的RocketMQ集群就搭建好了，还可以在一台机器上启动rocketmq-console，比如在192.168.100.131上启动RocketMQ-console，然后在浏览器中输入地址192.168.100.131:8080，这样就可以可视化地查看集群状态了。
### 配置参数介绍
本节将逐个介绍Broker配置文件中用到的参数含义：
- namesrvAddr=192.168.100.131:9876; 192.168.100.132:9876
NamerServer的地址，可以是多个。
- brokerClusterName=DefaultCluster
Cluster的地址，如果集群机器数比较多，可以分成多个Cluster，每个Cluster供一个业务群使用。
- brokerName=broker-a
Broker的名称，Master和Slave通过使用相同的Broker名称来表明相互关系，以说明某个Slave是哪个Master的Slave。
- brokerId=0
一个Master Borker可以有多个Slave,0表示Master，大于0表示不同Slave的ID。
- fileReservedTime=48
在磁盘上保存消息的时长，单位是小时，自动删除超时的消息。
- deleteWhen=04
与fileReservedTime参数呼应，表明在几点做消息删除动作，默认值04表示凌晨4点
- brokerRole=SYNC_MASTE
RbrokerRole有3种：SYNC_MASTER、ASYNC_MASTER、SLAVE。关键词SYNC和ASYNC表示Master和Slave之间同步消息的机制，SYNC的意思是当Slave和Master消息同步完成后，再返回发送成功的状态。
- flushDiskType=ASYNC_FLUSH
flushDiskType表示刷盘策略，分为SYNC_FLUSH和ASYNC_FLUSH两种，分别代表同步刷盘和异步刷盘。同步刷盘情况下，消息真正写入磁盘后再返回成功状态；异步刷盘情况下，消息写入page_cache后就返回成功状态。
- listenPort=10911
Broker监听的端口号，如果一台机器上启动了多个Broker，则要设置不同的端口号，避免冲突。
- storePathRootDir=/home/rocketmq/store-a
存储消息以及一些配置信息的根目录。
>这些配置参数，在Broker启动的时候生效，如果启动后有更改，要重启Broker。现在使用云服务或多网卡的机器比较普遍，Broker自动探测获得的ip地址可能不符合要求，通过brokerIP1=47.98.41.234这样的配置参数，可以设置Broker机器对外暴露的ip地址。
---
# 实践操作
|服务名称    |   服务器地址|  服务类型          |      端口|    配置文件            |
|---|---|---|---|---|
|nameserver-1| 172.23.26.31| 注册中心1          |   9876   |                        |
|nameserver-2| 172.23.26.89| 注册中心2          |   9876   |                        |
|broker-a-0  | 172.23.26.31| broker服务a的master|  10911   |broker-a.properties     |
|broker-a-1  | 172.23.26.89| broker服务a的slave |   10921  | broker-a-s.properties  |
|broker-b-0  | 172.23.26.89| broker服务b的master|  10911   |broker-b.properties     |
|broker-b-1  | 172.23.26.31| broker服务b的slave |   10921  |broker-b-s.properties   |

---
## 环境准备
jdk
maven（3.5以上）

在两台服务器上分别创建/home/software目录，maven和rocketmq文件包都放在此目录下
wget http://mirror.bit.edu.cn/apache/maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.tar.gz    下载3.5.4版本maven
tar -zxvf apache-maven-3.5.4-bin.tar.gz   解压压缩包

向环境变量中添加maven
vim /etc/profile
文件末尾追加  export M2_HOME=/home/software/apache-maven-3.5.4
在PATH后面追加  :$M2_HOME/bin
保存并推出配置文件
source /etc/profile   刷新环境变量缓存
执行 mvn -version 判断是否成功

---

## 本次配置开始
在rocketmq的conf目录下，rocketmq默认给出了三种建议配置模式，分别为3个目录
2m-2s-async(主从异步),----本次采用这种
2m-2s-sync(主从同步)
2m-noslave(仅master)
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200317173505947.png) ![在这里插入图片描述](https://img-blog.csdnimg.cn/2020031717351188.png)
## 修改2m-2s-async下的配置文件

autoCreateTopicEnable=true,开启自动创建topic，（网上文章建议线下开启测试,线上关闭）

同一个机器上启动多个broker时,需使用不同的broker配置文件来启动实例,
服务器节点1启动一个a-m和b-s,使用broker-a.properties和broker-b-s.properties
listenPort默认为10911,当一个机器上启动多个broker示例时,需区分开端口
broker启动时,默认内存设置比较大,改成适合机器的
当一个节点启动多个broker实例时,存储路径如果显示的设置,则需要指定不同的storePath路径

###### 在172.23.26.31和172.23.26.89服务器上创建一下两个mq日志store目录
/home/rocketmq/store-a
/home/rocketmq/store-b

###### 在172.23.26.31和172.23.26.89的rocketmq应用根目录下创建logs启动日志目录

###### 在rocketmq应用的conf目录下执行以下命令
sed -i "s/\${user.home}/\/home\/rocketmq/g"  logback_broker.xml
sed -i "s/\${user.home}/\/home\/rocketmq/g"  logback_namesrv.xml
sed -i "s/\${user.home}/\/home\/rocketmq/g"  logback_tools.xml
修改rocketmq的默认日志目录，方便下面配置自定义的日志目录

###### 在172.23.26.31服务器上修改broker-a.properties
brokerClusterName=RocketmqCluster
brokerName=broker-a
brokerId=0
#删除文件时间点，默认凌晨 4点
deleteWhen=04
#文件保留时间，默认 48 小时
fileReservedTime=48
brokerRole=ASYNC_MASTER
flushDiskType=ASYNC_FLUSH
#Broker 对外服务的监听端口
listenPort=10911
#nameserver地址，分号分割
namesrvAddr=172.23.26.31:9876;172.23.26.89:9876
#Broker 机器对外暴露的ip 地址
brokerIP1=172.23.26.31
#在发送消息时，自动创建服务器不存在的topic，默认创建的队列数
defaultTopicQueueNums=4
#是否允许 Broker 自动创建Topic，建议测试开启，生产关闭
autoCreateTopicEnable=true
#是否允许 Broker 自动创建订阅组，建议测试开启，生产关闭
autoCreateSubscriptionGroup=true
#文件保存根路径
storePathRootDir=/home/rocketmq/store-a
storePathCommitLog=/home/rocketmq/store-a
#消费队列存储路径存储路径
storePathConsumerQueue=/home/rocketmq/store-a
#消息索引存储路径
storePathIndex=/home/rocketmq/store-a
#checkpoint 文件存储路径
storeCheckpoint=/home/rocketmq/store-a
#abort 文件存储路径
abortFile=/home/rocketmq/store-a
#commitLog每个文件的大小默认1G
mapedFileSizeCommitLog=1073741824
#ConsumeQueue每个文件默认存30W条，根据业务情况调整
mapedFileSizeConsumeQueue=300000

###### 在172.23.26.31服务器上修改broker-b-s.properties
brokerClusterName=RocketmqCluster
brokerName=broker-b
brokerId=1
#删除文件时间点，默认凌晨 4点
deleteWhen=04
#文件保留时间，默认 48 小时
fileReservedTime=48
brokerRole=SLAVE
flushDiskType=ASYNC_FLUSH
#Broker 对外服务的监听端口
listenPort=10921
#nameserver地址，分号分割
namesrvAddr=172.23.26.31:9876;172.23.26.89:9876
#Broker 机器对外暴露的ip 地址
brokerIP1=172.23.26.31
#在发送消息时，自动创建服务器不存在的topic，默认创建的队列数
defaultTopicQueueNums=4
#是否允许 Broker 自动创建Topic，建议测试开启，生产关闭
autoCreateTopicEnable=true
#是否允许 Broker 自动创建订阅组，建议测试开启，生产关闭
autoCreateSubscriptionGroup=true
#文件保存根路径
storePathRootDir=/home/rocketmq/store-b
storePathCommitLog=/home/rocketmq/store-b
#消费队列存储路径存储路径
storePathConsumerQueue=/home/rocketmq/store-b
#消息索引存储路径
storePathIndex=/home/rocketmq/store-b
#checkpoint 文件存储路径
storeCheckpoint=/home/rocketmq/store-b
#abort 文件存储路径
abortFile=/home/rocketmq/store-b
#commitLog每个文件的大小默认1G
mapedFileSizeCommitLog=1073741824
#ConsumeQueue每个文件默认存30W条，根据业务情况调整
mapedFileSizeConsumeQueue=300000

###### 在172.23.26.89上修改broker-b.properties
brokerClusterName=RocketmqCluster
brokerName=broker-b
brokerId=0
#删除文件时间点，默认凌晨 4点
deleteWhen=04
#文件保留时间，默认 48 小时
fileReservedTime=48
brokerRole=ASYNC_MASTER
flushDiskType=ASYNC_FLUSH
listenPort=10911
#nameserver地址，分号分割
namesrvAddr=172.23.26.31:9876;172.23.26.89:9876
#Broker 机器对外暴露的ip 地址
brokerIP1=172.23.26.89
#在发送消息时，自动创建服务器不存在的topic，默认创建的队列数
defaultTopicQueueNums=4
#是否允许 Broker 自动创建Topic，建议测试开启，生产关闭
autoCreateTopicEnable=true
#是否允许 Broker 自动创建订阅组，建议测试开启，生产关闭
autoCreateSubscriptionGroup=true
#文件保存根路径
storePathRootDir=/home/rocketmq/store-b
storePathCommitLog=/home/rocketmq/store-b
#消费队列存储路径存储路径
storePathConsumerQueue=/home/rocketmq/store-b
#消息索引存储路径
storePathIndex=/home/rocketmq/store-b
#checkpoint 文件存储路径
storeCheckpoint=/home/rocketmq/store-b
#abort 文件存储路径
abortFile=/home/rocketmq/store-b
#commitLog每个文件的大小默认1G
mapedFileSizeCommitLog=1073741824
#ConsumeQueue每个文件默认存30W条，根据业务情况调整
mapedFileSizeConsumeQueue=300000

###### 在172.23.26.89上修改broker-a-s.properties
brokerClusterName=RocketmqCluster
brokerName=broker-a
brokerId=1
#删除文件时间点，默认凌晨 4点
deleteWhen=04
#文件保留时间，默认 48 小时
fileReservedTime=48
brokerRole=SLAVE
flushDiskType=ASYNC_FLUSH
listenPort=10921
#nameserver地址，分号分割
namesrvAddr=172.23.26.31:9876;172.23.26.89:9876
#Broker 机器对外暴露的ip 地址
brokerIP1=172.23.26.89
#在发送消息时，自动创建服务器不存在的topic，默认创建的队列数
defaultTopicQueueNums=4
#是否允许 Broker 自动创建Topic，建议测试开启，生产关闭
autoCreateTopicEnable=true
#是否允许 Broker 自动创建订阅组，建议测试开启，生产关闭
autoCreateSubscriptionGroup=true
#文件保存根路径
storePathRootDir=/home/rocketmq/store-a
storePathCommitLog=/home/rocketmq/store-a
#消费队列存储路径存储路径
storePathConsumerQueue=/home/rocketmq/store-a
#消息索引存储路径
storePathIndex=/home/rocketmq/store-a
#checkpoint 文件存储路径
storeCheckpoint=/home/rocketmq/store-a
#abort 文件存储路径
abortFile=/home/rocketmq/store-a
#commitLog每个文件的大小默认1G
mapedFileSizeCommitLog=1073741824
#ConsumeQueue每个文件默认存30W条，根据业务情况调整
mapedFileSizeConsumeQueue=300000

## 修改启动脚本
修改bin目录下的runbroker.sh脚本，将  
JAVA_OPT="${JAVA_OPT} -server -Xms8g -Xmx8g -Xmn4g"     修改为
JAVA_OPT="${JAVA_OPT} -server -Xms512m -Xmx512m -Xmn256m"    减小应用启动后占用的内存资源。

修改bin目录下的runserver.sh脚本，将
JAVA_OPT="${JAVA_OPT} -server -Xms4g -Xmx4g -Xmn2g -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"    修改为
JAVA_OPT="${JAVA_OPT} -server -Xms512m -Xmx512m -Xmn126m -XX:PermSize=128m -XX:MaxPermSize=320m"    减小应用启动后占用的内存资源。

修改bin目录下的tools.sh脚本，将
JAVA_OPT="${JAVA_OPT} -server -Xms1g -Xmx1g -Xmn256m -XX:PermSize=128m -XX:MaxPermSize=128m"    修改为
JAVA_OPT="${JAVA_OPT} -server -Xms256m -Xmx256m -Xmn128m -XX:PermSize=128m -XX:MaxPermSize=128m "    减小应用启动后占用的内存资源。

###### 运行脚本启动服务
###### 启动nameServer
在172.23.26.31和172.23.26.89的rocketmq应用根目录下创建nameServer启动脚本startNamesvr.sh，脚本内容如下：
nohup sh bin/mqnamesrv > ./logs/namesrvrun.log 2>&1 &
执行下面的命令为脚本添加可执行权限：
chmod +x startNamesvr.sh
./startNamesvr.sh 运行脚本，启动nameServer服务。

###### 在172.23.26.31服务器上启动a-master的broker服务
创建startBroker-a-master.sh脚本，内容如下：
nohup sh bin/mqbroker -c conf/2m-2s-async/broker-a.properties > ./logs/broker-a.log 2>&1 &
执行下面的命令为脚本添加可执行权限：
chmod +x startBroker-a-master.sh
./startBroker-a-master.sh运行脚本，启动broker服务。

###### 在172.23.26.31服务器上启动b-slave的broker服务
创建startBroker-b-slave.sh脚本，内容如下：
nohup sh bin/mqbroker -c conf/2m-2s-async/broker-b-s.properties > ./logs/broker-b-s.log 2>&1 &
执行下面的命令为脚本添加可执行权限：
chmod +x startBroker-b-slave.sh
./startBroker-b-slave.sh运行脚本，启动broker服务。

###### 在172.23.26.89服务器上启动b-master的broker服务
创建startBroker-b-master.sh脚本，内容如下：
nohup sh bin/mqbroker -c conf/2m-2s-async/broker-b.properties > ./logs/broker-b.log 2>&1 &
执行下面的命令为脚本添加可执行权限：
chmod +x startBroker-b-master.sh
./startBroker-b-master.sh运行脚本，启动broker服务。

###### 在172.23.26.89服务器上启动a-slave的broker服务
创建startBroker-a-slave.sh脚本，内容如下：
nohup sh bin/mqbroker -c conf/2m-2s-async/broker-a-s.properties > ./logs/broker-a-s.log 2>&1 &
执行下面的命令为脚本添加可执行权限：
chmod +x startBroker-a-slave.sh
./startBroker-a-slave.sh运行脚本，启动broker服务。


## 启动RocketMq-console控制台查看集群状态
在mq控制台包文件rocketmq-console-ng-1.0.1.jar所在目录执行以下命令启动控制台，控制台连接的nameSrv设置集群里的两个中的任何一个即可
172.23.26.31:9876/172.23.26.89:9876

java -jar rocketmq-console-ng-1.0.1.jar --server.port=12581 --rocketmq.config.namesrvAddr=172.23.26.11:9876
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200317175220916.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70)
进入cluster面板下能看到集群服务信息