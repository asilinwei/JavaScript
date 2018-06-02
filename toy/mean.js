/**
 * 2018-06-02
 * @linweinb
 *
 * mean:
 * Calculate the mean of elements of the array.
 *
 * Syntax:
 * mean(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The mean.
 *
 * For example:
 *
 * mean([2,6,4])
 * // => 4
 *
 * mean([2,true,4])
 * // => 3
 *
 */

if(!window.mean){
	var mean=(function(){
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

		// the length of the array.
		var length=function(x){
			return x.length>=0?x.length:0;
		};

		var compare=function(a,b){
			return a<b;
		};

		// accumulate the sum and return the mean.
		var accumulate=function(array,sum,count){
			for(var i=0;compare(i,length(array));i+=1){
				if(!isNumber(array[i])){
					continue;
				}
				sum+=array[i];
				count+=1;
			}
			return sum/count;
		};
		
		return function(array){
			return isArray(array)?accumulate(array,0,0):0;
		};
	})();
}

