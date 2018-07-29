/**
 * 2018-07-29
 * @LinWei
 *
 * hexToDec:
 * Convert the string of hexadecimal notation to the decimal
 * number.
 *
 * Syntax:
 * hexToDec(hex)
 *
 * Arguments:
 * hex(string): The string of hexadecimal notation.
 *
 * Return:
 * The decimal number.
 *
 * For example:
 *
 * hexToDec('AF')
 * // => 175
 *
 * hexToDec('-AF')
 * // => NaN
 *
 * hexToDec('AF.EE')
 * // => 175.9296875
 *
 * hexToDec('    AF.EE')
 * // => NaN
 *
 */

if(!window.hexToDec){
	var hexToDec=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var length=function(x){
			return x.length;
		};

		var isHexLow=function(char){
			return char>='a'&&char<='f';
		};

		var isHexUp=function(char){
			return char>='A'&&char<='F';
		};

		var isNumChar=function(char){
			return char>='0'&&char<='9';
		};

		var isHexLetter=function(char){
			return isHexLow(char)||isHexUp(char);
		};

		var isHex=function(string){
			for(var i=0;i<length(string);i+=1){
				if(!(isNumChar(string[i])||isHexLetter(string[i])||string[i]==='.')){
					return false;
				}
			}
			return true;
		};

		// the length of integer part.
		var intLen=function(string){
			for(var i=0;i<length(string);i+=1){
				if(string[i]==='.'){
					return i;
				}
			}
			return i;
		};

		var abs=function(num){
			return num>=0?num:-num;
		};

		var pow=function(base,exponent){
			for(var i=0,result=1;i<abs(exponent);i+=1){
				result*=base;
			}
			return exponent>=0?result:1/result;
		};

		var toNum=function(char){
			switch(true){
				case isNumChar(char):
				     return +char;
				case char==='A'||char==='a':
				     return 10;
				case char==='B'||char==='b':
				     return 11;
				case char==='C'||char==='c':
				     return 12;
				case char==='D'||char==='d':
				     return 13;
				case char==='E'||char==='e':
				     return 14;
				case char==='F'||char==='f':
				     return 15;                              
			}
		};

		var accumulate=function(string){
			var k=intLen(string)-1;
			for(var i=0,sum=0;i<length(string);i+=1){
				if(string[i]==='.'){
					continue;
				}
				sum+=toNum(string[i])*pow(16,k--);
			}
			return sum;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string){
			if(isString(string)){
				return isHex(string)?accumulate(string):NaN;
			}
			error('ArgsError','Not string.');
		};

	})();
}

