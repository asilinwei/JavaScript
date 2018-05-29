/**
 * 2018-05-29
 * @linweinb
 *
 * trim:
 * Get rid of the white space both sides of the string.
 *
 * Syntax:
 * trim(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The trimmed string.
 *
 *
 * For example:
 *
 * console.log(trim('    hello world    '));  // => 'hello world'
 *
 */


if(!window.trim){
	var trim=(function(){
		"use strict";

		// throw the error.
		var CustomError=function(type,message){
			this.type=type;
			this.message=message;
		};

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		return function(string){
			if(isString(string)){
				var match=string.match(/\b[\S\s]+\b/ig);   // match the result.
				return match?match.join(''):'';
			} else{
				throw new CustomError('ArgumentsError','Not string.');
			}
		};
	})();
}