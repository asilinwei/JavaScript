/**
 * 2018-06-03
 * @linweinb
 *
 * slice:
 * Create a slice array from start up to, but not include the end.
 * 
 * Syntax:
 * slice(array,[start=0],[end=array.length])
 *
 * Arguments:
 * array(Array): The array to query.
 * [start=0](number): The start position.
 * [end=array.length](number): The end position.
 *
 * Return:
 * The slice.
 *
 * For example:
 * 
 * slice([1,2,3,4,5],2,4)
 * // => [3,4]  
 *
 * slice([1,2,3,4,5],2)
 * // => [3,4,5]
 *
 * slice([1,2,3,4,5])
 * // => [1,2,3,4,5]
 *
 */

if(!window.slice){
	var slice=(function(){
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

		// the length of array.
		var length=function(x){
			return isArray(x)?x.length:undefined;
		};

		// check if two value are both number.
		var isBothNumber=function(num1,num2){
			return isNumber(num1)&&isNumber(num2);
		};

		// check if the arguments are legal type.
		var isLegalType=function(array,start,end){
			return isArray(array)&&isBothNumber(start,end);
		};

		// check if the start and the end position are in legal range.
		var isLegalRange=function(array,a,b){
			return isLessThan(a,b)&&!isOverflow(array,a,b);
		};

		var isLessThan=function(a,b){
			return a<b;
		};

		// check if the start position and the end position are overflow.
		var isOverflow=function(array,a,b){
			return a<0||b>length(array);
		};

		// push the elements into the slice array.
		var push=function(array,store,start,end){
			for(var i=start;isLessThan(i,end);i+=1){
				store.push(array[i]);
			}
		};

		return function(array,start,end){

			start=start||0;
			end=end||length(array);

			if(isLegalType(array,start,end)){

				var result=[];   // the slice array.

				if(isLegalRange(array,start,end)){
					push(array,result,start,end);
				} else{
					throw new CustomError('RangeError','Overflow.');
				}

				return result;
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
		};
	})();
}