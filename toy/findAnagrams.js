/**
 * 2018-07-18
 * @LinWei
 *
 * findAnagrams:
 * Find all the start position of p's anagrams in string.
 *
 * Syntax:
 * findAnagrams(string, p)
 *
 * Arguments:
 * string(string): The string to query.
 * p(string): The string which is to find its anagrams.
 *
 * Return:
 * The array includes some indexes.
 *
 * For example:
 * 
 * findAnagrams('bacfgcbakt', 'abc')
 * // => [0, 5]
 * // The substring with start index = 0 is 'bac', which is an anagram of 'abc'.
 * // The substring with start index = 5 is 'cba', which is an anagram of 'abc'.
 *
 */

if(!window.findAnagrams){
	var findAnagrams=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var length=function(string){
			return string.length;
		};

		// sort the string.
		var sort=function(string){
			return Array.from(string).sort().join('');
		};

		var push=function(index,string,p){
			for(var i=0,j,str,count;i<length(string)-(length(p)-1);i+=1){
				str=string[i];
				for(j=i+1,count=1;count<length(p);j+=1,count+=1){
					str+=string[j];
				}
				if(sort(str)===sort(p)){
					index.push(i);
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,p){
			if(isString(string)&&isString(p)){
				var index=[];
				push(index,string,p);
				return index;
			}
			error('ArgsError','Not string.');
		};
	})();
}
