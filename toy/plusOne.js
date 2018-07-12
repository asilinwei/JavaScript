/**
 * 2018-07-12
 * @LinWei
 *
 * plusOne:
 * Give a non-empty array of number representing a non-negative
 * integer, plus one to the integer.
 *
 * Note:
 * Each element of array must be a single digit.
 * 
 * Syntax:
 * plusOne(array)
 *
 * Arguments:
 * array(Array): The array contains single digits.
 *
 * Return:
 * The array of result.
 *
 * For example:
 *
 * plusOne([1, 2, 3])
 * // => [1, 2, 4]
 *
 * Another solution:
 * function plusOne(array){
	  	var string=array.join('');
		// plus one
		var num=Number(string)+1;
		var strNum=Array.from(String(num));
		var result=[];
		for(var i=0;i<strNum.length;i+=1){
			result.push(Number(strNum[i]));
		}
		return result;
   }
 *
 */

if(!window.plusOne){
	var plusOne=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		// check if elements are all numbers.
		var isAllNumber=function(array){
			for(var i=0;i<length(array);i+=1){
				if(!isNumber(array[i])){
					return false;
				}
			}
			return true;
		};

		var unshift=function(array,result,index){
			if(array[index]!==undefined){
				if(index===length(array)-1){
					result.unshift(array[index]+1);
				} else{
					result.unshift(array[index]);
				}
				unshift(array,result,index-1);
			} 
		};

		var process=function(result,index){
			if(result[index]!==undefined){
				if(result[index]===10&&length(result)!==1){
					if(index===0){
						result[index]=0;
						result.unshift(1);
					} else{
						result[index]=0;
						result[index-1]+=1;
					}
				}
				process(result,index-1);
			}
		};

		var isMultiple=function(array){
			return length(array)>1&&array[0]!==0;
		};

		var isSingle=function(array){
			return length(array)===1;
		};

		var isLegalNumber=function(array){
			for(var i=0;i<length(array);i+=1){
				if(array[i]>9||array[i]<0){
					return false;
				}
			}
			return true;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array){
			if(isArray(array)){
				if(isAllNumber(array)&&isLegalNumber(array)){
					var result=[];
					if(isMultiple(array)||isSingle(array)){
						unshift(array,result,length(array)-1);
						process(result,length(result)-1);
					}
					return result;
				}
				error('ElementError','Not allowable element.');
			}
			error('ArgsError','Not array.');
		};
	})();
	
}