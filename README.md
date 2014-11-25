angular-down-file-directive
=================

AngularJS指令下载Excel、Text文档。

原则上我们下载文件可以直接 `<a href="url" target="_blank">get</a>`，可问题是我们需要身份验证等，怎么办？

所以从后端请求数据后，再转为客户端保存，而核心是创建Blob对象，当然这也会用很多问题，比如浏览器兼容等等。

好在已经有人对进行详细的分析，所以这里我引用了 [FileSaver.js](https://github.com/eligrey/FileSaver.js)。

总之当你选择这个指令时，一定要先了解 FileSaver.js。

使用说明
=================

添加`cipchk`模块到你的应用。

```javascript
angular.module('myApp', ['cipchk', ...]);
```

html标记
```html
<button type="button" down-file="test.txt" down-file-type="txt" file-name="文件名" class="btn btn-primary">下载</button>
```

参数
=================

+  **httpType**：HTTP请求方式，GET或POST。
+  **fileName**：指定文件名，或者请求源返回在header的x-filename。
+  **httpData**：请求源参数。

依赖
=================

+  [FileSaver.js](https://github.com/eligrey/FileSaver.js)


bower install
=================

```bash
$ bower install angular-down-file-directive --save
```
