/**
 * 2018-06-01 
 * @linweinb
 * Happy Children's Day.
 *
 * join:
 * Connect elements of the array with the specified string, and return the 
 * final string.
 *
 * Syntax:
 * join(array,[string=''])
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The final string.
 *
 *
 * For example:
 *
 * join(['a','b','c'],'~')
 * // => 'a~b~c'
 *
 * join(['a','b','c'])
 * // => 'abc'
 *
 * join(['a',true,'c'])
 * // => 'ac'
 *
 */

if(!window.join){
	var join=(function(){
		"use strict";

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// check if the arguments is legal.
		var isLegal=function(array,string){
			return isArray(array)&&isString(string);
		};

		// the length of array.
		var length=function(x){
			return x.length>=0?x.length:undefined;
		};

		// the length of the final string.
		var finalLength=function(array){
			return length(array)+(length(array)-1);
		};

		// check if it is an even number.
		var isEvenNumber=function(num){
			return num%2===0;
		};

		// push element.
		var push=function(array,store,string){
			for(var i=0;i<finalLength(array);i+=1){
				if(isEvenNumber(i)){
					store.push(isString(array[i/2])?array[i/2]:'');
					continue;
				}
				store.push(string);
			}
		};

		return function(array,string){
			string=string||'';
			if(isLegal(array,string)){
				var result=[];
				push(array,result,string);
				return result.join('');
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
		};
	})();
}

