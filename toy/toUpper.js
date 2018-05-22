/**
 * 2018-05-22
 * @linweinb
 *
 * toUpper:
 * Convert every character to upper case.
 *
 * Syntax:
 * toUpper([string='']);
 *
 * Arguments:
 * [string=''](string): The string to query.
 *
 * Return:
 * The upper case string.
 *
 *
 *
 *
 * For example:
 * console.log('__abc_d_e__');  // => '__ABC_D_E__'
 *
 */ 

if(!window.toUpper){
	var toUpper=(function(){
		"use strict";

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		return function(string){

			string=string||'';   // the default string is ''.

			if(isString(string)){
				var array=Array.from(string);
				for(var i=0;i<array.length;i+=1){

					// filter
					if(!(/[A-Za-z]/.test(array[i]))){
						continue;
					}

					// if the character is lower case, convert it to upper case.
					if(array[i]>'`'&&array[i]<'{'){
						var charCode=array[i].charCodeAt();
						array[i]=String.fromCharCode(charCode-32);
					}

				}
				
				return array.join('');
			}
		};
	})();
}
