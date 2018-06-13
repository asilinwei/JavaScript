/**
 * 2018-06-13
 * @LinWei
 *
 * For example:
 *
 * multiplication([1,2,3,4])
 * // => [24,12,8,16]
 * // 2*3*4===24
 * // 1*3*4===12
 * // 1*2*4===8
 * // 1*2*3===6 
 *
 */

if(!window.multiplication){
	var multiplication=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// the class of type.
		function Type(){
			this.array='Array';
			this.number='number';
		}

		Type.prototype={

			constructor:Type,

			typeOf:function(x){
				return typeof x;
			},

			isArray:function(array){
				return isEqual(apply(array,8,13),this.array);
			},

			isNumber:function(value){
				var type=this.typeOf(value);
				return isEqual(type,this.number)&&isFinite(value);
			},

			// check if elements of array are all numbers.
			isAllNumber:function(array){
				for(var i=0;i<length(array);i+=1){
					if(!this.isNumber(array[i])){
						return false;
					}
				}
				return true;
			}

		};

		var type=new Type();
		var ELEMENT_ERROR=new CustomError('ArrayElementError','Not number.');
		var ARGS_ERROR=new CustomError('ArgumentsError','Not array.');

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var length=function(array){
			return array.length;
		};

		var isEqual=function(a,b){
			return a===b;
		};

		var multiplication=function(array,index,num){
			for(var i=0;i<length(array);i+=1){
				if(isEqual(i,index)){
					continue;
				}
				num*=array[i];
			}
			return num;
		};

		var loop=function(array,store){
			for(var i=0;i<length(array);i+=1){
				store.push(multiplication(array,i,1));
			}
		};
		
		return function(array){
			if(type.isArray(array)){
				if(type.isAllNumber(array)){
					var result=[];
					loop(array,result);
					return result;
				} else{
					throw ELEMENT_ERROR;
				}
			} else{
				throw ARGS_ERROR;
			}
		};
	})();
}