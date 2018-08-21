/**
 * 2018-08-21
 * @LinWei
 *
 * sort:
 * Sort the array of numbers using Quick Sort. 
 *
 * Note:
 * The method mutate the array.
 *
 * Syntax:
 * sort(array)
 *
 * Arguments:
 * array(Array): The array to sort.
 *
 * Return:
 * undefined 
 *
 * For example:
 *
 * var array = [7, 3, 8, 4, 9, 6, 1, 4];
 * sort(array);
 * console.log(array);
 * // => [1, 3, 4, 4, 6, 7, 8, 9]
 *
 */

if(!window.sort){
	var sort=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(array){
			return array.length;
		};

		var process=function(array,index,pivot,left,right,count){
			while(left<right){
				if(!isNumber(array[left])||!isNumber(array[right])){
					error('TypeError','Not number.');
				}
				if(!(count%2)){
					if(array[right]<pivot){
						array[index]=array[right];
						index=right;
						left+=1;
					} else{
						right-=1;
						count-=1;
					}
					count+=1;
				} else{
					if(array[left]>pivot){
						array[index]=array[left];
						index=left;
						right-=1;
					} else{
						left+=1;
						count-=1;
					}
					count+=1;
				}
			}
			array[left]=pivot;
			return left;
		};

		var sort=function(array,start,end){ 		
			if(start<end){
				var pivot=array[start],index=start,left=start,right=end; 
				index=process(array,index,pivot,left,right,0);
				sort(array,start,index-1);
				sort(array,index+1,end);    
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array){		
			if(isArray(array)){
				sort(array,0,length(array)-1);
			} else{
				error('ArgsError','Not array.');
			}
		};
	})();
	
}
