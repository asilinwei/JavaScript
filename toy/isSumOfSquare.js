/**
 * 2018-07-19
 * @LinWei
 *
 * isSumOfSquare:
 * Give a non-negative integer sum, check if there are two
 * integers a and b such that a * a + b * b = sum.
 *
 * Syntax:
 * isSumOfSquare(sum)
 *
 * Arguments:
 * sum(number): The sum to query.
 *
 * Return:
 * Return true if a * a + b * b = sum, else false.
 *
 * For example:
 *
 * isSumOfSquare(5)
 * // => true
 * // Because 1 * 1 + 2 * 2 = 5.
 *
 * isSumOfSquare(3)
 * // => false 
 *
 */

if(!window.isSumOfSquare){
	var isSumOfSquare=(function(){
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

		// check if it is square.
		var isSquare=function(num){
			for(var i=0;i<=num;i+=1){
				if(i*i===num){
					return true;
				}
			}
			return false;
		};

		var check=function(num){
			for(var i=0;i<=num;i+=1){
				if(isSquare(num-i*i)){
					return true;
				}
			}
			return false;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				return num>=0?check(num):false;
			}
			error('ArgsError','Not number.');
		};

	})();
}
