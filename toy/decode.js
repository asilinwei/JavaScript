/**
 * 2018-08-12
 * @LinWei
 *
 * decode:
 * Give an encoded string, decode the string as follow:
 * 1. If the character is a letter, that letter is written onto the tape.
 * 2. If the character is a digit, the entire current decoded string is repeatedly written digit - 1 more times in total.
 * 
 * Syntax:
 * decode(encode)
 *
 * Arguments:
 * encode(string): The encoded string.
 *
 * Return:
 * The decoded string. If encode is not a string, return false.
 *
 * Note:
 * The length of decoded string is less than 2000.
 *
 * For example:
 *
 * decode('leet2code3')
 * // => 'leetleetcodeleetleetcodeleetleetcode'
 *
 * decode('ha22')
 * // => 'hahahaha'
 *
 * decode(12)
 * // => false
 *
 */

if(!window.decode){
	var decode=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is digital character.
		var isNumChar=function(char){
			return char>='0'&&char<='9';
		};

		// the length of string.
		var length=function(string){
			return string.length;
		};

		// decode the string.
		var decode=function(string){
			var i=0,j,str='',cur;
			while(i<length(string)){
				if(isNumChar(string[i])){
					cur=str;
					j=0;
					while(j<string[i]-1&&length(str)<2000){
						str+=cur;
						j+=1;
					}
				} else{
					str+=string[i];
				}
				i+=1;
			}
			return str;
		};

		return function(string){
			return isString(string)?decode(string):false;
		};

	})();
}
