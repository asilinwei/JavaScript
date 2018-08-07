/**
 * 2018-08-07
 * @LinWei
 *
 * countBits:
 * Give a non negative integer num. For every numbers i
 * in the range [0, num] calculate the number of 1's in 
 * their binary representation and return them as an array.
 *
 * Syntax:
 * countBits(num)
 *
 * Arguments:
 * num(number): The non negative integer to query.
 *
 * Return:
 * The array of numbers of 1's in the binary representation.
 *
 * For example:
 *
 * countBits(5)
 * // => [0, 1, 1, 2, 1, 2]
 * // 0: The binary representation is 0, it has zero 1.
 * // 1: The binary representation is 1, it has one 1.
 * // 2: The binary representation is 10, it has one 1.
 * // 3: The binary representation is 11, it has two 1.
 * // 4: The binary representation is 100, it has one 1.
 * // 5: The binary representation is 101, it has two 1.
 *
 * countBits(5.2)
 * // => null
 *
 * countBits(-5)
 * // => null
 *
 */

if(!window.countBits){
	var countBits=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var count=function(num){
			var count=0;
			while(num>0){
				if(num%2){
					count+=1;
				}
				num-=num%2;
				num/=2;
			}
			return count;
		};

		var collect=function(num){
			var c=[];
			for(var i=0;i<=num;i+=1){
				c.push(count(i));
			}
			return c;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				return num>=0&&!(num%1)?collect(num):null;
			}
			error('ArgsError','Not number.');
		};

	})();
}
