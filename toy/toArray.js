/**
 * 2018-06-24
 * @LinWei
 *
 * toArray:
 * Converts to an array.
 *
 * Syntax:
 * toArray(value)
 *
 * Arguments:
 * value(*): The value to query. 
 *
 * Return:
 * The array.
 *
 * For example:
 *
 * toArray({ a:1, b:2 })
 * // => [1, 2]
 *
 * toArray('hello')
 * // => ['h', 'e', 'l', 'l', 'o']
 *
 * toArray(true)
 * // => []
 *
 */

if(!window.toArray){
	var toArray=(function(){
		"use strict";

		var typeOf=function(x){
			return typeof x;
		};

		var isTypeOfObject=function(x){
			return typeOf(x)==='object';
		};

		var isNull=function(value){
			return value===null;
		};

		// not include null.
		var isObject=function(obj){
			return isTypeOfObject(obj)&&!isNull(obj);
		};

		var isFunction=function(obj){
			return typeOf(obj)==='function';
		};

		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is object type.
		var isObjectType=function(obj){
			return isObject(obj)||isFunction(obj)?true:false;
		};

		var length=function(x){
			return x.length;
		};

		// push elements.
		var push=function(x,len,array){
			for(var i=0;i<len;i+=1){
				array.push(isObjectType(x)?x[Object.keys(x)[i]]:x[i]);
			}
		};

		return function(x){
			var result=[];
			if(isObjectType(x)||isString(x)){
				push(x,length(isObjectType(x)?Object.keys(x):x),result);
			}
			return result;
		};
	})();
}