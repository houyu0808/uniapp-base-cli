**Baisea前端代码命名规范文档**
---
### 变量/文件命名 | 路由命名
> 小驼峰: homePage
---
### 外部定义class类 
> 大驼峰: StudentClass
---
### 常量命名
> 大写字母,多单词采用下划线间隔: MAX_LENGTH
---
### css中class名
> 以 - 作为单词连接符: main-body
---
### 文件目录结构
> + pages (只允许出现底部菜单栏对应的tabber文件)
>  - tabbar-1
>    - 对应该tabbar下的所有子页面
> + service(存放http请求封装的js文件)
> + static (静态资源文件)
>  - background
>  - icon
>  - image
>    * 依据不同模块创建文件夹,图片文件命名以 _ 作为单词连接符: arrow_left
>  - logo
>  - temSource (临时资源，暂时在页面中充当占位图片，后续从服务端获取)
> + store (存放Vuex文件)
> + style (存放样式表scss文件)
> + utils (存放工具类js文件)

    - 不允许出现额外自定义的文件名
    - 超过三个页面使用到的css样式一定要在全局css文件中进行定义
    - 禁止取无意义的和拼音变量名 类似于 anniu1

---
