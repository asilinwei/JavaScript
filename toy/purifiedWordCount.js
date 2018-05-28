/**
 * 2018-05-28
 * @linweinb
 *
 * purifiedWordCount:
 * Calculate the number of purified words in a string.
 *
 * Syntax:
 * purifiedWordCount(string)
 *
 * Arguments:
 * string(string): The string to calculate.
 *
 * Return:
 * The number of the purified words.
 *
 *
 * For example:
 * 
 * console.log(purifiedWordCount('mother father son'));  // => 3
 *
 * console.log(purifiedWordCount('mo_ther father son'));  // => 2
 */

if(!window.purifiedWordCount){
	var purifiedWordCount=(function(){
		"use strict";

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// throw the error.
		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		
		return function(string){
			if(isString(string)){
				var match=string.match(/\b[a-z]+\b/ig);
				return match?match.length:0;
			} else{
				error('ArgumentsError','Not string.');
			}
		};
	})();
}