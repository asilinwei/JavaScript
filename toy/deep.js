/*
  2018-05-18
  @linweinb

  This file has two functions, flatternDeep and flatternDepth.

  flatternDeep:
  Recursively flattens array.
  	Syntax:
  	flatternDeep(array);

  	Arguments:
  	array(Array): The array to flatten.

  	For example:
  	var array=[1,[2,3,[4,5]]];

  	console.log(flatternDeep(array)); // => [1,2,3,4,5]


  flatternDepth:
  Recursively flatten array up to depth times.
  	Syntax:
  	flatternDepth(array,[depth=0]);

  	Arguments:
  	array(Array): The array to flatten.
  	[depth=0](number): The maximum recursion depth.

  	For example:
  	var array=[1,[2,3,[4,5]]];

  	console.log(flatternDepth(array)); // => [1,[2,3,[4,5]]]

  	console.log(flatternDepth(array,1)); // =>[1,2,3,[4,5]]

  	console.log(flatternDepth(array,2)); // => [1,2,3,4,5] 
*/  	

if(!window.flatternDeep){
	var flatternDeep=(function(){
		"use strict";

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// The final result array.
		var result=[];

		return function(array){
			if(isArray(array)){
				for(var i=0;i<array.length;i+=1){
					if(isArray(array[i])){
						flatternDeep(array[i]);  // recursion.
					} else{
						result.push(array[i]);   // push the element into the final array. 
					}
				}
			}
			return result;
		};
	})();
}

if(!window.flatternDepth){
	var flatternDepth=(function(){
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

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// throw the error.
		var error=function(type){
			if(isString(type)){
				throw {
					type:type
				};
			}
		};

		// The final result array.
		var result=[];

		return function(array,n){
			n=n||0;    // The default depth.
			if(isArray(array)&&isNumber(n)&&n>=0){
				var count=n;
				for(var i=0;i<array.length;i+=1){
					if(isArray(array[i])&&count!==0){
						count-=1;
						flatternDepth(array[i],count);  // recursion.
					} else{
						result.push(array[i]);  // push the element into the final array.
					}
				}
			} else{
				error('ArgumentError');
			}
			return result;
		};
	})();
}

