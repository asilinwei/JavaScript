/*
 * 2018-05-19
   @linweinb
   
   Syntax:
   	chunk(array,[size=array.length]);	

   Arguments
   	array(Array): The array to split into.
	[size=array.length](number): The length of each chunk.
   
   For example:
   var array=[1,2,3,4,5,6];

   console.log(chunk(array));  // => [1,2,3,4,5,6]

   console.log(chunk(array,2));  // => [[1,2],[3,4],[5,6]]

   console.log(chunk(array,3));  // => [[1,2,3],[4,5,6]]	

   console.log(chunk(array,4));  // => [[1,2,3,4],[5,6]]	

*/

if(!window.chunk){
	var chunk=(function(){
		"use strict";

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// push element into array.
		var push=function(array1,array2,array3,n){
			array3.push(array1[n]);
			if(n===array1.length-1){
				array2.push(array3);
			}
		};
		return function(array,size){
			if(isArray(array)&&array.length){
				size=size||array.length;   // the defalut length of each chunk.
				if(isNumber(size)){
					var result=[];   
					var section=[];  
					for(var i=0;i<array.length;i+=1){
						if(section.length<size){
							push(array,result,section,i);
							continue;
						}
						result.push(section);
						section=[];
						push(array,result,section,i);
					}
				}
			}
			return result;
		};
	})();
}