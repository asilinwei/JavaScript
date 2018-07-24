/**
 * 2018-07-24
 * @LinWei
 *
 * pivot:
 * Find the first index where the sum of the numbers to 
 * the left of the index is equal to the sum of the numbers
 * to the right of the index, if can not find the index,
 * return -1.
 *
 * Syntax:
 * pivot(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The pivot index, if can not find the index, return -1.
 *
 * For example:
 *
 * pivot([1, 7, 3, 6, 5, 6])
 * // => 3 
 * // 1 + 7 + 3 = 5 + 6
 *
 * pivot([1, 2, 3])
 * // => -1
 *
 */

if(!window.pivot){
	var pivot=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(array){
			return array.length;
		};

		// calculate the sum.
		var sum=function(array,start,end){
			var sum=0;
			for(var i=start;i<end;i+=1){
				if(!isNumber(array[i])){
					continue;
				}
				sum+=array[i];
			}
			return sum;
		};

		// find the index.
		var index=function(array){
			for(var i=0,left,right;i<length(array);i+=1){
				left=sum(array,0,i);
				right=sum(array,i+1,length(array));
				if(left===right){
					return i;
				}
			}
			return -1;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array){
			if(isArray(array)){
				return length(array)===1?-1:index(array);
			}
			error('ArgsError','Not array.');
		};
		
	})();
}
