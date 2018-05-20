/**
 * 2018-05-20
 * @linweinb
 * 
 * union:
 * Return a new array of unique elements.
 *
 * Syntax:
 * union([array]);
 * 
 * Arguments:
 * [array](Array...): The arrays to inspect.
 *
 * Return:
 * A new array of combined values.
 *
 *
 *
 * For example:
 * 
 * console.log(union([1,2,3],[2,3,4],[3,4,5]));  // => [1,2,3,4,5]
 *
 */

if(!window.union){
	var union=(function(){
		"use strict";

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if the array includes the element.
		var includes=function(array,element){
			if(isArray(array)){
				var length=array.length;
				for(var i=0;i<length;i+=1){
					if(array[i]===element){
						return true;
					}
				}
				return false;
			} else{
				error('ArgumentsError','Not array.');
			}
		};

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// throw the error.
		var error=function(type,message){
			if(isString(type)&&isString(message)){
				throw {
					type:type,
					message:message
				};
			}
		};

		return function(){
			if(arguments.length){

				var result=[];  // the new array to return.
				var length1=arguments.length;  // the number of arguments. 

				for(var i=0,j,length2,element;i<length1;i+=1){
					if(isArray(arguments[i])){
						length2=arguments[i].length;
						for(j=0;j<length2;j+=1){
							element=arguments[i][j];
							if(includes(result,element)){
								continue;
							}
							result.push(arguments[i][j]);
						}
					} else{
						error('ArgumentsError','Not array.');
					}
				}
				return result;
			} else{
				return [];
			}
		};
	})();
}