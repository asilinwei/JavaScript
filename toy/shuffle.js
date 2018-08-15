/**
 * 2018-08-14
 * @LinWei
 *
 * shuffle:
 * Shuffle the element of the specified array.
 * Using the algorithm Fisher-Yates shuffle
 * (https://en.m.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).
 * You can also use lodash (https://lodash.com/docs/4.17.10#shuffle).
 *
 * Note:
 * This method mutates the array.
 * If the element is object type, it will not mutate the array.
 *
 * Syntax:
 * shuffle(array)
 *
 * Arguments:
 * array(Array): The array to shuffle.
 *
 * Return:
 * undefined
 *
 * For example:
 *
 * shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])
 * // => [5, 8, 3, 4, 2, 6, 9, 7, 1]
 *
 */

if(!window.shuffle){
	var shuffle=(function(){
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

		var check=function(e){
			switch(true){
				case typeOf(e)==='number':
				case typeOf(e)==='string':
				case typeOf(e)==='boolean':
				case e===null:
				case e===undefined:
				     return true;
				default:
				     return false;     
			}
		};

		var checkElement=function(array){
			for(var i=0;i<length(array);i+=1){
				if(!check(array[i])){
					return false;
				}
			}
			return true;
		};

		// swap two elements.
		var swap=function(array,i,j){
			var temp=array[i];
			array[i]=array[j];
			array[j]=temp;
		};

		var random=function(low,up){
			var choices=up-low+1;
			return Math.floor(Math.random()*choices+low);
		};

		var length=function(array){
			return array.length;
		};

		var shuffle=function(array){
			var i=length(array)-1,index;
			while(i){
				index=random(0,i);
				swap(array,i,index);
				i-=1;
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
				if(checkElement(array)){
					shuffle(array);
				}
				return;
			}
			error('ArgsError','Not array.');
		};

	})();
}