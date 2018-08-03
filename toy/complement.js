/**
 * 2018-08-03
 * @LinWei
 *
 * complement:
 * Give a positive integer, return its ones' complement.
 *
 * Syntax:
 * complement(integer)
 *
 * Arguments:
 * integer(number): The positive integer to query.
 *
 * Return:
 * The ones' complement of decimal.
 *
 * For example:
 *
 * complement(5)
 * // => 2
 * // The binary representation of 5 is 101, and its ones'complement is 010, its decimal representation is 2.
 *
 */

if(!window.complement){
	var complement=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var toBinary=function(num,binary){
			while(num){
				binary.unshift(num%2);
				num-=num%2;
				num/=2;
			}
		};

		var pow=function(base,exponent){
			var i=0,result=1;
			while(i<exponent){
				result*=base;
				i+=1;
			}
			return result;
		};

		var length=function(array){
			return array.length;
		};

		var process=function(binary,index,sum,k){
			binary[index]=binary[index]?0:1;
			return sum+=binary[index]*pow(2,k);
		};

		var calculate=function(binary){
			var i=0,sum=0,k=length(binary);
			while(i<length(binary)){
				sum=process(binary,i,sum,--k);
				i+=1;
			}
			return sum;
		};

		var to=function(num){
			var binary=[];
			toBinary(num,binary);
			return calculate(binary);
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				return num>0?to(num):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
