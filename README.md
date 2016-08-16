#模块开发
创建一个返回`Hello World`的hello()函数的newmodule模块
##1. `$ npm init`;
##2. `$ npm link`;会将模块全局第安装在计算机上，模块名称采用package.json中给出的名称
##3. 添加主文件
* `lib/newmodule.js`
* 更新package.json

```json
	"main": "./lib/newmodule.js"
```

##4. 添加测试文件
* test/test_assert.js加入

```javascript
	var assert = require('assert');
	var newmodule = require('../lib/newmodule.js');

	/*
	 * 测试hello()是否返回正确的字符串
	 */
	assert.equal(
		newmodule.hello(),
		"Hello World",
		"期待： 'Hello World',得到： "+ newmodule.hello()
	);
```
* 更新packages.json

```json
	"script": {
		"test": "node ./test/test_assert.js"
	}
```
* $ npm test;

##5. 添加可执行文件``
* bin/newmodule.js

```javascript
	#!/usr/bin/env node
	var newmodule = require('../lib/newmodule.js');
	console.log(newmodule.hello());
```
* 更新package.json

```json
	"bin": "bin/newmodule.js"
```

* `$ npm link`
* `$ newmodule`

##6. 面向对象编程
* lib/newmodule.js

```javascript
	module.exports = new newmodule();

	function newmodule(){}
	newmodule.prototype.hello = function(){
		return "Hello World";
	};
```

* `$ npm test`

##7. GitHub共享，更新package.json
```json
	"repository": {
		"type": "git",
		"url": "https://github.com/zhilidali/Node-demos/tree/master/newmodule"
	},
	"bugs": {
		"email": "1373653244@qq.com",
		"url": "https://github.com/zhilidali/Node-demos/issues"
	},
```
