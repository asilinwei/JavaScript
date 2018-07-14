/**
 * 2018-07-11
 * @LinWei
 * 
 * pow:
 * Return the n exponent of x.
 *
 * Syntax:
 * pow(x, n)
 *
 * Arguments:
 * x(number): The base.
 * n(number): The exponent.
 *
 * Return:
 * The n power of x. 
 *
 * For example:
 *
 * pow(2, 3)
 * // => 8
 *
 * pow(2, -3)
 * // => 0.125
 *
 */

if(!window.pow){
	var pow=(function(){
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

		// absolute value.
		var abs=function(value){
			return value>0?value:-value;
		};

		var calculate=function(x,n){
			for(var i=0,result=1;i<abs(n);i+=1){
				result*=x;
			}
			return n>0?result:1/result;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(x,n){
			if(isNumber(x)&&isNumber(n)){
				return n!==0?calculate(x,n):1;
			}
			error('ArgsError','Not number.');
		};
	})();

}
