/**
 * 2018-07-06
 * @LinWei
 *
 * primeNumber:
 * Find all prime numbers from start up to, included end.
 *
 * Note:
 * end >= start
 * If the start is negative, it starts from 0. 
 *
 * Syntax:
 * primeNumber(start, end)
 *
 * Arguments:
 * start(number): The start.
 * end(number): The end(included).
 *
 * Return:
 * The array included all prime numbers.
 *
 * For example:
 *
 * primeNumber(0, 10)
 * // => [2, 3, 5, 7]
 *
 * primeNumber(-3, 10)
 * // => [2, 3, 5, 7]
 *
 */

if(!window.primeNumber){
	var primeNumber=(function(){
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

		// check if there is a divisible number.
		var isDivided=function(num){
			for(var i=2;i<=Math.sqrt(num);i+=1){
				if(num%i===0){
					return true;
				}
			}
			return false;
		};

		var push=function(result,start,end){
			for(var i=start;i<=end;i+=1){
				if(!(isDivided(i)||i===0||i===1)){
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

		return function(start,end){
			if(isNumber(start)&&isNumber(end)){
				start=start>=0?start:0;  
				var result=[];
				if(end>=start){
					push(result,start,end);
				}
				return result;
			}
			error('ArgsError','Not number.');
		};

	})();
}