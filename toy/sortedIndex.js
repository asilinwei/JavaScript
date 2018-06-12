/**
 * 2018-06-12
 * @LinWei
 *
 * sortedIndex:
 * Return the index of the number should be inserted in the 
 * sorted array. 
 *
 * Syntax:
 * sortedIndex(array,number)
 *
 * Arguments:
 * array(Array): The array to query.
 * number(number): The number to insert in.
 *
 * Return:
 * The index.
 *
 * For example:
 * 
 * sortedIndex([1,2,4,5],3)
 * // => 2
 *
 * sortedIndex([1,2,4,5],6)
 * // => 4
 *
 */

if(!window.sortedIndex){
	var sortedIndex=(function(){
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

			// check if it is array.
			isArray:function(array){
				return isEqual(apply(array,8,13),this.array);
			},

			// check if it is number.
			isNumber:function(value){
				return isEqual(this.typeOf(value),this.number)&&isFinite(value);
			},

			// check if elements of array are all number.
			isAllNumber:function(array){
				for(var i=0;i<length(array);i+=1){
					if(!this.isNumber(array[i])){
						return false;
					}
				}
				return true;
			},

			// check if the arguments are legal type.
			isLegal:function(array,number){
				return this.isArray(array)&&this.isNumber(number);
			}

		};

		var type=new Type();

		var isEqual=function(a,b){
			return a===b;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};
		
		var length=function(array){
			return array.length;
		};

		// check if the array is sorted.
		var isSorted=function(array){
			if(type.isAllNumber(array)){
				for(var i=0;i<length(array)-1;i+=1){
					if(!(array[i]<=array[i+1])){
						return false;
					}
				}
			} else{
				throw new CustomError('TypeError','The element is not number');
			}
			return true;
		};

		var loop=function(array,number,low,high){
			var mid;
			while(low<=high){
				mid=Math.floor((low+high)/2);
				switch(true){
					case number>array[mid]:
				         low=mid+1;
				         break;
					case number<array[mid]:
				         high=mid-1;
				         break;
				    default:
				     	 return mid;          
				}
			}
			return mid;
		};

		// binary search
		var search=function(array,number){
			var mid=loop(array,number,0,length(array)-1);
			return mid;
		};

		var moreIndex=function(array,number,mid){
			if(number>array[mid]){
				mid+=1;
			}
			return mid;
		};
		
		return function(array,number){
			if(type.isLegal(array,number)){
				if(isSorted(array)){
					var low=0;
					var high=length(array)-1;
					var mid=search(array,number);
					mid=moreIndex(array,number,mid);
					return mid;
				} else{
					throw new CustomError('SortError','No sort.');
				}
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
		};
	})();
}

