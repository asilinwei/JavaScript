/**
 * 2018-08-06
 * @LinWei
 *
 * match:
 * Give a string and an array of words, return the number
 * of array[i] that is a subsequence of the string.
 *
 * Syntax:
 * match(string, words)
 *
 * Arguments:
 * string(string): The string to query.
 * words(Array): The array of words.
 *
 * Return:
 * The number of subsequences.
 *
 * For example:
 *
 * match('abcde', ['a', 'bb', 'acd', 'ace'])
 * // => 3
 * // There are three words in words that are a subsequence of the string: 'a', 'acd', 'ace'.
 *
 */

if(!window.match){
	var match=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var typeOf=function(value){
			return typeof value;
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

		// the index of start.
		var startFrom=function(string,target,start){
			for(var i=start;i<length(string);i+=1){
				if(string[i]===target){
					return i+1;
				}
			}
		};

		var is=function(string,str){
			if(!isString(str)){
				return false;
			}
			for(var i=0,start;i<length(str);i+=1){
				start=startFrom(string,str[i],i?start:0);
				if(!start){
					return false;
				}
			}
			return true;
		};

		var count=function(string,words){
			var i=0,c=0,str;
			while(i<length(words)){
				str=words[i];
				if(is(string,str)){
					c+=1;
				}
				i+=1;
			}    
			return c;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,words){
			if(isString(string)&&isArray(words)){
				return count(string,words);
			}
			error('ArgsError','Illegal type.');
		};

	})();
}
