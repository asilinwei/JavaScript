/**
 * 2018-08-09
 * @LinWei
 *
 * increase:
 * Give a non-negative integer num, find the largest integer
 * that is less than or equal to num with monotone increasing
 * digits. (An integer has monotone increasing digits if and only 
 * if each pair of adjacent digits x and y satisfy x <= y).
 *
 * Syntax:
 * increase(num)
 *
 * Arguments:
 * num(number): The non-negative integer to query.
 *
 * Return:
 * The largest integer.
 *
 * For example:
 *
 * increase(332)
 * // => 299
 *
 * increase(123)
 * // => 123
 *
 * increase(12.3)
 * // => NaN
 *
 * increase(-23)
 * // => NaN 
 *
 */

if(!window.increase){
	var increase=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var is=function(num){
			var pre,cur;
			while(num>0){
				cur=num%10;
				if(pre<cur){
					return false;
				}
				pre=cur;
				num-=cur;
				num/=10;
			}
			return true;
		};

		// find the largest number.
		var find=function(num){
			while(!is(num)){
				num-=1;
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
				return num>=0&&!(num%1)?find(num):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
