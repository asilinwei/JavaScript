/**
 * 2018-08-17
 * @LinWei
 *
 * say:
 * The count-and-say sequence is the sequence of integers
 * with the first five terms as following:
 * 0 : 1
 * 1 : 11
 * 2 : 21
 * 3 : 1211
 * 4 : 111221
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Give a non-negative integer num, return the index num term of the count-and-say sequence.
 *
 * Syntax:
 * say(num)
 *
 * Arguments:
 * num(number): The index.
 *
 * Return:
 * The count-and-say sequence.
 *
 * For example:
 *
 * say(0)
 * // => '1'
 *
 * say(4)
 * // => '111221'
 *
 * say(-3)
 * // => ''
 *
 * say(3.3)
 * // => '1211'
 * // Ignore the decimal point.
 *
 */

if(!window.say){
	var say=(function(){
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

		// last element.
		var last=function(array){
			return array[length(array)-1];
		};

		var next=function(last){
			var str='',start=0,cur,k=0;
			for(var i=0;i<length(last);i+=1){
				cur=last[start];
				if(last[i]===cur){
					k+=1;
					if(i===length(last)-1){
						str+=k+cur;
					}
				} else{
					str+=k+cur;
					start=i;
					k=1;
					if(i===length(last)-1){
						cur=last[start];
						str+=k+cur;
					}
				}
			}
			return str;
		};

		var find=function(num){
			var result=['1'];
			for(var i=1,str;i<=num;i+=1){
				str=last(result);
				result.push(next(str));
			}
			return last(result);
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				num=Math.floor(num);
				return num>=0?find(num):'';
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
