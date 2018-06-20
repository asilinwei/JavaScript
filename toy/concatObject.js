/**
 * 2018-06-20
 * @LinWei
 *
 * concatObject:
 * Create an object literal concatenating all object literals.
 *
 * Syntax:
 * concatObject([object...])
 *
 * Arguments:
 * [object...](Object): Object literals to concat.
 *
 * Return:
 * The concatenated object.
 *
 * For example:
 *
 * concatObject({ a:1, b:2 }, { c:3, d:4 })
 * // => { a:1, b:2, c:3, d:4 }
 *
 * concatObject({ a:1, b:2 }, { a:2, c:3 })
 * // => { a:1, b:2, c:3 }
 *
 */

if(!window.concatObject){
	var concatObject=(function(){
		"use strict";

		var prototype=Object.prototype;
		var getPrototype=Object.getPrototypeOf;

		// check if it is object literal.
		var isObjectLiteral=function(obj){
			return getPrototype(obj)==prototype;
		};

		var hasOwnProperty=function(obj,name){
			return obj.hasOwnProperty(name);
		};

		var length=function(obj){
			return obj.length;
		};

		// add properties.
		var addProperties=function(names,store,obj,index){
			for(var i=0;i<length(names);i+=1){
				if(hasOwnProperty(store,names[i])){
					continue;
				}
				store[names[i]]=obj[index][names[i]];
			}
		};

		var process=function(obj,store){
			var names;
			for(var i=0;i<length(obj);i+=1){
				if(isObjectLiteral(obj[i])){
					names=Object.keys(obj[i]);
					addProperties(names,store,obj,i);
				}
			}
		};
		
		return function(){
			var obj={};
			var names;
			process(arguments,obj);
			return obj;
		};
	})();
}
