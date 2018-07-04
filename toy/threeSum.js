/**
 * 2018-07-04
 * @LinWei
 *
 * threeSum:
 * Find unique groups of three numbers that the sum of each group is equal to 
 * the specific target.
 *
 * Syntax:
 * threeSum(array, target)
 *
 * Arguments:
 * array(Array): The array to query.
 * target(number): The target.
 *
 * Return:
 * The array includes some groups.
 *
 * For example:
 *
 * threeSum([-1, 0, 1, 2, -1, -4], 0)
 * // => [[-1, 0, 1], [-1, 2, -1]]
 *
 * threeSum([2, 3, 1, 1, 2, 3], 6)
 * // => [[2, 3, 1]]
 *
 */

if(!window.threeSum){
	var threeSum=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var typeOf=function(value){
			return typeof value;
		};

		// the length of array.
		var length=function(array){
			return array.length;
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

		var sortString=function(array){
			return array.sort().join('');
		};

		// check if two arrays has same elements.
		// like [1, 2, 3] and [2, 3, 1]
		var hasSameElement=function(array,another){
			var first=array.concat([]);
			var second=another.concat([]);
			return sortString(first)===sortString(second);
		};

		var include=function(unique,array){
			for(var i=0;i<length(unique);i+=1){
				if(hasSameElement(unique[i],array)){
					return true;
				}
			}
			return false;
		};

		// find three numbers that the sum is equal to the target.
		var find=function(array,result,target){
			var i,j,k,chunk;
			for(i=0;i<length(array)-2;i+=1){
				for(j=i+1;j<length(array)-1;j+=1){
					for(k=j+1;k<length(array);k+=1){
						if(array[i]+array[j]+array[k]===target){
							chunk=[];
							chunk.push(array[i],array[j],array[k]);
							result.push(chunk);
						}
					}
				}
			}
		};

		// unique groups.
		var filter=function(result,unique){
			for(var i=0;i<length(result);i+=1){
				if(!include(unique,result[i])){
					unique.push(result[i]);
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array,target){
			if(isArray(array)&&isNumber(target)){
				var result=[],unique=[];
				find(array,result,target);
				filter(result,unique);
				return unique;
			}
			error('ArgsError','Illegal type.');
		};
		
	})();
}
