/**
 * 2018-07-19
 * @LinWei
 *
 * isPerfect:
 * Return true if the number is a perfect number.
 * The perfect number is a positive number that
 * is equal to the sum of all its positive factors
 * except itself, else false.
 *
 * Syntax:
 * isPerfect(num)
 *
 * Arguments:
 * num(number): The number to query.
 *
 * Return:
 * true or false.
 *
 * For example:
 *
 * isPerfect(28)
 * // => true
 * // 1 + 2 + 4 + 7 + 14 = 28
 *
 * isPerfect(27)
 * // => false
 *
 */

if(!window.isPerfect){
	var isPerfect=(function(){
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

		// check if the array includes the number.
		var has=function(array,num){
			for(var i=0;i<length(array);i+=1){
				if(array[i]===num){
					return true;
				}
			}
			return false;
		};

		var push=function(factor,num){
			for(var i=1;i<=Math.sqrt(num);i+=1){
				if(num%i===0){
					factor.push(i);
					if(!has(factor,num/i)&&num/i!==num){
						factor.push(num/i);
					}
				}
			}
		};

		var check=function(factor,num){
			for(var i=0,sum=0;i<length(factor);i+=1){
				sum+=factor[i];
			}
			return sum===num;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				if(num>0){
					var factor=[];
					push(factor,num);
					return check(factor,num);
				}
				return false;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}