/**
 * 2018-07-09
 * @LinWei
 *
 * phone:
 * Find all letter combinations that the number could represent,
 * just like on the telephone button below. 
 *  ___________   ___________   ___________
 * |___  1  ___| |__ 2 abc __| |__ 3 def __|
 *  ___________   ___________   ___________
 * |__ 4 ghi __| |__ 5 jkl __| |__ 6 mno __|
 *  ___________   ___________   ___________
 * |_ 7 pqrs __| |__ 8 tuv __| |_ 9 wxyz __|
 * 
 * LeetCode: 
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/ 
 *
 * Note:
 * 1 does not map to any letters.
 *
 * Syntax:
 * phone(string)
 *
 * Arguments:
 * string(string): The string containing digits from 2-9 inclusive.
 *
 * Return:
 * The array includes letter combinations.
 *
 * For example:
 * 
 * phone('23')
 * // => ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
 *  
 */

if(!window.phone){
	var phone=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// check if it is the string only included number character.
		// like '0', '1', '2'.
		var isNumString=function(value){
			return isNumber(value-1);
		};

		var length=function(x){
			return x.length;
		};

		var index=function(string){
			return isNumString(string)&&
				   string!=='0'&&
				   string!=='1'?
				   string:
				   2;
		};

		// recursion.
		var splice=function(chunk,index,result,collect){
			var string=chunk[index];
			var history=result;
			if(string){
				for(var i=0;i<length(string);i+=1){
					history+=string[i];
					index+=1;
					if(splice(chunk,index,history,collect)!==undefined){
						collect.push(splice(chunk,index,history,collect));
					}
					index-=1;
					history=result;
				}
				return;
			}
			return history;		
		};

		var push=function(string,array,chunk){
			for(var i=0;i<length(string);i+=1){
				chunk.push(array[index(string[i])]);
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		
		return function(string){
			if(isString(string)){
				var array=['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
				var chunk=[];
				var collect=[];
				push(string,array,chunk);
				splice(chunk,0,'',collect);
				return collect;
			}
			error('ArgsError','Not string.');
		};
	})();
}
