/**
 * 有关基本包装类型Number的方法扩展
 * 仅供个人学习使用
 */

;(function(){
	"use strict";
	// 复用接口
	function Share(){
		// 判断是否为数字的方法
		this.isNumber=function(value){
			return typeof value&&isFinite(value);
		};
	}

	var share=new Share();

	// 冻结实例
	Object.freeze(share);

	Object.defineProperties(Number.prototype,{
		// 返回指定范围内的数字
		/**
		 * var a=4;
		   a.__clamp(2,5);
		   => 4
		   a.__clamp(2,3);
		   => 3
		   a.__clamp(100,200);
		   => 100
		 */
		__clamp:{
			value:function(low,up){
				if(share.isNumber(low)&&share.isNumber(up)&&low<=up){
					switch(true){
						case low<=Number(this)&&Number(this)<=up:
						     return Number(this);
						case Number(this)>up:
						     return up;
						case Number(this)<low:
						     return low;          
					}
				} else{
					return undefined;
				}
			},
			writable:false,
			configurable:false,
			enumerable:true
		},

		// 判断数字是否在指定范围内
		/**
		 * var a=4;
		   console.log(a.__inRange(2,5));
		   => true
		   console.log(a.__inRange(7,8));
		   => false
		   console.log(a.__inRange(2,3));
		   => false
		 */
		 __inRange:{
		 	value:function(low,up){
		 		return share.isNumber(low)&&share.isNumber(up)&&low<=up?
		 		(low<=Number(this)&&Number(this)<=up?
		 			true:
		 			false):
		 		undefined;
		 	},
		 	writable:false,
		 	configurable:false,
		 	enumerable:true
		 }     
	});
})(); 