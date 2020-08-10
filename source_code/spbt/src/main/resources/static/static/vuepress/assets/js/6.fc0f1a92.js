(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{346:function(t,s,a){"use strict";a.r(s);var _=a(40),o=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sonar-lint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sonar-lint"}},[t._v("#")]),t._v(" Sonar Lint")]),t._v(" "),a("p",[t._v("第一个必须是 SonarLint 了，我知道的大部分公司用来检查代码规范的工具, 就是 SonarQube，对于 SonarQube 我就不过多介绍了，这里主要聊一聊 Sonar Lint 这款 IDEA 插件，理论上 Jetbrains 全家桶都可以用。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装部分就省略掉了，直接进入配置环节。")])]),t._v(" "),a("li",[a("p",[t._v("安装插件并重启后，打开系统设置，找到如图所示的选项：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095434374.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("点击 + 新增一个后端服务。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("如果你们公司不是用 SonarQube 扫描代码，或者没有一个公共的后端，可以省略步骤 3 - 5，SonarLint 可以独立使用。")])]),t._v(" "),a("blockquote",[a("p",[t._v("绑定服务端的好好处是可以统一管理规则，方便自定义一些检查规则，如果是独立运行（单机版），是享受不到规则实时更新、统一管理等特性的。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095521269.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n4. 选择 token 或 username/password 进行认证，填入必要的信息后，服务器配置完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019121009554279.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095600542.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("切换至项目配置，将当前项目与服务端项目进行绑定：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095700179.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("当我们编写了不规范的代码时，效果大致如图所示：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095725409.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("还可以配置成在提交代码之前先检查一遍修改了的文件：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095747155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095819106.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h1",{attrs:{id:"checkstyle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkstyle"}},[t._v("#")]),t._v(" CheckStyle")]),t._v(" "),a("p",[t._v("CheckStyle 也是我们经常会用到的插件之一，贴心的社区大佬们贡献了 IDEA 版本的插件，名叫 CheckStyle-IDEA。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("我们搜索安装这个插件，安装完成后重启 IDE 即可使用：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210095928428.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("默认情况下，直接使用默认配置即可。如果想定制规则，直接修改配置即可。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210100000864.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("这个插件也支持在提交代码前进行检查：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210100022140.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h1",{attrs:{id:"findbugs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findbugs"}},[t._v("#")]),t._v(" FindBugs")]),t._v(" "),a("p",[t._v("除了 CheckStyle 以外，我们也经常需要检测代码的安全性，这时候就用到了 FindBugs 插件，同样是 IDEA 版本的，名叫 FindBugs-IDEA。")]),t._v(" "),a("ol",[a("li",[t._v("同上，我们搜索安装这个插件，安装完成后重启 IDE 即可使用：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210100128282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n2. 默认情况下，直接使用默认配置即可。如果想定制规则，直接修改配置即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210100211469.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n3. 这个插件也支持在提交代码前进行检查：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191210100242420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NvdWxfUHJvZ3JhbW1lcl9Td2g=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=o.exports}}]);