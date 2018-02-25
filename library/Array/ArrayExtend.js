/**
 * 这个文件是原生JavaScript标准库的数组扩展
 * 仅供个人学习使用
 */


;(function(){
    // 共享接口
    function Share(){

        // 定义将一个数组的元素推入另一个数组的方法，参数array2的所有元素都推入array1
        this.pushArray=function(array1,array2){
            for(var i=0,len=array2.length;i<len;i+=1){
                array1.push(array2[i]);
            }
        };

    } 

    var share=new Share();

    // 冻结共享实例
    Object.freeze(share);

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
                        share.pushArray(storeArray,this);
                        return storeArray;
                    // 如果本数组长度大于0且size大于0
                    case this.length>0&&size>0:
                        if(size>=this.length){      // 如果指定的长度大于或等于本数组长度则返回本数组的副本
                            share.pushArray(storeArray,this);
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
                    // 如果size不是数字
                    case typeof size!=="number"&&size!==undefined:
                         throw new Error("patameter error:size is not a number.");    
                }    
            },

            // 不可修改
            writable:false,

            // 不可重新配置
            configurable:false,

            // 可以被枚举
            enumerable:true
        },

        // 返回一个新数组，该新数组的元素是调用方法的数组删除falsey值的结果，falsey值有null,undefined,0,"",false以及NaN
        __compact:{
            value:function(){
                var storeArray=[],    // 将要作为返回值的数组
                    i;
                if(!this.length){
                    return [];          // 如果调用方法的数组长度为0，返回空数组。
                } else{
                    for(i=0,len=this.length;i<len;i+=1){
                        if(!this[i]){
                            continue;
                        }
                        storeArray.push(this[i]);
                    }
                    return storeArray;
                }
            },

            // 无法修改
            writable:false,

            // 无法重新配置
            configurable:false,

            // 可以枚举
            enumerable:true
        },

        // 返回一个新数组，该新数组的元素是从前删除调用该方法的数组的n个元素后剩余的元素
        __drop:{
            value:function(n){
                var storeArray=[],     // 要返回的数组
                    i;
                if(typeof n==="number"||n===undefined){
                    switch(true){
                        case n>0&&n<this.length&&this.length>0:
                             i=n;
                             while(i<this.length){
                                storeArray.push(this[i++]);
                             }
                             return storeArray;
                        case (n===0||n===undefined)&&this.length>0:   // 如果删除元素个数为0或不传参，则返回调用方法的数组一模一样的新数组
                             share.pushArray(storeArray,this); 
                             return storeArray;
                        case !this.length||n>=this.length:  // 调用方法的数组为空数组或删除元素个数超过数组长度返回空数组
                             return [];
                        default:
                             return null;         
                    }
                } else{
                    throw new Error("n must be a number.");
                }  
            },

            // 不可修改
            writable:false,

            // 不可重新配置
            configurable:false,

            // 可以枚举
            writable:true
        },

        // 返回一个新数组，该新数组的元素是从后删除调用该方法的数组的n个元素后剩余的元素
        __dropRight:{
            value:function(n){
                var storeArray=[],    // 要返回的数组
                    i;
                if(typeof n==="number"||n===undefined){
                    switch(true){
                        case n>0&&n<this.length&&this.length>0:
                             i=0;
                             while(i<this.length-n){
                                storeArray.push(this[i++]);
                             }
                             return storeArray;
                        case (n===0||n===undefined)&&this.length>0:    // 如果删除元素个数为0或不传参，则返回调用方法的数组一模一样的新数组
                              share.pushArray(storeArray,this);
                              return storeArray;
                        case !this.length||n>=this.length:    // 调用方法的数组为空数组或删除元素个数超过数组长度返回空数组
                             return [];
                        default:
                             return null;                
                    }
                } else{
                    throw new Error("n is not a number.");
                }  
            },

            // 不可修改
            writable:false,

            // 不可重新配置
            configurable:false,

            // 可以枚举
            enumerable:true
        }
    });
})();