/**
 * 2018-05-27
 * @linweinb
 *
 * pullAt:
 * Remove the element of array with the specified index. Return an new 
 * array includes the element which is removed. This function will change
 * the array.
 * 
 * Syntax:
 * pullAt(array,index);
 *
 * Arguments:
 * array(Array): The array to change.
 * index(Array): The array of index.
 *
 * Return:
 * A new array includes the element which is removed.
 *
 *
 * For example:
 * var array=[1,2,3,4];
 * 
 * console.log(pullAt(array,[0,1]));  // => [1,2]
 *
 * console.log(array);  // => [3,4]
 */


if(!window.pullAt){
	var pullAt=(function(){
		"use strict";

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if they both array.
		var isBothArray=function(array1,array2){
			return isArray(array1)&&isArray(array2);
		};

		// check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// check if it is undefined.
		var isUndefined=function(value){
			return typeof value==='undefined';
		};

		// check if the index not overflow.
		var isNotOverflow=function(array,index){
			var length=array.length;
			return index>=0&&index<length;
		};

		// find ths index.
		var find=function(array,store,index){
			for(var i=0;i<array.length;i+=1){
				if(i===index){
					store.push(getRidOf(array,i));
					break;
				}
			}
		};

		// remove the element.
		var getRidOf=function(array,index){
			var result=array[index];
			delete array[index];
			return result;
		};

		// if the array has the element of undefined,compress the array.
		var compress=function(array){
			for(var i=0,j;i<array.length;i+=1){
				if(isUndefined(array[i])){
					for(j=i;j<array.length-1;j+=1){
						array[j]=array[j+1];
					}
					array.length-=1;
					i-=1;
				}
			}
		};

		// throw the error.
		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array,index){
			if(isBothArray(array,index)){

				var result=[];    // the new array includes the element which is removed.

				for(var i=0;i<index.length;i+=1){
					if(isNumber(index[i])){
						if(isNotOverflow(array,index[i])){
							find(array,result,index[i]);
						} else{
							error('RangeError','The index is overflow.');
						}
					} else{
						error('TypeError','The index is not number.');
					}
				}
				compress(array);
				return result;
			} else{
				error('ArgumentsError','Not array.');
			}
		};
	})();
}

