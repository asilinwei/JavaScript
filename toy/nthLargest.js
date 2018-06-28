/**
 * 2018-06-25
 * @LinWei
 *
 * nthLargest:
 * Find n-th largest element in array.
 *
 * Syntax:
 * nthLargest(array, [nth=1])
 *
 * Note: 
 * If the number of n-th is overflow, return undefined.
 * If the elements of array is not all numbers, return null.
 * 
 * Arguments:
 * array(Array): The array to query.
 * [nth=1](number): The number of n-th largest.
 *
 * Return:
 * The n-th largest element.
 *
 * For example:
 * 
 * nthLargest([1, 2, 3, 4], 1)
 * // => 4
 *
 * nthLargest([1, 2, 3, 4], 2)
 * // => 3
 *
 */

if(!window.nthLargest){
	var nthLargest=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var length=function(array){
			return array.length;
		};

		var typeOf=function(x){
			return typeof x;
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		// check typeof value is number.
		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// swap two elements.
		var swap=function(array,index){
			var temp=array[index+1];
			array[index+1]=array[index];
			array[index]=temp;
		};

		// check if the elements in array are all number.
		var isAllNumber=function(array){
			for(var i=0;i<length(array);i+=1){
				if(!isNumber(array[i])){
					return false;
				}
			}
			return true;
		};

		// bubble sort.
		var bubble=function(array){
			for(var i=0,j;i<length(array);i+=1){
				for(j=0;j<length(array)-1;j+=1){
					if(array[j]>array[j+1]){
						swap(array,j);
					}
				}
			}
		};

		// find the n-th largest element.
		var find=function(array,count,n){
			for(var i=length(array)-1;i>=0;i-=1){
				if(array[i]===array[i-1]){
					continue;
				}
				if(count===n){
					return array[i];
				}
				count+=1;
			}
		};
		
		return function(array,n){
			n=n||1;
			if(isArray(array)&&isNumber(n)){
				var sort=array.concat();
				if(!isAllNumber(sort)){
					return null;
				}
				bubble(sort);
				return find(sort,1,n);
			}
			return null;
		};
	})();
}
