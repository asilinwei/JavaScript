/**
 * 2018-07-29
 * @LinWei
 *
 * posLargeGroups:
 * Give a string, every character in the string form
 * consecutive groups of the same character. For example,
 * a string like 'abbxxxxzyy' has the groups 'a','bb', 'xxxx',
 * 'z' and 'yy'. The large group has 3 or more characters, 
 * we would like the start and end positions of every large
 * group.
 *
 * Syntax:
 * posLargeGroups(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The array includes some groups of indexes.
 *
 * For example:
 *
 * posLargeGroups('abbxxxxzzy')
 * // => [[3, 6]]
 * // => 'xxxx' is the single group with starting 3 and ending positions 6.
 *
 * posLargeGroups('abcdddeeeeaabbbcd')
 * // => [[3, 5], [6, 9], [12, 14]]
 *
 */

if(!window.posLargeGroups){
	var posLargeGroups=(function(){
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

		var push=function(string,groups){
			for(var i=0,j,str,chunk;i<length(string);i=j){
				str=string[i];
				chunk=[];
				j=i+1;
				while(string[i]===string[j]){
					str+=string[j];
					j+=1;
				}
				if(length(str)>=3){
					chunk.push(i,j-1);
					groups.push(chunk);
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string){
			if(isString(string)){
				var groups=[];
				push(string,groups);
				return groups;
			}
			error('ArgsError','Not string.');
		};
		
	})();
}
