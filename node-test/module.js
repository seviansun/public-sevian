//module.js
var name;
exports.setName = function(thyName){
	name = thyName ;
};

exports.sayhello = function(){
	console.log('Hello world —— ' + name);
};