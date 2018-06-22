/**
 * 2018-06-22
 * @LinWei
 *
 * sum:
 * Calculate the sum of elements in array.
 *
 * Syntax:
 * sum(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The sum of elements.
 *
 * For example:
 *
 * sum([1, 2, 3, 4])
 * // => 10
 *
 * sum([1, true, 3, 4])
 * // => 8 
 *
 */

if(!window.sum){
	var sum=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var typeOf=function(value){
			return typeof value;
		};

		var length=function(array){
			return array.length;
		};

		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// accumulate the sum.
		var accumulate=function(array,sum){
			for(var i=0;i<length(array);i+=1){
				if(!isNumber(array[i])){
					continue;
				}
				sum+=array[i];
			}
			return sum;
		};

		return function(array){
			return isArray(array)?accumulate(array,0):null;
		};
	})();
}