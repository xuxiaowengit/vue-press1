## Vue框架

> 发音念与 view 同音 ，作者：尤雨溪 ，前就职于google  ，现任职于 阿里。早期是个人开发维护，随着Vue被广大开发者使用和接纳，为了后期的更好维护框架，肯定会组建专门的团队负责Vue开发和维护。（Vue官方团队除了维护Vue框架以外，还会对Vue周边的工具（vue-cli , devtools , vue-loader）， 模块(路由 , vuex ，各种构建工具的依赖)提供官方的支持。）

>目前主流的前端三大框架（MVVM模型框架） ：
>
>​	1.Vue  (161K ， 2016年，具有友好的中文官方文档)（PC + 移动端），在移动端有绝对的优势
>
>​		移动端支持：Weex
>
>​	2.React （facebook , 147K ， 2013年，只有翻译过来的中文文档）（PC + 移动端）
>
>​		移动端支持：React-Native(RN)
>
>​	3.Angular (google ,1.x  59.6K , 2.x+  59.K , 2009年发布 ， 只有翻译过来的中文文档) - 多数用在PC端
>
>​		移动端支持：Ionic

---

#### Vue框架知识点(问题):

###### 1.虚拟DOM？

###### 2.transition （动画组件）

###### 3.计算属性，methods啥区别 ?

###### 4.render 

###### 5.路由守卫 

###### 6.watcher 监听器

###### 7.生命周期（钩子函数）

###### 8.vue-devtools 

###### 9.Vue组件

###### 10.slot 插槽

###### 11.全局过滤器

###### 12.SPA 与 MPA的区别

###### 13.MVVM模式
~~~
（MVC : Model 模型数据 ， V 视图 ， C 控制器）
V(view) : 指的是视图区域（html部分） 
M（model）：指的是模型中的数据（按后台数是操作数据库部分）
C（controller）：指的是请求处理业务的部分
上面的MVC模式就是适应于后端 ，其实前端中只需要处理：将对应的模型数据渲染指定的视图位置(MV)。

~~~
~~~
理解为： 数据的双向绑定 ，将模型(M)中的数据直接渲染到视图（V），然后可以通过一些表单控件，来实现修改视图（V）的数据内容，从而修改到模型（M）中的数据，当模型中的数据发生变化的时候，会重新更新到视图。（遵循着单向数据流的理念）

在vue中实现双向绑定的使用方式 ： 可以使用v-model指令完成。

----------------------------------------------------------------------------------
原理：（通过对模型中定义的数据进行数据劫持，然后通过观察者模式对所有依赖该数据的位置做监听，如果一旦数据发生变化，立即通知更新）
	2.x 中 ：Object.defineProperty() + observe(观察者模式)
	3.x 中 ：Proxy （代理） + observe

----------------------------------------------------------------------------------
~~~

###### 14. v-for列表循环中的key属性的的作用

###### 15.nextTick

###### 16.观察者模式（observe） （订阅 发布者模式） 略有区别，订阅发布模式可以多些自定义操作（耦合度低）

>当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。比如，当一个对象被修改时，则会自动通知它的依赖对象 ,定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。 

~~~
场景：买房人去售楼处咨询楼盘信息

角色：
	老王（顾客，需要买房的人） - > 观察的对象（订阅者）
	小李（楼盘售前业务员） - >目标对象（发布）

1.当老王去售楼部找小李咨询楼盘信息。
老王：小李，最近有什么样的楼盘？  （老王，其实想买4房）	
小李：xxxxx . 目前只有2房和3房 , 过段时间可能有4房
老王：那行 ，过一阵子，我再来问问。

2.过了半个月 ，老王又去找小李
老王：最近有4房的吗
小李：听老板说在xx地块已经在建4房的了 ，应该很快...
老王：那行 ，过一阵子，我再来问问。

3.过了两个月 ， 老王又去找小李
老王：最近有4房的吗
小李：因为住建局的管控，工程延误问题， 现在还暂时没有 ，可能还要半年
老王：那行 ，过一阵子，我再来问问。

.....

上面就是模拟了，在视图中的内容（需要有数据更新后立即更新渲染，但是不确定是什么时候数据更新，所以渲染内容的那个机制就是需要一直询问模型中的数据是否发生变化，如果没有就不做更新，但一旦询问到更新了，就需要重新渲染内容 （因为不确定什么时候更新，所以会一直询问 ，所以这样就非常费性能）。

-------------------------------------------------------------------------------
流程优化：让老王做个登记，留个联系方式。有了4房就电话通知他。 （不需要频繁询问）

~~~

###### 关于发布订阅模式 和观察者模式的区别对比:

![](I:\QQ直播视频录制\WT18\Vue\md-imgs\观察者模式与订阅发布模式的区别.webp)

 





---

> 具体的使用API 查看 官方文档： <https://cn.vuejs.org/v2/guide/> 

> 在jQuery这种以操作DOM为主的库中是先有DOM 然后操作 ，但是在MVVM框架中，是以数据为驱动，通过数据实现渲染和呈现效果。

> **指令**

~~~
指令其实就是框架中提供的一种概念，因为框架会对html元素的属性做了一些扩展（说白了就是给html标签添加了一些新的属性，不同的属性在框架中会有不同作用）。 这些属性 并非W3C标准，只是根据框架定义的。
~~~



> 在vue的视图中， 我们不需要通过额外的js dom操作来实现数据的渲染，在vue框架中 ，已经内置了模板引擎(mutache.js) ，语法就是使用 {{变量或者js表达式}}

> **解决出现短暂的{{}} 闪烁的问题**:
>
> **起因**：因为当网页加载完之后 ，其实应该是先看html的渲染内容，然后再去加载vue.js脚本，加载完之后，进行new Vue() 的实例化，根据实例化的参数el 来找到对应的挂载点元素（如果实例化参数中没有指定template属性，则会以指定的el属性元素作为当前实例的视图模板），再之后才是进行模板的内容渲染 （通过模板引擎解析模板，将数据内容替换，然后替换到el指定的挂载元素位置），所以在加载完html至被替换渲染内容中会有一段空白时间，期间就是显示的{{}} 。
>
> **解决**：使用v-cloak 指令 ，需要使用属性选择器 ，设置[v-cloak]属性元素 为隐藏， 当vue渲染完之后 ，会把所有模板中元素v-cloak属性移除，那么移除之后之前设置的隐藏元素样式就不匹配了，所以就解决了花括号闪烁的问题。

