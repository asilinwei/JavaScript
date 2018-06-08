/**
 * 2018-06-08
 * @LinWei
 * 
 * nth:
 * Return the element with the specified index.
 *
 * Syntax:
 * nth(array,[index=0])
 *
 * Arguments:
 * array(Array): The array to query.
 * [index=0](number): The position.
 *
 * Return:
 * The element.
 *
 * For example:
 * 
 * nth([0,1,2,3])
 * // => 0
 *
 * nth([0,1,2,3],1)
 * // => 1
 *
 * nth([0,1,2,3],5)
 * // => 1
 *
 * nth([0,1,2,3],-1)
 * // => 3
 *
 */

if(!window.nth){
	var nth=(function(){
		"use strict";

		// the class of type.
		function Type(){
			this.array='[object Array]';
			this.number='number';
		}

		// the class of compare.
		function Compare(){}

		// the class of calculate.
		function Calculate(){}

		Type.prototype={

			constructor:Type,

			// check if it is array.
			isArray:function(array){
				var type=apply(array);
				return compare.isEqual(type,this.array);
			},

			// check if it is number.
			isNumber:function(value){
				var type=typeof value;
				return compare.isEqual(type,this.number);
			},

			// check if the type of arguments is legal.
			isLegal:function(array,n){
				return this.isArray(array)&&
				       this.isNumber(n);
			}

		};

		Compare.prototype={

			constructor:Compare,

			isEqual:function(a,b){
				return a===b;
			},

			isMoreThan:function(a,b){
				return a>b;
			},

			isLessThan:function(a,b){
				return a<b;
			},

			// check if the index of element is in range of the array.
			isInRange:function(a,b){
				return !this.isLessThan(a,0)&&
				       this.isLessThan(a,b);
			}

		};

		Calculate.prototype={

			constructor:Calculate,

			add:function(a,b){
				return a+b;
			},

			mod:function(a,b){
				return a%b;
			}

		};

		var type=new Type();
		var compare=new Compare();
		var calculate=new Calculate();

		var toString=Object.prototype.toString;

		var apply=function(obj){
			return toString.apply(obj);
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		// process the index of array.
		var index=function(array,n){
			switch(true){
				case compare.isInRange(n,length(array)):
				     return n;
				case compare.isMoreThan(n,length(array)):
				     return calculate.mod(n,length(array));
				case compare.isLessThan(n,0):
				     var mod=calculate.mod(n,length(array));
				     var a=length(array);
				     var b=compare.isEqual(mod,-0)?
				           -length(array):
				           mod;
				     return calculate.add(a,b);
				default:
				     return 0;               
			}
		};

		return function(array,n){
			n=n||0;
			return type.isLegal(array,n)&&
			       length(array)?
			       array[index(array,n)]:
			       null;
		};
	})();
}