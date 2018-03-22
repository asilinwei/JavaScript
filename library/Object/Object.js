/**
 * Object类型的标准库扩展
 * 仅供个人学习使用
 */
;(function(){
	// 通用接口
	function Share(){
		// 判断对象类型
		this.checkObjType=function(obj,str){
			if(this.checkType(str,"string")){
				return Object.prototype.toString.apply(obj)===str;
			}
		};

		// 判断基本类型和函数对象
		this.checkType=function(some,str){
			if(typeof str==="string"){
				return typeof some===str;
			}
		};
	}

	var share=new Share();

	// 冻结实例
	Object.freeze(share);

	Object.defineProperties(Object.prototype,{
		// 合并对象的自有可枚举属性，如果原对象已经有既定属性，则修改它的值(被后面的值覆盖)，该方法会改变原对象
		/**
		 * var obj={a:2};
		   console.log(obj.__assign({b:3},{c:4}));
		   => {a:2,b:3,c:4}
		   obj={a:100}
		   console.log(obj.__assign({a:2},{c:4}));
		   => {a:2,c:4}
		 */  
		__assign:{
			value:function(){
				var name;
				for(var i=0;i<arguments.length;i+=1){
					if(share.checkObjType(arguments[i],"[object Object]")){
						for(name in arguments[i]){
							if(arguments[i].hasOwnProperty(name)){
								this[name]=arguments[i][name];
							}
						}
					} else{
						break;
					}
				}
				return this;
			},
			writable:false,
			configurable:false,
			enumerable:true
		},

		// 合并对象的可枚举属性（包括原型对象），如果原对象已经有既定属性，则修改它的值（被后面的值覆盖），该方法会改变原对象
		/**
		 * var obj={a:1};
		   function Foo1(b){
	       	  this.b=b;
		   }
		   Foo.prototype.c=3;
		   function Foo2(d){
	          this.d=d;
		   }
		   Foo.prototype.e=5;
		   console.log(obj.__extend(new Foo1(2),new Foo2(4)));
		   => {a:1,b:2,c:3,d:4,e:5}
		 */ 
		__extend:{
			value:function(){
				var i,
				    name;
				for(i=0;i<arguments.length;i+=1){
					if(share.checkObjType(arguments[i],"[object Object]")){
						for(name in arguments[i]){
							this[name]=arguments[i][name];
						}
					}
				}    
				return this;
			},
			writable:false,
			configurable:false,
			enumerable:true
		} 
	});
})(); 