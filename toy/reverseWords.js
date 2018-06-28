/**
 * 2018-06-29
 * @LinWei
 *
 * reverseWords:
 * Reverse words.
 *
 * Syntax:
 * reverseWords(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The string of reverse words.
 *
 * For example:
 *
 * reverseWords('The sky is blue')
 * // => 'blue is sky The' 
 *
 */

if(!window.reverseWords){
	var reverseWords=(function(){
		"use strict";

		var typeOf=function(x){
			return typeof x;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		
		return function(string){
			if(isString(string)){
				return string.match(/[a-z]+/ig)
				             .reverse()
				             .join(' ');
			}
			error('ArgsError','Not string.');
		};
	})();
}

