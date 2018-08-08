/**
 * 2018-08-08
 * @LinWei
 *
 * swap:
 * Give a non-negative integer, swap two digits at most once
 * to get the maximum number, return the maximum number.
 *
 * Syntax:
 * swap(num)
 *
 * Arguments:
 * num(number): The non-negative integer to query.
 *
 * Return:
 * The maximum number.
 *
 * For example:
 *
 * swap(2736)
 * // => 7236
 *
 * swap(29.4)
 * // => NaN
 *
 * swap(-12)
 * // => NaN
 *
 */

if(!window.swap){
	var swap=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		var start=function(array,start){
			var max=array[start],index=start;
			for(var i=start+1;i<length(array);i+=1){
				if(max<array[i]){
					max=array[i];
					index=i;
				}
			}
			return index;
		};

		var swap=function(array,i,j){
			var temp=array[i];
			array[i]=array[j];
			array[j]=temp;
		};

		var maxi=function(num){
			var chars=Array.from(''+num);
			for(var i=0,max;i<length(chars)-1;i+=1){
				max=start(chars,i);
				if(i!==max){
					swap(chars,i,max);
					return +chars.join('');
				}
			}
			return +chars.join('');
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				return num>=0&&!(num%1)?maxi(num):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
