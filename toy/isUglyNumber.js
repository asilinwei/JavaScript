/**
 * 2018-07-15
 * @LinWei
 *
 * isUglyNumber:
 * Check if it is ugly number. 
 * Ugly numbers are positive numbers whose prime factors
 * only include 2, 3 and 5.
 *
 * Syntax:
 * isUglyNumber(number)
 *
 * Arguments:
 * number(number): The positive number to query.
 *
 * Return:
 * Return true if the positive number is an ugly number,
 * else false.
 *
 * For example:
 *
 * isUglyNumber(6)
 * // => true 
 * // 2 * 3 = 6
 *
 * isUglyNumber(8)
 * // => true
 * // 2 * 2 * 2 = 8
 *
 * isUglyNumber(14)
 * // => false
 * // 14 is not ugly number because it includes another
 * // prime factor 7.
 *
 */

if(!window.isUglyNumber){
	var isUglyNumber=(function(){
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

		var length=function(array){
			return array.length;
		};

		// recursion.
		var mod=function(num,factor){
			for(var i=0;i<length(factor);i+=1){
				if(num%factor[i]===0){
					num/=factor[i];
					if(num===1||mod(num,factor)){
						return true;
					}
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
				switch(true){
					case num<1:
					     return false;
					case num===1:
					     return true;
					default:
					     return mod(num,[2,3,5]);          
				}
			}
			error('ArgsError','Not number.');
		};

	})();
}
