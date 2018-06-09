/**
 * 2018-06-09
 * @LinWei
 * 
 * I don't want to write comments today because I am tired.
 *
 * For example:
 * 
 * pick({a:1,b:2,c:3},['a','c'])
 * // => {a:1,c:3}
 *
 */ 

if(!window.pick){
	var pick=(function(){
		"use strict";
		var toString=Object.prototype.toString;
		var getPrototypeOf=Object.getPrototypeOf;
		var prototype=Object.prototype;

		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}
		function Type(){
			this.string='string';
			this.array='[object Array]';
			this.object='[object Object]';
		}
		function Compare(){}
		Type.prototype={
			constructor:Type,
			isObjectLiteral:function(obj){
				return compare.isEqual(getPrototypeOf(obj),prototype)&&
				       compare.isEqual(apply(obj),this.object);
			},
			isArray:function(array){
				return compare.isEqual(apply(array),this.array);
			},
			isString:function(value){
				var type=typeof value;
				return compare.isEqual(type,this.string);
			},
			isLegal:function(object,array){
				return this.isObjectLiteral(object)&&this.isArray(array);
			}
		};
		Compare.prototype={
			constructor:Compare,
			isEqual:function(a,b){
				return a===b;
			},
			isLessThan:function(a,b){
				return a<b;
			}
		};
		var type=new Type();
		var compare=new Compare();
		var apply=function(obj){
			return toString.apply(obj);
		};
		var length=function(array){
			return array.length;
		};
		var isLegalPropertyName=function(obj,array,index){
			return type.isString(array[index])&&
			       obj.hasOwnProperty(array[index]);
		};
		var addProperty=function(obj,object,array){
			var isLessThan=compare.isLessThan;
			var len=length(array);
			for(var i=0;isLessThan(i,len);i+=1){
				if(!isLegalPropertyName(object,array,i)){
					continue;
				}
				obj[array[i]]=object[array[i]];
			}
		};
		return function(object,array){
			if(type.isLegal(object,array)){
				var obj={};
				addProperty(obj,object,array);
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
			return obj;
		};
	})();
}