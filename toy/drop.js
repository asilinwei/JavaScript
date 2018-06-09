/**
 * 2018-05-20
 * @linweinb
 * 
 * drop:
 * Return a new slice array with n elements dropped from the begining.
 *
 * Syntax:
 * drop(array,[n=0]);
 * 
 * Arguments:
 * array(Array): The array to query.
 * [n=0](number): The number of elements to drop.
 *
 * Return:
 * A new slice array.
 *
 *
 *
 *
 * For example:
 *
 * var array=[1,2,3,4];
 *
 * console.log(drop(array)); // => [1,2,3,4]
 *  
 * console.log(drop(array,1));  // => [2,3,4]
 *
 * console.log(drop(array,2));  // => [3,4]
 *
 */ 


if(!window.drop){
	var drop=(function(){
		"use strict";

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// check if it is a legal number.
		var isOverflow=function(array,value){
			if(isArray(array)){
				var length=array.length;
				return isNumber(value)&&
					   !(value>=0&&
					   value<=length);
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
		return function(array,n){
			if(isArray(array)&&array.length){

				var result=[];    // the new slice array to return.
				var length=array.length;  

				n=n||0;    // the default number is zero.

				if(!isOverflow(array,n)){
					for(var i=0;i<length;i+=1){
						if(i<n){
							continue;
						}
						result.push(array[i]);
					}
				} else{
					error('ArgumentsError','The number of elements to drop is error.');
				}
			} else{
				return [];
			}
			return result;
		};
	})();
}



/**
 * 2018-05-20
 * @linweinb
 *
 * dropRight:
 * Drop elements from end with the specified number, return a new splice array.
 *
 * Syntax:
 * dropRight(array,[n=0]);
 *
 * Arguments:
 * array(Array): The array to query.
 * [n=0](number): The number of elements to drop.
 *
 *
 *
 *
 * For example:
 *
 * var array=[1,2,3,4,5];
 * 
 * console.log(dropRight(array));  // => [1,2,3,4,5]
 *
 * console.log(dropRight(array,1));  // => [1,2,3,4]
 *
 * console.log(dropRight(array,2));  // => [1,2,3]
 */


if(!window.dropRight){
	var dropRight=(function(){
		"use strict";

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// check if it is a legal number.
		var isOverflow=function(length,value){
			return isNumber(length)&&
				   isNumber(value)&&
				   value>=0&&
				   value<=length;
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
		return function(array,n){
			if(isArray(array)&&array.length){

				var length=array.length;
				n=n||0;  // the default number of elements to drop is zero.

				if(isOverflow(length,n)){

					var result=[];  // the new splice array to return.

					for(var i=0;i<length;i+=1){
						if(i===length-n){
							break;
						}
						result.push(array[i]);
					}
				} else{
					error('ArgumentsError','The number of elements to drop is error.');
				}
			} else{
				return [];
			}
			return result;
		};
	})();
}