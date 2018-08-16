/**
 * 2018-08-16
 * @LinWei
 *
 * addDigit:
 * Give a non-negative integer num, repeatedly add all
 * its digits until the result has only one digit.
 * Return the one digit.
 *
 * Syntax:
 * addDigit(num)
 *
 * Arguments:
 * num(number): The non-negative integer to query.
 *
 * Return:
 * The one digit.
 *
 * For example:
 *
 * addDigit(0)
 * // => 0
 *
 * addDigit(38)
 * // => 2
 * // The process is like: 3 + 8 = 11, 1 + 1 = 2. So return 2.
 *
 * addDigit(-1)
 * // => NaN
 *
 * addDigit(38.4)
 * // => 2
 * // Ignore the decimal point.
 *
 */

if(!window.addDigit){
	var addDigit=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var add=function(num){
			if(num>10){
				var sum=0;
				while(num){
					sum+=num%10;
					num-=num%10;
					num/=10;
				}
				num=add(sum);
			}
			return num;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				num=Math.floor(num);
				return num>=0?add(num):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
