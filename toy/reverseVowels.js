/**
 * 2018-07-20
 * @LinWei
 * 
 * reverseVowels:
 * Reverse only the vowels of a string.
 *
 * Syntax:
 * reverseVowels(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The string only reverse vowels.
 *
 * For example:
 *
 * reverseVowels('hello')
 * // => 'holle'
 *
 * reverseVowels('leetcode')
 * // => 'leotcede'
 *
 */

if(!window.reverseVowels){
	var reverseVowels=(function(){
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

		// check if it is vowel.
		var isVowel=function(char){
			var array=['a','e','i','o','u'];
			for(var i=0;i<length(array);i+=1){
				if(char===array[i]){
					return true;
				}
			}
			return false;
		};

		var collect=function(string,vowels,index){
			for(var i=0;i<length(string);i+=1){
				if(isVowel(string[i])){
					vowels.push(string[i]);
					index.push(i);
				}
			}
		};

		var reverse=function(string,reverse,index){
			var array=Array.from(string);
			for(var i=0;i<length(reverse);i+=1){
				array[index[i]]=reverse[i];
			}
			return array.join('');
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string){
			if(isString(string)){
				var vowels=[],index=[];
				collect(string,vowels,index);
				return reverse(string,vowels.reverse(),index);
			}
			error('ArgsError','Not string.');
		};
		
	})();
}
