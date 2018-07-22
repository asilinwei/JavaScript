/**
 * 2018-07-22
 * @LinWei
 *
 * isRepeat:
 * Check if the non-empty string is constructed by repeating
 * substring.
 *
 * Syntax:
 * isRepeat(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * Return true if the string can be constructed by repeating
 * substring, else false.
 *
 * For example:
 *
 * isRepeat('abcabcabc')
 * // => true
 *
 * isRepeat('abc')
 * // => false
 *
 */

if(!window.isRepeat){
	var isRepeat=(function(){
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

		var has=function(array,element){
			for(var i=0;i<length(array);i+=1){
				if(array[i]===element){
					return true;
				}
			}
			return false;
		};

		var substrings=function(substring,string,len){
			for(var i=0;i<=length(string)-len;i+=len){
				substring.push(string.substring(i,i+len));
			}
		};

		var isAllEqual=function(substring){
			var element=substring[0];
			for(var i=1;i<length(substring);i+=1){
				if(element!==substring[i]){
					return false;
				}
			}
			return true;
		};

		var collectLength=function(subLength,string){
			for(var i=1;i<=Math.sqrt(length(string));i+=1){
				if(!(length(string)%i)){
					subLength.push(i);
					if(!has(subLength,length(string)/i)&&length(string)/i!==length(string)){
						subLength.push(length(string)/i);
					}
				}
			}
		};

		var check=function(subLength,string){
			for(var i=0,substring;i<length(subLength);i+=1){
				substring=[];
				substrings(substring,string,subLength[i]);
				if(isAllEqual(substring)){
					return true;
				}
			}
			return false;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string){
			if(isString(string)){
				if(!length(string)){
					return false;
				}
				var subLength=[];
				collectLength(subLength,string);
				return check(subLength,string);
			}
			error('ArgsError','Not string.');
		};
		
	})();
}
