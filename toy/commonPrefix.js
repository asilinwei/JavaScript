/**
 * 2018-07-07
 * @LinWei
 *
 * commonPrefix:
 * Find the common prefix of all strings.
 *
 * Syntax:
 * commonPrefix(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The common prefix.
 *
 * For example:
 *
 * commonPrefix(['color', 'cook', 'cold'])
 * // => 'co'
 *
 * commonPrefix(['hello', 'help', 'low'])
 * // => ''
 *
 * commonPrefix(['', 'hello', 'help'])
 * // => ''
 *
 */

if(!window.commonPrefix){
	var commonPrefix=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var length=function(x){
			return x.length;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var isAllHave=function(array,mark,position){
			for(var i=0;i<length(array);i+=1){
				if(!isString(array[i])){
					continue;
				}
				if(array[i][position]!==mark){
					return false;
				}
			}
			return true;
		};

		var find=function(array){
			for(var i=0;i<length(array);i+=1){
				if(isString(array[i])){
					return length(array[i])?array[i]:'';
				}
			}
		};

		var accumulate=function(array){
			for(var i=0,str='';i<length(find(array));i+=1){
				if(isAllHave(array,find(array)[i],i)){
					str+=find(array)[i];
				}
			}
			return str;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array){
			if(isArray(array)){
				if(!length(array)||!find(array)){
					return '';
				}
				return accumulate(array);
			}
			error('ArgsError','Not array.');
		};
	})();
	
}
