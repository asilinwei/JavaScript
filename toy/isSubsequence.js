/**
 * 2018-08-07
 * @LinWei
 *
 * isSubsequence:
 * Check if a string is the subsequence of another string.
 *
 * Note:
 * A subsequence of a string is a new string 
 * which is formed from the original string by 
 * deleting some (can be none) of the characters 
 * without disturbing the relative positions of 
 * the remaining characters. For example, 'ace'
 * is a subsequence of 'abcde' but 'aec' is not.
 *
 * Syntax:
 * isSubsequence(string, sub)
 *
 * Arguments:
 * string(string): The another string to query.
 * sub(string): The subsequence to query.
 *
 * For example:
 *
 * isSubsequence('ahbgdc', 'abc')
 * // => true
 *
 * isSubsequence('abcde','aec')
 * // => false
 *
 */

if(!window.isSubsequence){
	var isSubsequence=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// the length of string.
		var length=function(string){
			return string.length;
		};

		var startFrom=function(string,target,start){
			for(var i=start;i<length(string);i+=1){
				if(string[i]===target){
					return i+1;
				}
			}
		};

		var is=function(string,sub){
			for(var i=0,start=0;i<length(sub);i+=1){
				start=startFrom(string,sub[i],start);
				if(!start){
					return false;
				}
			}
			return true;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,sub){
			if(isString(string)&&isString(sub)){
				return is(string,sub);
			}
			error('ArgsError','Not string.');
		};
		
	})();
}
