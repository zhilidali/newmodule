/*exports.hello = function() {
	return "Hello World";
};*/

module.exports = new Newmodule();

function Newmodule(){}
Newmodule.prototype.hello = function(){
	return "Hello World";
};
