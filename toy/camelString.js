/**
 * 2018-05-21
 * @linweinb
 *
 * camelCase:
 * Return the camel cased string.
 *
 * Syntax:
 * camelCase(string);
 *
 * Arguments:
 * string(string): The string to convert.
 * 
 * Return:
 * The camel cased string.
 *
 *
 *
 *
 * For example:
 *
 * console.log(camelCase('Foo Bar'));  // => 'fooBar'
 *
 * console.log(camelCase('--Foo--bar--'));  // => 'fooBar'
 *
 * console.log(camelCase('__FOO__bAr__'));  // =>'fooBar'
 *
 */


if(!window.camelCase){
	var camelCase=(function(){
		"use strict";

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// filter the string.
		var filter=function(string,str,store,character){
			for(var i=0;i<string.length;i+=1){
				if(!(/[A-Za-z]/.test(character[i]))){
					if(i!==0){
						if(str!==''){
							store.push(str);
						}
						str='';
					}
					continue;
				}
				str+=character[i];
				if(i===string.length-1&&str!==''){
					store.push(str);
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

		// change the filter split string to camel case.
		var change=function(store){
			for(var i=0,j,char;i<store.length;i+=1){
				char=Array.from(store[i]);
				for(j=0;j<char.length;j+=1){
					if(j===0){
						char[j]=i?char[j].toUpperCase():char[j].toLowerCase();
						continue;
					}
					char[j]=char[j].toLowerCase();
				}
				store[i]=char.join('');
			}
		};
		
		return function(string){
			if(isString(string)){
				var char=Array.from(string);
				var result=[];
				filter(string,'',result,char);
				change(result);
				return result.join('');
			} else{
				error('ArgumentsError.','Not string.');
			}
		};
	})();
}