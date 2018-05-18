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

		// push the element into array.
		var pushIntoArray=function(array1,array2){
			if(isArray(array1)&&isArray(array2)){
				for(var i=0;i<array1.length;i+=1){
					if(isArray(array1[i])){
						pushIntoArray(array1[i],array2);
					} else{
						array2.push(array1[i]);
					}
				}
			}
		};
		return function(array){
			var result=[];  // The final result.
			if(isArray(array)){
				pushIntoArray(array,result);
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

        // push the element into array.
		var pushIntoArray=function(array1,array2,n){
			if(isArray(array1)&&isArray(array2)&&isNumber(n)){
				var count=n;
				for(var i=0;i<array1.length;i+=1){
					if(isArray(array1[i])&&count!==0){
						count-=1;
						pushIntoArray(array1[i],array2,count);
					} else{
						array2.push(array1[i]);
					}
				}
			}
		};

		return function(array,n){
			var result=[];  // The final result.
			n=n||0;    // The default depth.
			if(isArray(array)&&isNumber(n)&&n>=0){
				pushIntoArray(array,result,n);
			} else{
				error('ArgumentError');
			}
			return result;
		};
	})();
}

