/**
 * 2018-08-12
 * @LinWei
 *
 * bitwiseAnd:
 * Give a range [low, up], return the bitwise AND 
 * of all numbers in this range, inclusive.
 *
 * Note:
 * 0<=low<=up
 *
 * Syntax:
 * bitwiseAnd(low, up)
 *
 * Arguments:
 * low(number): The integer of low boundary.
 * up(number): The integer of up boundary.
 *
 * Return:
 * The decimal representation of bitwise AND.
 *
 * For example:
 *
 * bitwiseAnd(5, 7)
 * // => 4
 * // 5 => 101
 * // 6 => 110
 * //       |
 * //      100
 * // 7 => 111
 * //       |
 * //      100 => 4
 *
 * bitwiseAnd(-2,7)
 * // => NaN
 *
 * bitwiseAnd(3,1)
 * // => NaN
 * 
 * bitwiseAnd(5.4, 7.3)
 * // => 4
 * // Ignore the decimal point.
 *
 */

if(!window.bitwiseAnd){
	var bitwiseAnd=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var toBinary=function(num){
			var array=[];
			while(num){
				array.unshift(num%2);
				num-=num%2;
				num/=2;
			}
			return array.join('');
		};

		var toDecimal=function(str){
			var i=0,k=length(str)-1,sum=0;
			while(i<length(str)){
				sum+=str[i]*pow(k);
				i+=1;
				k-=1;
			}
			return sum;
		};

		// the power.
		var pow=function(exponent){
			for(var i=0,result=1;i<exponent;i+=1){
				result*=2;
			}
			return result;
		};

		var length=function(x){
			return x.length;
		};

		// increase length.
		var increase=function(str1,str2){
			var array=Array.from(str1);
			while(length(array)<length(str2)){
				array.unshift('0');
			}
			return array.join('');
		};

		var toAnd=function(and,next){
			var str='';
			and=toBinary(and);
			next=toBinary(next);
			length(and)>length(next)?next=increase(next,and):and=increase(and,next);
			for(var i=0;i<length(and);i+=1){
				str+=+and[i]&&+next[i];
			}
			return str;
		};

		var bitWise=function(low,up){
			for(var i=low+1,and=low;i<=up;i+=1){
				and=toDecimal(toAnd(and,i)); 
			}
			return and;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(low,up){
			if(isNumber(low)&&isNumber(up)){
				low=Math.floor(low);
				up=Math.floor(up);
				return low>=0&&low<=up?bitWise(low,up):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
