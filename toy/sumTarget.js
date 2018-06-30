/**
 * 2018-06-30
 * @LinWei
 *
 * sumTarget:
 * Return indexs of the two numbers such they add up to 
 * a specific target.
 *
 * Syntax:
 * sumTarget(array, target)
 *
 * Arguments:
 * array(Array): The array to query.
 * target(number): The sum.
 *
 * Return:
 * Some groups of index.
 *
 * For example:
 * 
 * sumTarget([2, 7, 11, 15, 3, 5, 6], 9)
 * // => [[0, 1], [4, 6]] 
 *
 */

if(!window.sumTarget){
	var sumTarget=(function(){
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

		// the class of tool.
		function Tool(){}

		// the class of process.
		function Process(){}

		Type.prototype={

			constructor:Type,

			typeOf:function(x){
				return typeof x;
			},

			// check if it is array.
			isArray:function(obj){
				return tool.apply(obj,8,13)===this.array;
			},

			isTypeOfNumber:function(value){
				return this.typeOf(value)===this.number;
			},

			// check if it is number.
			isNumber:function(value){
				return this.isTypeOfNumber(value)&&isFinite(value);
			},

			// check if two values are both numbers.
			isBothNumber:function(value1,value2){
				return this.isNumber(value1)&&this.isNumber(value2);
			}

		};

		Tool.prototype={

			constructor:Tool,

			// the length of array.
			length:function(array){
				return array.length;
			},

			apply:function(obj,start,end){
				return toString.apply(obj).slice(start,end);
			}

		};

		Process.prototype={

			constructor:Process,

			push:function(array,index,i,j,target){
				if(array[i]+array[j]===target){
					var chunk=[];
					chunk.push(i,j);
					index.push(chunk);
				}
			},

			find:function(array,index,i,target){
				for(var j=i+1;j<tool.length(array);j+=1){
					if(!type.isBothNumber(array[i],array[j])){
						continue;
					}
					this.push(array,index,i,j,target);
				}
			},

			loop:function(array,index,target){
				for(var i=0;i<tool.length(array)-1;i+=1){
					this.find(array,index,i,target);
				}
			}

		};
		
		var type=new Type();
		var tool=new Tool();
		var process=new Process();

		return function(array,target){
			if(type.isArray(array)&&type.isNumber(target)){
				var index=[];
				process.loop(array,index,target);
				return index;
			}
			throw new CustomError('ArgsError','Illegal type.');
		};
	})();
}
