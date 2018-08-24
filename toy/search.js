/**
 * 2018-08-24
 * @LinWei
 *
 * search:
 * Search a number in the ascending order array using
 * binary search(https://en.wikipedia.org/wiki/Binary_search_algorithm).
 *
 * Syntax:
 * search(array, num)
 *
 * Arguments:
 * array(Array): The sorted array to query.
 * num(number): The number to find.
 *
 * Return:
 * The index of the number, if can not find the number,
 * return -1.
 *
 * For example:
 *
 * search([2, 5, 7, 12], 7)
 * // => 2
 *
 * search([2, 5, 7, 12], 6)
 * // => -1
 *
 */

if(!window.search){
	var search=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		var find=function(array,start,end,e){
			if(start<=end){
				var pivot=Math.floor((start+end)/2),
				    result;
				switch(true){
					case array[pivot]>e:
					     result=find(array,start,pivot-1,e);
					     break;
					case array[pivot]<e:
					     result=find(array,pivot+1,end,e);
					     break;
					default:
					     result=pivot;            
				}
			}
			return result!==undefined?result:-1;
		};

		// check if it is ascending order.
		var isUp=function(array){
			for(var i=0;i<length(array)-1;i+=1){
				if(!isNumber(array[i])||!isNumber(array[i+1])){
					error('TypeError','Not number.');
				}
				if(array[i]>array[i+1]){
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

		return function(array,e){
			if(isArray(array)&&isNumber(e)){
				if(!isUp(array)){
					error('OrderError','Not ascend.');
				}
				return find(array,0,length(array)-1,e);
			}
			error('ArgsError','Illegal type.');
		};

	})();
}