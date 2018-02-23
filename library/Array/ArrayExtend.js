/**
 * 这个文件是原生JavaScript标准库的数组扩展
 * 仅供个人学习使用
 */


// 共享接口
function ShareExtend(){
} 

var shareExtend=new ShareExtend();

// 冻结共享实例
Object.freeze(shareExtend);

// 扩展方法
Object.defineProperties(Array.prototype,{

	// 与原生concat类似的方法
	__concat:{
		value:function(){
			var array=[],      // 将要作为返回值的函数
			    i,
			    j,
			    len1,
			    len2;
			if(!arguments.length){            // 如果没有参数
				for(i=0,len1=this.length;i<len1;i+=1){
					array.push(this[i]);               // 将本数组的元素推入array
				}
                return array;
			} else{  // 如果有参数
            	for(i=0,len1=this.length;i<len1;i+=1){  // 将本数组的元素推入array
            		array.push(this[i]);
            	}
            	for(i=0,len1=arguments.length;i<len1;i+=1){   // 接着遍历参数
            		// 参数是数组
                	if(Object.prototype.toString.apply(arguments[i])==="[object Array]"){
                    	for(j=0,len2=arguments[i].length;j<len2;j+=1){    // 遍历数组
                        	array.push(arguments[i][j]);                // 将参数数组的元素推入array
                    	}
                	} else{
                		array.push(arguments[i]);    // 将其他类型参数推入array
                	}
            	}
            	return array;
			}
		},

		// 无法修改
		writable:false,

		// 无法重新配置
		configurable:false,

		// 可以被枚举
		enumerable:true
	}
});