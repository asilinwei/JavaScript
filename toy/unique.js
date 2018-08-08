/**
 * 2018-08-08
 * @LinWei
 *
 * unique:
 * Give a non-negative integer n, count all numbers with
 * unique digits x, where 0 ≤ x < Math.pow(10, n). For 
 * example, give 2, return 91. (The answer should be the
 * total numbers in the range of 0 ≤ x < 100, excluding 11,
 * 22, 33, 44, 55, 66, 77, 88 and 99).
 *
 * Syntax:
 * unique(n)
 *
 * Arguments:
 * n(number): The non-negative integer to query.
 *
 * Return:
 * The number of numbers with unique digits.
 *
 * For example:
 *
 * unique(2)
 * // => 91
 * 
 * unique(-3)
 * // => NaN
 *
 * unique(2.4)
 * // => NaN
 *
 */

if(!window.unique){
	var unique=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// power.
		var pow=function(n){
			for(var i=0,result=1;i<n;i+=1){
				result*=10;
			}
			return result;
		};

		// the length of string.
		var length=function(string){
			return string.length;
		};

		var check=function(num){
			var pre,cur,c=0,n=num;
			while(num>0){
				cur=num%10;
				if(cur===pre){
					c+=1;
				}
				pre=cur;
				num-=cur;
				num/=10;
			}
			if(c===length(''+n)-1&&c){
				return false;
			}
			return true;
		};

		var count=function(n){
			for(var i=0,c=0;i<pow(n);i+=1){
				if(check(i)){
					c+=1;
				}
			}
			return c;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(n){
			if(isNumber(n)){
				return n>=0&&!(n%1)?count(n):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
