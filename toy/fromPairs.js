/**
 * 2018-06-22
 * @LinWei
 *
 * fromPairs:
 * Create an object composed from key-value pairs.
 *
 * Syntax:
 * fromPairs(pairs)
 *
 * Arguments:
 * pairs(Array): The key-value pairs.
 *
 * Return:
 * A new object.
 *
 * For example:
 *
 * fromPairs([['a', 1], ['b', 2]])
 * // => { a:1, b:2 } 
 *
 */

if(!window.fromPairs){
	var fromPairs=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var length=function(array){
			return array.length;
		};

		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		// add properties.
		var addProperties=function(array,obj){
			for(var i=0;i<length(array);i+=1){
				if(!isArray(array[i])){
					continue;
				}
				obj[array[i][0]]=array[i][1];
			}
		};
		
		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		return function(array){
			if(isArray(array)){
				var obj={};
				addProperties(array,obj);
				return obj;
			}
			error('ArgsError','Not array.');
		};
	})();
}