/**
 * 2018-08-07
 * @LinWei
 *
 * maxProduct:
 * Give a string array words, find the maximum
 * value of length(words[i]) * length(words[j])
 * where the two words do not have common letters.
 *
 * Syntax:
 * maxProduct(words)
 *
 * Arguments:
 * words(Array): The array of words.
 *
 * Return:
 * The maximum product.
 *
 * For example:
 *
 * maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'])
 * // => 16
 * // The two words can be 'abcw', 'xtfn'.
 *
 * maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'])
 * // => 4
 * // The two words can be 'ab', 'cd'.
 *
 * maxProduct(['a', 'aa', 'aaa', 'aaaa'])
 * // => 0
 * // No such pair of words.
 *
 */

if(!window.maxProduct){
	var maxProduct=(function(){
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

		// check if two strings have common letter.
		var has=function(string,str){
			for(var i=0,j;i<length(string);i+=1){
				for(j=0;j<length(str);j+=1){
					if(string[i]===str[j]){
						return true;
					}
				}
			}
			return false;
		};

		var maxi=function(words,word,max){
			for(var i=0,product;i<length(words);i+=1){
				if(!has(word,words[i])){
					product=length(word)*length(words[i]);
					if(max<product){
						max=product;
					}
				}
			}
			return max;
		};

		var find=function(words){
			for(var i=0,max=0;i<length(words);i+=1){
				if(!isString(words[i])){
					continue;
				}
				max=maxi(words,words[i],max);
			}
			return max;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(words){
			if(isArray(words)){
				return find(words);
			}
			error('ArgsError','Not array.');
		};
		
	})();
}
