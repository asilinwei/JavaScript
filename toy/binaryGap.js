/**
 * 2018-08-14
 * @LinWei
 *
 * binaryGap:
 * Give a non-negative integer n, return the longest distance
 * between two consecutive 1's in the binary representation
 * of n.
 *
 * Syntax:
 * binaryGap(n)
 *
 * Arguments:
 * n(number): The positive integer to query.
 *
 * Return:
 * The longest distance.
 *
 * For example:
 *
 * binaryGap(42020)
 * // => 5
 * // 42020 in binary is 1010010000100100.
 * // In the binary representation of 42020, there are five ones, and four consecutive pairs of 1's.
 * // The first consecutive pair of 1's have distance 2.
 * // The second consecutive pair of 1's have distance 3.
 * // The third consecutive pair of 1's have distance 5.
 * // The forth consecutive pair of 1's have distance 3.
 * // The largest distance is 5.
 *
 * binaryGap(42020.5)
 * // => 5
 * // Ignore the decimal point.
 *
 * binaryGap(-5)
 * // => NaN
 *
 */

if(!window.binaryGap){
	var binaryGap=(function(){
		"use strict";
		var typeOf=function(value){
			return typeof value;
		};
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};
		var toBinary=function(array,num){
			while(num){
				array.unshift(num%2);
				num-=num%2;
				num/=2;
			}
		};
		var length=function(array){
			return array.length;
		};
		var max=function(array){
			var max=0,chunk=[],diff;
			for(var i=0;i<length(array);i+=1){
				if(array[i]){
					chunk.push(i);
					if(length(chunk)===2){
						diff=chunk[1]-chunk[0];
						if(max<diff){
							max=diff;
						}
						chunk.shift();
					}
				}
			}
			return max;
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
				if(num>=0){
					var binary=[];
					toBinary(binary,num);
					return max(binary);
				}
				return NaN;
			}
			error('ArgsError','Not number.');
		};
	})();
}