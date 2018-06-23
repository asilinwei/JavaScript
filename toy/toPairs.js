/**
 * 2018-06-23
 * @LinWei
 *
 * toPairs:
 * Create an array of own enumerable properties key-value pairs
 * for object.
 *
 * Syntax:
 * toPairs(object)
 *
 * Arguments:
 * object(Object): The object to query.
 *
 * Return:
 * The array of key-value pairs.
 *
 * For example:
 *
 * function Foo(){
      this.a=1;
      this.b=2;
   }

   Foo.prototype.c=3;
   
   toPairs(new Foo());
 * // => [['a', 1], ['b', 2]]
 *
 */

if(!window.toPairs){
	var toPairs=(function(){
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

		// typeof obj is 'object' but not includes null.
		var isObject=function(obj){
			return isTypeOfObject(obj)&&!isNull(obj);
		};

		var isFunction=function(fn){
			return typeOf(fn)==='function';
		};

		// check if it is object type.
		var isObjectType=function(obj){
			return isObject(obj)||isFunction(obj)?true:false;
		};

		var length=function(array){
			return array.length;
		};

		// push elements.
		var push=function(obj,array,result){
			var chunk;
			for(var i=0;i<length(array);i+=1){
				chunk=[];
				chunk.push(array[i],obj[array[i]]);
				result.push(chunk);
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(obj){
			if(isObjectType(obj)){
				var result=[];
				push(obj,Object.keys(obj),result);
				return result;
			}
			error('ArgsError','Not object type.');
		};
	})();
}
