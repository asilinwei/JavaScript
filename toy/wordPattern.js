/**
 * 2018-07-15
 * @LinWei
 *
 * wordPattern:
 * Return true if the string follows the pattern, else false.
 *
 * Syntax:
 * wordPattern(string, pattern)
 *
 * Arguments:
 * string(string): The string to query.
 * pattern(string): The pattern to match.
 *
 * Return:
 * true or false.
 *
 * For example:
 *
 * wordPattern('dog cat cat dog', 'abba')
 * // => true
 *
 * wordPattern('dog cat cat fish', 'abba')
 * // => false
 *
 */

if(!window.wordPattern){
	var wordPattern=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var length=function(x){
			return x.length;
		};

		var has=function(obj,name){
			return obj.hasOwnProperty(name);
		};

		var hasValue=function(obj,value){
			var names=Object.keys(obj);
			for(var i=0;i<length(names);i+=1){
				if(obj[names[i]]===value){
					return true;
				}
			}
			return false;
		};

		var findKey=function(obj,value){
			var names=Object.keys(obj);
			for(var i=0;i<length(names);i+=1){
				if(obj[names[i]]===value){
					return names[i];
				}
			}
		};

		var add=function(obj,match,pattern){
			for(var i=0,name;i<length(pattern);i+=1){
				name=pattern[i];
				if(!has(obj,name)&&!hasValue(obj,match[i])){
					obj[name]=match[i];
				}
			}
		};

		var check=function(match,obj,pattern){
			for(var i=0,str='',value;i<length(match);i+=1){
				value=match[i];
				str+=findKey(obj,value);
			}
			return str===pattern;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,pattern){
			if(isString(string)&&isString(pattern)){
				var match=string.match(/\b[a-z]+\b/ig);
				var obj={};
				if(length(match)!==length(pattern)){
					return false;
				}
				add(obj,match,pattern);
				return check(match,obj,pattern);
			}
			error('ArgsError','Not string.');
		};
		
	})();
}
