/**
 * 2018-06-07
 * @linweinb
 * 
 * fill:
 * Fills elements of array with the speified value from start up to, 
 * but not include the end.
 *
 * Syntax:
 * fill(array,value,[start=0],[end=array.length])
 *
 * Arguments:
 * array(Array): The array to modify.
 * value(*): The value to fill.
 * [start=0]: The start position.
 * [end=array.length]: The end position.
 *
 * Return:
 * The modified array.
 *
 * For example:
 *
 * fill([1,2,3,4],'w')
 * // => ['w','w','w','w']
 *
 * fill([1,2,3,4],'w',1,3)
 * // => [1,'w','w',4]
 * 
 */

if(!window.fill){
	var fill=(function(){
		"use strict";

		// the class of type.
		function Type(){
			this.number='number';
			this.array='[object Array]';
		}

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		Type.prototype={
			constructor:Type,

			// check if it is a number.
			isNumber:function(value){
				return equal(typeof value,this.number);
			},

			// check if both them are numbers.
			isBothNumber:function(a,b){
				return this.isNumber(a)&&this.isNumber(b);
			},

			// check if it is array.
			isArray:function(array){
				return equal(apply(array),this.array);
			},

			// check if the arguments are legal type.
			isLegal:function(array,start,end){
				return this.isArray(array)&&this.isBothNumber(start,end);
			}

		};

		var type=new Type();
		var toString=Object.prototype.toString;

		var apply=function(obj){
			return toString.apply(obj);
		};

		var equal=function(a,b){
			return a===b;
		};

		// the length of array.
		var length=function(array){
			return type.isArray(array)?array.length:undefined;
		};

		// modify elements of the array.
		var modify=function(array,element,start,end){
			for(var i=start;i<end;i+=1){
				array[i]=element;
			}
		};
		
		return function(array,element,start,end){
			start=start||0;
			end=end||length(array);
			if(type.isLegal(array,start,end)){
				modify(array,element,start,end);
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
			return array;
		};
	})();
}