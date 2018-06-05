/**
 * 2018-06-05
 * @linweinb
 *
 * For example:
 * 
 * function double(n){
		return n*2;
   }

   function square(n){
	    return n*n; 
   }  

   var func=overArgs(function(x,y){
		return [x,y];
   },[double,square]);
   
   func(9,3)
   // => [18,9]
 *   
 */

if(!window.overArgs){
	var overArgs=(function(){
		"use strict";

		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		var isFunction=function(fn){
			return typeof fn==='function';
		};
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};
		var isLegal=function(fn,array){
			return isFunction(fn)&&isArray(array);
		};
		var length=function(x){
			return x.length;
		};
		var equal=function(a,b){
			return a===b;
		};
		var pushArguments=function(a,b,store){
			if(equal(length(a),length(b))){
				for(var i=0;i<length(b);i+=1){
					store.push(a[i](b[i]));
				}
			} else{
				throw new CustomError('LengthError','The arguments.length of the returned function can not equal to the length of the array.');
			}
		};
		return function(fn,array){
			if(isLegal(fn,array)){
				return function(){
					var result=[];
					pushArguments(array,arguments,result);
					return fn.apply(null,result);
				};
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
		};
	})();
}                 