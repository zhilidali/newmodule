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
