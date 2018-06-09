/**
 * 2018-06-09
 * @LinWei
 *
 * I don't want to write comments today because I am tired.
 *
 * For example:
 * 
 * accumulateSquare(1,3)
 * // => 14 === square(1) + square(2) + square(3)
 *
 */ 

if(!window.accumulateSquare){
	var accumulateSquare=(function(){
		"use strict";
		function Type(){
			this.number='number';
		}
		function Calculate(){}
		function Compare(){}
		Type.prototype={
			constructor:Type,
			isNumber:function(value){
				var type=typeof value;
				return compare.isEqual(type,this.number)&&
			       	   isFinite(value);
			},
			isBothNumber:function(num1,num2){
				return this.isNumber(num1)&&
			       	   this.isNumber(num2);
			}
		};
		Calculate.prototype={
			constructor:Calculate,
			square:function(num){
				return num*num;
			},
			accumulate:function(start,end,sum){
				var isMoreThan=compare.isMoreThan;
				for(var i=start;!isMoreThan(i,end);i+=1){
					sum+=this.square(i);
				}
				return sum;
			}
		};
		Compare.prototype={
			constructor:Compare,
			isEqual:function(a,b){
				return a===b;
			},
			isMoreThan:function(a,b){
				return a>b;
			}
		};
		var type=new Type();
		var calculate=new Calculate();
		var compare=new Compare();
		return function(start,end){
			return type.isBothNumber(start,end)?
		           calculate.accumulate(start,end,0):
		           null;
		};
	})();

}

