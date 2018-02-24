/**
 * 这个文件是原生JavaScript标准库的数组扩展
 * 仅供个人学习使用
 */


// 共享接口
function ShareExtend(){

	// 定义将一个数组的元素推入另一个数组的方法，参数array2的所有元素都推入array1
	this.pushArray=function(array1,array2){
    	for(var i=0,len=array2.length;i<len;i+=1){
    		array1.push(array2[i]);
    	}
	};

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
	},

	// 将数组分割成指定长度的子数组，这个方法创建并返回一个新数组，这些子数组将作为新数组的元素
    __chunk:{
    	value:function(size){     // size为子数组的长度
    		var storeArray=[],    // 将要返回的新数组
    		    chunk=[],         // 子数组
                i;
            switch(true){
            	// 如果本数组长度为0
            	case !this.length:
                     return storeArray;  // 新数组将作为空数组返回
                // 如果本数组长度大于0且size为0或不指定子数组长度
                case this.length>0&&(size===0||size===undefined):
                     shareExtend.pushArray(storeArray,this);
                     return storeArray;
                // 如果本数组长度大于0且size大于0
                case this.length>0&&size>0:
                     if(size>=this.length){      // 如果指定的长度大于或等于本数组长度则返回本数组的副本
                     	shareExtend.pushArray(storeArray,this);
                     	return storeArray;
                     } else{                    // 否则正常分组
                     	for(i=0,len=this.length;i<len;i+=1){   // 遍历本数组
                     		chunk.push(this[i]);          
                     		if((i+1)%size===0){        // 如果遍历到本数组指定的长度，则将子数组推入新数组
                     			storeArray.push(chunk);
                     			chunk=[];       
                     		}
                     	}
                     	if(chunk.length){      // 将本数组剩余元素作为子数组的元素推入新数组
                     		storeArray.push(chunk);
                     	}
                     	return storeArray;
                     }          
            }    
    	},

    	// 不可修改
    	writable:false,

    	// 不可重新配置
    	configurable:false,

    	// 可以被枚举
    	enumerable:true
    }
});