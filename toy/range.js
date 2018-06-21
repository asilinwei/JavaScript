/**
 * 2018-06-21
 * @LinWei
 *
 * range:
 * Create an array of numbers(positive and/or negative)
 * progressing from start up to, but not include end. A
 * step of -1 is used if a negative end without a start
 * and a step.
 *
 * Syntax:
 * range([start=0], end, [step=1 or step=-1])
 *
 * Arguments:
 * [start=0](number): The start range.
 * end(number): The end range.
 * [step=1 or step=-1](number): The value to increment or decrement by. 
 *
 * Return:
 * The array includes the range of number.
 *
 * For example:
 * 
 * range(4)
 * // => [0, 1, 2, 3]
 *
 * range(-4)
 * // => [0, -1, -2, -3]
 *
 * range(2, 5)
 * // => [2, 3, 4]
 *
 * range(2, -1)
 * // => [2, 1, 0]
 * 
 * range(2, 10, 2)
 * // => [2, 4, 6, 8]
 *
 * range(2, -8, -2)
 * // => [2, 0, -2, -4, -6]
 *
 */

if(!window.range){
	var range=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		var isUndefined=function(value){
			return value===undefined;
		};

		// check if it is a illegal(check range) step.
		var isIllegalStep=function(start,end,step){
			switch(true){
				case end>start&&step<0:
				case end<start&&step>0:
				     return true;
			}
		};

		// check if it is a legal step.
		var isLegalStep=function(start,end,step){
			return isNumber(step)&&!isIllegalStep(start,end,step);
		};

		// push into array
		var push=function(store,start,end,step){
			step=step||(end>=0?1:-1);
			if(isLegalStep(start,end,step)){
				var i=start;
				while(end>=0?i<end:i>end){
					store.push(i);
					i+=step;
				}
			}
		};

		// if end is undefined.
		var endUndefined=function(store,start,end,step){
			end=start;
			start=0;
			push(store,start,end,step);
		};

		var process=function(store,start,end,step){
			if(isNumber(start)){
				switch(true){
					case isUndefined(end):
					     endUndefined(store,start,end,step);
					     break;
					case isNumber(end):
					     push(store,start,end,step);          
				}
			}
		};

		return function(start,end,step){
			start=start||0;
			var result=[];
			process(result,start,end,step);
			return result;
		};
	})();
}
