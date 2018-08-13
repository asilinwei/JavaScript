/**
 * 2018-08-13
 * @LinWei
 *
 * flip:
 * We have a two dimensional matrix A where each element is 0 or 1.
 * A move consists of choosing any row or column, and toggling each 
 * element in that row or column: changing all 0s to 1s, and all 1s
 * to 0s. After making any number of moves, every row of this matrix 
 * is interpreted as a binary number, and the score of the matrix is 
 * the sum of these numbers. Return the highest possible score.
 *
 * Syntax:
 * flip(matrix)
 *
 * Arguments:
 * matrix(Array): The two dimensional matrix.
 *
 * Return:
 * The highest possible score.
 *
 * For example:
 *
 * flip([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]) 
 * // => 39
 * // Toggled to [[1, 1, 1, 1],[1, 0, 0, 1],[1, 1, 1, 1]]
 * // 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 *
 */

if(!window.flip){
	var flip=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		// minimum length.
		var min=function(array){
			for(var i=0,min;i<length(array);i+=1){
				if(!isArray(array[i])){
					error('TypeError','Not array.');
				}
				if(!i){
					min=length(array[i]);
				}
				if(min>length(array[i])){
					min=length(array[i]);
				}
			}
			return min;
		};

		var trim=function(array){
			for(var i=0,m=min(array);i<length(array);i+=1){
				if(length(array[i])>m){
					array[i]=array[i].slice(0,m);
				}
			}
		};

		// check element.
		var check=function(array){
			for(var i=0,j;i<length(array);i+=1){
				for(j=0;j<length(array[i]);j+=1){
					if(array[i][j]!==0&&array[i][j]!==1){
						return false;
					}
				}
			}
			return true;
		};

		var init=function(array){
			for(var i=0,j;i<length(array);i+=1){
				if(!array[i][0]){
					for(j=0;j<length(array[i]);j+=1){
						array[i][j]=array[i][j]?0:1;
					}
				}
			}
		};

		// power.
		var pow=function(exponent){
			for(var i=0,result=1;i<exponent;i+=1){
				result*=2;
			}
			return result;
		};

		var toDecimal=function(array){
			var i=0,k=length(array)-1,sum=0;
			while(i<length(array)){
				sum+=array[i]*pow(k);
				i+=1;
				k-=1;
			}
			return sum;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		var flip=function(array){
			for(var i=1,j,zero,one;i<length(array[0]);i+=1){
				for(j=0,zero=0,one=0;j<length(array);j+=1){
					array[j][i]?one+=1:zero+=1;
				}
				if(zero>one){
					for(j=0;j<length(array);j+=1){
						array[j][i]=array[j][i]?0:1;
					}
				}
			}
		};

		// calculate the sum.
		var sum=function(array){
			for(var i=0,sum=0;i<length(array);i+=1){
				sum+=toDecimal(array[i]);
			}
			return sum;
		};

		return function(array){
			if(isArray(array)){
				trim(array);
				if(check(array)){
					init(array);
					flip(array);
					return sum(array);
				}
				error('ElementError','Not 0 or 1.');
			}
			error('ArgsError','Not array.');
		};
	})();

}