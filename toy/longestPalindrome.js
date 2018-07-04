/**
 * 2018-07-03
 * @LinWei
 *
 * longestPalindrome:
 * Find longest palindromic substrings.
 *
 * Syntax:
 * longestPalindrome(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The array includes longest palindromic substrings.
 *
 * For example:
 *
 * longestPalindrome('babad')
 * // => ['bab', 'aba']
 *
 * longestPalindrome('helloabccbabuhamtkktmbhx')
 * // => ['abccba', 'mtkktm']
 * 
 * longestPalindrome('abbc')
 * // => ['bb']
 *
 */

if(!window.longestPalindrome){
	var longestPalindrome=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		var length=function(x){
			return x.length;
		};

		// substring.
		var substr=function(string,start,end){
			return string.substring(start,end);
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// get all substrings.
		var substrings=function(string,array){
			for(var i=0,j;i<length(string);i+=1){
				for(j=i+1;j<=length(string);j+=1){
					array.push(substr(string,i,j));
				}
			}
		};

		// check if it is even number.
		var isEvenNumber=function(number){
			return number%2===0;
		};

		// reverse string.
		var reverse=function(string){
			return Array.from(string).reverse().join('');
		};

		var push=function(substring,result){
			var left,right;
			for(var i=0;i<length(substring);i+=1){
				left=isEvenNumber(length(substring[i]))?
					 substr(substring[i],0,length(substring[i])/2):
					 substr(substring[i],0,(length(substring[i])-1)/2);
				right=isEvenNumber(length(substring[i]))?
					  substr(substr(substring[i],length(substring[i])/2)):
					  substr(substring[i],(length(substring[i])+1)/2);
				if(right===reverse(left)){
					result.push(substring[i]);
				}	  	 
			}
		};

		// longest length.
		var longest=function(array){
			var max=0;
			for(var i=0;i<length(array);i+=1){
				if(length(array[i])>max){
					max=length(array[i]);
				}
			}
			return max;
		};

		// find substrings of longest length.
		var find=function(result,filter){
			for(var i=0;i<length(result);i+=1){
				if(length(result[i])===longest(result)){
					filter.push(result[i]);
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
				var substring=[],
				    result=[],
				    filter=[];
				substrings(string,substring);
				push(substring,result);
				find(result,filter);
				return filter;
			}
			error('ArgsError','Not string.');
		};

	})();
}
