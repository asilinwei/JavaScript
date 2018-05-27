/**
 * 2018-05-27
 * @linweinb
 * 
 * sumBy:
 * Calculate the total of property value with the specified identity.
 *
 * Syntax:
 * sumBy(array,identity);
 *
 * Arguments:
 * array(Array): The array to traverse.
 * identity(Function|string): The identity to find.
 *
 * Return:
 * The total.
 *
 *
 * For example:
 * var array=[{n:1},{n:2},{n:3}];
 *
 * console.log(array,function(o){
		return o.n;	
   });
 * // => 6
 *
 * console.log(array,'n');
 * // => 6
 *
 */  


if(!window.sumBy){
	var sumBy=(function(){
		"use strict";

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if it is a function.
		var isFunction=function(fn){
			var toString=Object.prototype.toString;
			return toString.apply(fn)==='[object Function]';
		};

		// check if it is an object.
		var isObject=function(obj){
			var toString=Object.prototype.toString;
			return toString.apply(obj)==='[object Object]';
		};

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// if the identity is a function.
		var func=function(o,fn){
			if(isNumber(fn(o))){
				return fn(o);
			} else{
				error('TypeError','Not number.');
			}
		};

		// if the identity is a string.
		var string=function(o,key){
			if(isNumber(o[key])){
				return o[key];
			} else{
				error('TypeError','Not number.');
			}
		};

		// throw the error.
		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		return function(array,identity){
			if(isArray(array)){
				var total=0;
				for(var i=0;i<array.length;i+=1){
					if(!isObject(array[i])){
						continue;
					}
					switch(true){
						case isFunction(identity):
						     total+=func(array[i],identity);
						     break;
						case isString(identity):
							 total+=string(array[i],identity);
							 break;
						default:
							 error('ArgumentsError','Not function or string.');	 
					}
				}
				return total;
			} else{
				error('ArgumentsError','Not array.');
			}
		};
	})();
}
