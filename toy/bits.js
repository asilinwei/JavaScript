/**
 * 2018-07-26
 * @LinWei
 *
 * bits:
 * Give an unsigned decimal integer, return how many
 * '1' bits its binary has (also known as 
 * the Hamming weight (https://en.wikipedia.org/wiki/Hamming_weight)).
 *
 * Syntax:
 * bits(num)
 *
 * Arguments:
 * num(number): The unsigned decimal integer to query.
 *
 * Return:
 * The number of '1' bits.
 *
 * For example:
 *
 * bits(27)
 * // => 4
 * // Integer 27 has binary representation 11011.
 *
 * bits(27.4)
 * // => 4
 * // It ignores the number after the decimal point.
 *
 * bits(-27)
 * // => 4
 * // It ignores the sign.
 *
 */

if(!window.bits){
	var bits=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var length=function(array){
			return array.length;
		};

		var toBinary=function(result,num){
			while(num>=1){
				result.unshift(num%2);
				num-=num%2;
				num/=2;
			}
		};

		var count=function(result){
			for(var i=0,count=0;i<length(result);i+=1){
				if(result[i]){
					count+=1;
				}
			}
			return count;
		};

		var abs=function(num){
			return num>=0?num:-num;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				var result=[];
				toBinary(result,Math.floor(abs(num)));
				return count(result);
			}
			error('ArgsError','Not number.');
		};
	})();
}

