/**
 * 2018-07-23
 * @LinWei
 *
 * maxAverage:
 * Give an array consisting of numbers, return the maximum
 * average of contiguous subarray of given length.
 *
 * Syntax:
 * maxAverage(array, len)
 *
 * Arguments:
 * array(Array): The array consisting of numbers.
 * len(number): The length of subarray.
 *
 * Return:
 * The maximum average.
 *
 * For example:
 *
 * maxAverage([1, 12, -5, -6, 50, 3], 4)
 * // => 12.75
 * // Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 *
 * maxAverage([], 0)
 * // => 0
 *
 * maxAverage([1, 2, 3], -1)
 * // => 0
 *
 */

if(!window.maxAverage){
	var maxAverage=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(array){
			return array.length;
		};

		// find the maximum average.
		var max=function(array){
			for(var i=1,max=array[0];i<length(array);i+=1){
				if(max<array[i]){
					max=array[i];
				}
			}
			return max;
		};

		var collectAverage=function(array,average,len){
			for(var i=0,j,sum,k,count;i<length(array)-len+1;i+=1){
				for(j=i,sum=0,k=len,count=0;count<len;j+=1,count+=1){
					if(!isNumber(array[j])){
						k-=1;
						continue;
					}
					sum+=array[j];
				}
				average.push(sum/k);
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array,len){
			if(isArray(array)&&isNumber(len)){
				if(!length(array)||len<=0){
					return 0;
				}
				var average=[];
				collectAverage(array,average,len);
				return max(average);
			}
			error('ArgsError','Illegal type.');
		};
	})();
	
}
