/**
 * 2018-05-23
 * @linweinb
 *
 * snakeCase:
 * Convert the string to snake case.
 *
 * Syntax:
 * snakeCase(string);
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The snake case string.
 *
 *
 *
 * For example:
 * 
 * console.log(snakeCase('Foo Bar'));  // => 'foo_bar'
 *
 * console.log(snakeCase('__fooBar__'));  // => 'foo_bar'
 *
 */

if(!window.snakeCase){
	var snakeCase=(function(){
		"use strict";

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// check if is it camel case.
		var isCamel=function(string){
			return /^[^A-Za-z]*[a-z]+([A-Z][a-z]+)*[^A-Za-z]*$/.test(string)?
					true:
					false;
		};

		// check if it is divided with some other character.
		var isDivide=function(string){
			return /^[^A-Za-z]*[A-Za-z]+([^A-Za-z]+[A-Za-z]+)*[^A-Za-z]*$/.test(string)?
				   true:
				   false;
		};

		// process the divisive case string.
		var divide=function(array,store){
			var length=array.length;
			for(var i=0;i<length;i+=1){
				if(!(/[A-Za-z]/.test(array[i]))){
					continue;
				}
				store.push(array[i].toLowerCase());
				if(!(/[A-Za-z]/.test(array[i+1]))){
					store.push('_');
				}
			}
			if(store[store.length-1]==='_'){
				store.pop();
			}
		};

		// process the camel case string.
		var camel=function(array,store){
			var length=array.length;
			for(var i=0;i<length;i+=1){
				if(!(/[A-Za-z]/.test(array[i]))){
					continue;
				}
				store.push(array[i].toLowerCase());
				if(/[A-Z]/.test(array[i+1])){
					store.push('_');
				}
			}
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
				var result=[];
				var array=Array.from(string);
				if(isCamel(string)){
					camel(array,result);
				} else{
					divide(array,result);
				}
				return result.join('');
			} else{
				error('ArgumentsError','Not string.');
			}
		};
	})();
}