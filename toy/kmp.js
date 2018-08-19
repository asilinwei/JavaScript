/**
 * 2018-08-19
 * @LinWei
 *
 * kmp:
 * Find the position of substring using KMP algorithm
 * (https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm). 
 * If can not find, return -1.
 *
 * Syntax:
 * kmp(string, sub)
 *
 * Arguments:
 * string(string): The string to query.
 * sub(string): The substring to query.
 *
 * Return:
 * The position.
 *
 * For example:
 *
 * kmp('abbaabbaaba','abbaaba')
 * // => 4
 *
 * kmp('abcd','e')
 * // => -1
 *
 * kmp('','')
 * // => -1
 *
 */

if(!window.kmp){
	var kmp=(function(){
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

		var maxMatch=function(array,sub,start,cur){
			while(cur!==sub[start]){
				start=array[start-1];
				if(start===undefined){
					return 0;
				}
			}
			return start+1;
		};

		var pushMatch=function(array,sub){
			for(var i=1,cur;i<length(sub);i+=1){
				cur=sub[i];
				array.push(maxMatch(array,sub,array[i-1],cur));
			}
		};

		var find=function(array,string,sub){
			var i=0,j=0;
			while(i<length(string)){
				if(string[i]===sub[j]){
					j+=1;
					if(j===length(sub)){
						return i+1-length(sub);
					}
					i+=1;
				} else{
					if(j){
						j=array[j-1];
					} else{
						i+=1;
					}
				}
			}
			return -1;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,sub){
			if(isString(string)&&isString(sub)){
				var array=[0];
				pushMatch(array,sub);
				return find(array,string,sub);
			}
			error('ArgsError','Not string.');
		};
		
	})();
}