/**
 * 2018-08-22
 * @LinWei
 *
 * findReplace:
 * Find all the words that match the given pattern.
 *
 * Syntax:
 * findReplace(words, pattern)
 *
 * Arguments:
 * words(Array): The array of words.
 * pattern(string): The pattern to query.
 *
 * Return:
 * The array of words that match the pattern.
 *
 * For example:
 *
 * findReplace(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'tbb')
 * // => ['mee', 'aqq'] 
 *
 */

if(!window.findReplace){
	var findReplace=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(x){
			return x.length;
		};

		var has=function(o,v){
			var keys=Object.keys(o);
			for(var i=0,key;i<length(keys);i+=1){
				key=keys[i];
				if(o[key]===v){
					return true;
				}
			}
			return false;
		};

		var isMatch=function(string,pattern){
			var obj={};
			if(length(string)!==length(pattern)){
				return false;
			}
			for(var i=0,key;i<length(string);i+=1){
				key=string[i];
				if(!obj[key]&&!has(obj,pattern[i])){
					obj[key]=pattern[i];
				} else{
					if(obj[key]!==pattern[i]){
						return false;
					}
				}
			}
			return true;
		};

		var push=function(array,result,pattern){
			for(var i=0;i<length(array);i+=1){
				if(!isString(array[i])){
					continue;
				}
				if(isMatch(array[i],pattern)){
					result.push(array[i]);
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array,pattern){
			if(isArray(array)&&isString(pattern)){
				var result=[];
				push(array,result,pattern);
				return result;
			}
			error('ArgsError','Illegal type.');
		};

	})();
}