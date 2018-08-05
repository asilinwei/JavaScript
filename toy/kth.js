/** 
 * 2018-08-05
 * @LinWei 
 *
 * kth:
 * On the first row, we write a '0'. In every subsequent
 * row, we look at the previous row and replace each 
 * occurrence of '0' with '01', and each occurrence of
 * '1' with '10'. Give row and index (start from 1), return
 * the indexed symbol in the specified row.
 *
 * Syntax:
 * kth(row, index)
 *
 * Arguments:
 * row(number): The row.
 * index(number): The index of symbol (start from 1).
 *
 * Return:
 * The symbol.
 *
 * For example:
 *
 * kth(4, 5)
 * // => '1'
 * // row1: '0'
 * // row2: '01'
 * // row3: '0110'
 * // row4: '01101001'
 * // The index 5 of the sequence in row4 is '1'.
 *
 */

if(!window.kth){
	var kth=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};
		var length=function(x){
			return x.length;
		};

		var process=function(row,index){
			for(var i=2,j,str='0',arr;i<=row;i+=1){
				arr=Array.from(str);
				for(j=0;j<length(arr);j+=1){
					arr[j]=+arr[j]?'10':'01';
				}
				str=arr.join('');
			}
			return str[index-1];
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(row,index){
			if(isNumber(row)&&isNumber(index)){
				return process(row,index);
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
