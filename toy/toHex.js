/**
 * 2018-07-28
 * @LinWei
 *
 * toHex:
 * Convert a decimal number to hexadecimal.
 *
 * Syntax:
 * toHex(num)
 *
 * Arguments:
 * num(number): The decimal number to convert.
 *
 * Return:
 * The string of hexadecimal format.
 *
 * For example:
 *
 * toHex(175)
 * // => 'AF'
 *
 * toHex(55.75)
 * // => '37.C'
 *
 * toHex(-55.75)
 * // => '-37.C'
 *
 */

if(!window.toHex){
	var toHex=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// calculate the integer part.
		var int=function(result,num){
			while(num>0){
				result.unshift(num%16);
				num-=num%16;
				num/=16;
			}
		};

		var deci=function(result,diff){
			if(deciLength(result)<=16){
				result.push(Math.floor(diff*16));
				diff=diff*16-Math.floor(diff*16);
				deci(result,diff);
			}
		};

		// calculate the decimal part.
		var decimal=function(result,num){
			var diff;
			result.push('.');
			diff=num-Math.floor(num);
			deci(result,diff);
			pop(result);
		};

		var length=function(array){
			return array.length;
		};

		var deciLength=function(array){
			for(var i=0;i<length(array);i+=1){
				if(array[i]==='.'){
					return length(array)-1-i;
				}
			}
		};

		var pop=function(array){
			var i=length(array)-1;
			while(!array[i]||array[i]==='.'){
				array.pop();
				i-=1;
			}
		};

		var toString=function(result){
			for(var i=0;i<length(result);i+=1){
				switch(result[i]){
					case 10:result[i]='A';break;
					case 11:result[i]='B';break;
					case 12:result[i]='C';break;
					case 13:result[i]='D';break;
					case 14:result[i]='E';break;
					case 15:result[i]='F';
				}
			}
			return result.join('');
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
				int(result,Math.floor(abs(num)));
				if(abs(num)%1){
					decimal(result,abs(num));
				}
				return num>=0?toString(result):'-'+toString(result);
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
