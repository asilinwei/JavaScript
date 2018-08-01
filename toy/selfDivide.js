/**
 * 2018-08-01
 * @LinWei
 *
 * selfDivide:
 * Give a lower and upper bound, return an array
 * of every possible self dividing number, includes
 * the bounds.
 *
 * Note:
 * A self-dividing number is a number that is divisible
 * by every digit it contains. For example, 128 is self-dividing
 * number because 128 % 1 === 0, 128 % 2 === 0, 128 % 8 === 0.
 * A self-dividing number is not allowed to contain the digit
 * zero.
 *
 * Syntax:
 * selfDivide(low, up)
 *
 * Arguments:
 * low(number): The lower bound.
 * up(number): The upper bound.
 *
 * Return:
 * The array of all self-dividing numbers.
 *
 * For example:
 * selfDivide(0, 22)
 * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 *
 *
 */

if(!window.selfDivide){
	var selfDivide=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var length=function(x){
			return x.length;
		};

		// check if it is self-dividing number.
		var isSelf=function(num){
			var len=length(''+num),a=num,k=a%10;
			while(!(num%k)&&a&&k){
				a-=k;
				a/=10;
				k=a%10;
				len-=1;
			}
			return !len;
		};

		var push=function(result,low,up){
			for(var i=low;i<=up;i+=1){
				if(isSelf(i)){
					result.push(i);
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(low,up){
			if(isNumber(low)&&isNumber(up)){
				var result=[];
				push(result,low,up);
				return result;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
