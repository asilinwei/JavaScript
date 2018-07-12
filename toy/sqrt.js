/**
 * 2018-07-12
 * @LinWei
 *
 * sqrt:
 * Return the square root of a non-negative integer.
 *
 * Syntax:
 * sqrt(x)
 *
 * Arguments:
 * x(number): The integer to query.
 *
 * Return:
 * The square root.
 *
 * For example:
 *
 * sqrt(25)
 * // => 5
 * 
 * sqrt(26)
 * // => 5
 *
 * sqrt(-4)
 * // => null
 *
 */

if(!window.sqrt){
	var sqrt=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// calculate the square root.
		var calculate=function(i,n){
			while(i*i<n){
				i+=1;
			}
			return i*i>n?i-1:i;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(n){
			if(isNumber(n)){
				return n>=0?calculate(0,n):null;
			}
			error('ArgsError','Not number.');
		};

	})();
}
