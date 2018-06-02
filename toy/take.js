/**
 * 2018-06-02
 * @linweinb
 *
 * take:
 * Create an array which is taken n elements from the array.
 *
 * Syntax:
 * take(array,[n=1])
 *
 * Arguments:
 * array(Array): The array to query.
 * [n=1]: The number of elements to take from.
 *
 * Return:
 * The final array.
 *
 * For example:
 *
 * take([1,2,3,4],2)
 * // => [1,2]
 *
 * take([1,2,3,4],3)
 * // => [1,2,3]
 *
 * take([1,2,3,4])
 * // => [1]
 *
 */
if(!window.take){
	var take=(function(){
		"use strict";

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// check if the arguments legal.
		var isLegal=function(array,number){
			return isArray(array)&&isNumber(number);
		};

		// the length of array.
		var length=function(x){
			return x.length>=0?x.length:0;
		};

		// the legal number of elements to take from.
		var legalLength=function(array,num){
			return num<=length(array)?num:length(array);
		};

		// push the element.
		var push=function(array,store,num){
			var length=legalLength(array,num);
			for(var i=0;i<length;i+=1){
				store.push(array[i]);
			}
		};

		return function(array,number){
			number=number||1;
			if(isLegal(array,number)){
				var result=[];
				push(array,result,number);
				return result;
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
		};
	})();
}

