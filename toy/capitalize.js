/**
 * 2018-05-22
 * @linweinb
 *
 * capitalize:
 * Convert the first character of string to upper case and
 * the remain characters to lower case.
 *
 * Syntax:
 * capitalize([string='']);
 *
 * Arguments:
 * [string=''](string): The string to query.
 * 
 * Return:
 * The capitalize string.
 *
 *
 *
 *
 * For example:
 * 
 * console.log(capitalize('fRED'));  // => 'Fred'
 */

if(!window.capitalize){
	var capitalize=(function(){
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

			string=string||'';  // the default string is ''.

			if(isString(string)){
				var array=Array.from(string);
				for(var i=0;i<array.length;i+=1){
					array[i]=i?array[i].toLowerCase():array[i].toUpperCase();
				}
				return array.join('');
			} else{
				error('ArgumentsError','Not string.');
			}
		};
	})();
}

