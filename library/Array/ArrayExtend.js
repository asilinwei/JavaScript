/**
 * 这个文件是原生JavaScript标准库的数组扩展
 * 仅供个人学习使用
 */


;(function(){
    // 共享接口
    function Share(){

        // 定义将一个数组的元素推入另一个数组的方法，参数array2的所有元素都推入参数array1
        this.pushArray=function(array1,array2){
            for(var i=0,len=array2.length;i<len;i+=1){
                array1.push(array2[i]);
            }
        };

        // 定义根据指定索引将一个数组的元素推入另一个数组的方法，参数array2的元素推入参数array1,参数s为起始索引,e为结束索引
        this.pushArrayIndex=function(array1,array2,s,e){
            var i,
                len;
            for(i=s,len=e;i<len;i+=1){
                array1.push(array2[i]);
            }    
        };
        
        // 根据条件寻找索引的方法
        this.findIndex=function(array,condition){
            var i,
                len;
            if(condition){
                switch(true){
                    case typeof condition==="function":
                         for(i=0,len=array.length;i<len;i+=1){
                            if(Object.prototype.toString.apply(array[i])==="[object Object]"){
                                if(condition(array[i])){
                                    return i;
                                } 
                            } else{
                                break;
                            }
                         }
                         break;
                    case Object.prototype.toString.apply(condition)==="[object Object]":
                         for(i=0,len=array.length;i<len;i+=1){
                            if(Object.prototype.toString.apply(array[i])==="[object Object]"){
                                if(JSON.stringify(condition)===JSON.stringify(array[i])){
                                    return i;
                                } 
                            } else{
                                break;
                            }
                         }     
                         break;
                }
            } else{
                return undefined;
            } 
        };

        // 递归遍历数组的方法
        this.recurrenceTravel=function(arr2,store){
            var i,
                len;
            if(arr2.length!==0&&store!==undefined){
                for(i=0,len=arr2.length;i<len;i+=1){
                    if(Object.prototype.toString.apply(arr2[i])==="[object Array]"){
                        this.recurrenceTravel(arr2[i],store);
                    } else{
                        store.push(arr2[i]);
                    }
                }
            }    
        };

        // 递归指定维度的遍历数组的方法
        this.recurrenceTravelDepth=function(arr2,store,count){
            var i,
                len;
            if(arr2.length!==0&&store!==undefined&&count!==undefined){
                for(i=0,len=arr2.length;i<len;i+=1){
                    if(Object.prototype.toString.apply(arr2[i])==="[object Array]"&&count>0){
                        count--;
                        this.recurrenceTravelDepth(arr2[i],store,count);
                    } else{
                        store.push(arr2[i]);
                    }
                }
            }    
        };

        // 查找值返回索引
        this.returnValue=function(arr2,val,from){
            for(var i=from,len=arr2.length;i<len;i+=1){
                if(arr2[i]===val){
                    return i;
                }
            }
            return -1;
        };

        // 从数组最后查找值返回索引
        this.returnValueLast=function(arr2,val,from){
            for(var i=from;i>=0;i-=1){
                if(arr2[i]===val){
                    return i;
                }
            }
            return -1;
        };

        // 判断对象类型
        this.checkType=function(obj,str){
            if(this.check(str,"string")){
               return Object.prototype.toString.apply(obj)===str;
            }
        };

        // 判断基本类型
        this.check=function(value,str){
            if(typeof str==="string"){
               return typeof value===str;
            }
        };

        // 判断是否为数字
        this.isNumber=function(value){
            return typeof value==="number"&&isFinite(value);
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

            // 可以枚举
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
        },

        // 将数组指定索引区间的所有元素替换成指定值，element为指定的替换值，start为区间的开始，end为区间结束，该方法会改变调用该方法的数组。
        // 如果指定开始索引和结束索引相等则该索引的值将被替换
        __fill:{
            value:function(element,start,end){
                var i,
                    j,
                    len,
                    count;
                if(!this.length||element===undefined){     // 如果调用方法的数组为空或不指定替换值则不改变数组
                    return;
                } else{
                    switch(true){
                        case start>=0&&end<this.length:
                             if(end<start){
                                return;
                             } else{
                                for(i=0,len=this.length;i<len;i+=1){
                                    if(i===start){
                                        for(j=start,count=0;count<=end-start;j+=1,count+=1){
                                            this[j]=element;
                                        }
                                        break;
                                    }
                                }
                                return;
                             }
                        case start<0||end<0||end>=this.length:
                             throw new Error("The interval is overflow.");
                        case start===undefined||end===undefined:            // 如果不指定区间则整个数组全部替换
                             for(i=0,len=this.length;i<len;i+=1){   
                                this[i]=element;
                             }         
                             return;
                        default:
                             return;     
                    }
                }
            },

            // 无法修改
            writable:false,

            // 无法重新配置
            configurable:false,

            // 可以枚举
            enumerable:true
        },

        // 返回符合条件的第一个元素的索引值，数组元素必须是对象，条件参数可以是函数或指定对象
        /**
         * var users = [
              { 'user': 'barney',  'active': false },
              { 'user': 'fred',    'active': false },
              { 'user': 'pebbles', 'active': true }
           ];
         * console.log(users.__findIndex(function(o){return o.user==='barney';}));
         * => 0
         * console.log(users.__findIndex({user:'fred',active:false}));
         * => 1
         */
         __findIndex:{
            value:function(condition){
                return this.length?share.findIndex(this,condition):undefined;
            },
            
            // 无法修改
            writable:false,

            // 无法重新配置
            configurable:false,

            // 可以枚举
            enumerable:true
         },


         // 返回数组第一个元素
         /**
          * var array1=[1,2,3,4,5];
          * console.log(array1.__head());
          * => 1
          * var array2=[];
          * console.log(array2.__head());
          * => undefined
          */
         __head:{
            value:function(){
                return this.length?this[0]:undefined;
            },
            writable:false,
            configurable:false,
            enumerable:true
         },

         // 返回数组最后一个元素
         /**
          * var array1=[1,2,3,4,5];
          * console.log(array1.__last());
          * => 5
          * var array2=[];
          * console.log(array2.__last());
          * => undefined
          */
          __last:{
            value:function(){
                return this.length?this[this.length-1]:undefined;
            },
            writable:false,
            configurable:false,
            enumerable:true
          },

          // 该方法将数组减少一个维度，并返回对应新数组
          /**
           * var array=[1,2,3,[4,5,[6,7],8],9,10];
           * console.log(array.__flatten());
           * => [1,2,3,4,5,[6,7],8,9,10]
           */
          __flatten:{
            value:function(){
               var storeArray=[],
                   i,
                   j,
                   len1,
                   len2;
               if(!this.length){
                  return [];
               } else{
                  for(i=0,len1=this.length;i<len1;i+=1){
                      if(Object.prototype.toString.apply(this[i])==="[object Array]"){
                          for(j=0,len2=this[i].length;j<len2;j+=1){
                              storeArray.push(this[i][j]);
                          }
                      } else{
                          storeArray.push(this[i]);
                      }
                  }
                  return storeArray;
               }    
            },
            writable:false,
            configurable:false,
            enumerable:true
          },

          // __flatten方法的深度版，将多维数组转变为一维数组并返回对应新数组
          /**
           * var array=[1,2,3,[4,5,[6,7,[11,12]]],[8,[9,10,11]]];
           * console.log(array.__flattenDeep());
           * => [1,2,3,4,5,6,7,11,12,8,9,10,11]
           */
           __flattenDeep:{
              value:function(){
                var storeArray=[];
                if(!this.length){
                    return [];
                } else{
                    share.recurrenceTravel(this,storeArray);
                }
                return storeArray;
              },
              writable:false,
              configurable:false,
              enumerable:true
           },

           // 该方法将数组减少指定维度，并返回对应新数组，默认不减少维度，如果指定维度超过调用方法的数组的维度则返回一维数组
           /**
            * var array=[1,[2,[3,[4]]],5];
            * console.log(array.__flattenDepth());
            * => [1,[2,[3,[4]]],5]
            * console.log(array.__flattenDepth(1));
            * => [1,2,[3,[4]],5]
            * console.log(array.__flattenDepth(2));
            * => [1,2,3,[4],5]
            * console.log(array.__flattenDepth(3));
            * => [1,2,3,4,5]
            * console.log(array.__flattenDepth(4));
            * => [1,2,3,4,5]
            */
            __flattenDepth:{
                value:function(n){
                    var storeArray=[];
                    if(!this.length){
                        return [];
                    } else{
                        if(n!==undefined){
                            share.recurrenceTravelDepth(this,storeArray,n);
                        } else{
                            share.pushArray(storeArray,this);
                        }
                        return storeArray;
                    }
                },
                writable:false,
                configurable:false,
                enumerable:true
            },

            // 将数组元素转为对象的键值对，返回一个新对象
            /**
             * var array=[['a',1],['b',2]];
             * console.log(array.__fromPairs());
             * => {a:1,b:2}
             */
             __fromPairs:{
                value:function(){
                    var obj={},
                        i,
                        len;
                    if(!this.length){
                        return {};
                    } else{
                        for(i=0,len=this.length;i<len;i+=1){
                            if(Object.prototype.toString.apply(this[i])==="[object Array]"&&this[i].length===2&&typeof this[i][0]==="string"){
                                obj[this[i][0]]=this[i][1];
                            } else{
                                throw new Error("Not pairs.");
                            }
                        }
                        return obj;
                    }    
                },
                writable:false,
                configurable:false,
                enumerable:true
             },

             // 根据指定值查找数组元素返回索引，如果未找到返回-1
             /**
              * var array=[1,2,1,2];
              * console.log(array.__indexOf(2));
              * => 1
              * console.log(array.__indexOf(2,2));
              * => 3
              */
              __indexOf:{
                  value:function(value,fromIndex){
                      return !this.length||value===undefined?undefined
                             :(fromIndex===undefined?share.returnValue(this,value,0)
                              :share.returnValue(this,value,fromIndex));
                  },
                  writable:false,
                  configurable:false,
                  enumerable:true
              },

              // 删除数组最后的元素
              /**
               * var array=[1,2,3,4,5];
               * array.__initial();
               * console.log(array);
               * => [1,2,3,4]
               */
               __initial:{
                  value:function(){
                      if(this.length){
                          this.length-=1;
                      }
                  },
                  writable:false,
                  configurable:false,
                  enumerable:true
               },

               // 根据指定值从后向前查找数组元素返回索引，如果未找到则返回-1
               /**
                * var array=[1,2,1,2];
                * console.log(array.__indexOfLast(2));
                * => 3
                * console.log(array.__indexOfLast(2,2));
                * => 1
                */
               __indexOfLast:{
                  value:function(value,fromIndex){
                      return !this.length||value===undefined?undefined
                             :(fromIndex===undefined?share.returnValueLast(this,value,this.length-1)
                              :share.returnValueLast(this,value,fromIndex));
                  },
                  writable:false,
                  configurable:false,
                  enumerable:true
               },

               // 根据指定索引index返回对应元素，如果索引index是负数，则返回从结尾开始的第index个元素。
               /**
                * var array=[1,2,3,4,5];
                * console.log(array.__nth(0));
                * => 1
                * console.log(array.__nth(-1));
                * => 5
                */
                __nth:{
                    value:function(index){
                        return !this.length||index===undefined||index>this.length-1?undefined
                                :(index>=0?this[index]
                                  :this[index%this.length===0?0
                                    :this.length+index%this.length]);
                    },
                    writable:false,
                    configurable:false,
                    enumerable:true
                },

              // 删除调用方法的数组指定的元素
              /**
               * var array=[1,0,2,1,0,6,9,1,1,9];
               * array.__pull(1);
                 console.log(array);
                 => [0,2,0,6,9,9]
               * array.__pull(1,0);
                 console.log(array);
                 => [2,6,9,9]
               */
               __pull:{
                  value:function(){
                      var i,
                          j,
                          k,
                          len1,
                          len2,
                          len3;
                      if(this.length){
                          for(i=0,len1=arguments.length;i<len1;i+=1){
                              for(j=0,len2=this.length;j<len2;j+=1){
                                  if(this[j]===arguments[i]){
                                      for(k=j,len3=this.length;k<len3;k+=1){
                                          this[k]=this[k+1];
                                      }
                                      this.length-=1;
                                      j-=1;
                                  }
                              }
                          }
                      }    
                  },
                  writable:false,
                  configurable:false,
                  enumerable:true
               },

               // 从数组中删除指定索引的元素，并返回已删除元素的新数组
               /**
                * var array=['a','b','c','d'];
                  console.log(array.__pullAt([1,3]));
                  => ['b','d']
                  console.log(array);
                  => ['a','c']
                */
                __pullAt:{
                    value:function(index){
                        var i,
                            j,
                            len1,
                            len2,
                            storeArray=[];
                        if(this.length&&Object.prototype.toString.apply(index)==="[object Array]"&&index.length){
                            for(i=0,len1=index.length;i<len1;i+=1){
                                storeArray.push(this[index[i]]);
                            }
                            for(i=0,len1=index.length;i<len1;i+=1){
                                for(j=index[i],len2=this.length;j<len2;j+=1){
                                    this[j]=this[j+1];
                                }
                                this.length-=1;
                            }
                        }    
                        return storeArray;
                    },
                    writable:false,
                    configurable:false,
                    enumerable:true
                },

                // 根据条件函数删除符合条件的元素，并返回已删除元素的新数组
                /**
                 * var array=[1,2,3,4];
                   console.log(array.__remove(function(n){return n%2===0;}));
                   => [2,4]
                   console.log(array);
                   => [1,3]
                 */
                __remove:{
                    value:function(f){
                        var storeArray=[],
                            i,
                            j,
                            len1,
                            len2;
                        if(this.length&&f!==undefined&&typeof f==="function"){
                            i=0;
                            len1=this.length;
                            while(i<len1){
                                if(f(this[i])){
                                    storeArray.push(this[i]);
                                    for(j=i,len2=this.length;j<len2;j+=1){
                                        this[j]=this[j+1];
                                    }
                                    this.length-=1;
                                    i-=1;
                                }
                                i+=1;
                            }
                        }    
                        return storeArray;
                    },
                    writable:false,
                    configurable:false,
                    enumerable:true
                },

                // 将数组元素颠倒，第一个元素成为最后一个，第二个元素成为倒数第二个元素，以此类推
                /** 
                 * var array=[1,2,3,4,5];
                   array.__reverse();
                   console.log(array);
                   => [5,4,3,2,1]
                 */
                __reverse:{
                    value:function(){
                        var i,
                            j,
                            temp;
                        if(this.length){
                            for(i=0,j=this.length-1;i<=j;i+=1,j-=1){
                                temp=this[i];
                                this[i]=this[j];
                                this[j]=temp;
                            }
                        }    
                    },
                    writable:false,
                    configurable:false,
                    enumerable:true
                },

                // 根据索引返回数组片段，不包括索引为end的元素，默认数组片段是数组的所有元素
                /**
                 * var array=[0,1,2,3,4,5];
                 * console.log(array.__slice());
                   => [0,1,2,3,4,5]
                 * console.log(array.__slice(1));
                   => [1,2,3,4,5]
                 * console.log(array.__slice(1,4));
                   => [1,2,3]
                 */
                 __slice:{
                    value:function(start,end){
                        var storeArray=[];
                        if(this.length){
                            switch(true){
                                case start===undefined&&end===undefined:
                                     share.pushArrayIndex(storeArray,this,0,this.length);
                                     break;
                                case start!==undefined&&end===undefined:
                                     share.pushArrayIndex(storeArray,this,start,this.length);
                                     break;
                                case start!==undefined&&end!==undefined&&start<end:
                                     share.pushArrayIndex(storeArray,this,start,end);
                                     break;
                                default:;               
                            }
                        }
                        return storeArray;
                    },
                    writable:false,
                    configurable:false,
                    enumerable:true
                 },

                 // 获取除了数组第一项之外的所有元素，返回该数组片段
                 __tail:{
                    value:function(){
                        var storeArray=[];
                        share.pushArrayIndex(storeArray,this,1,this.length);
                        return storeArray;
                    },
                    writable:false,
                    configurable:false,
                    enumerable:true
                 },    

                 // 创建一个分割后的数组，从数组的开始到第n个元素，默认返回的数组包含原数组的所有元素
                 /**
                  * var array=[0,1,2,3,4,5];
                    console.log(array.__take(1));
                    => [0]
                    console.log(array.__take(2));
                    => [0,1]
                    console.log(array.__take(100));
                    => [0,1,2,3,4,5]
                    console.log(array.__take());
                    => [0,1,2,3,4,5]
                  */
                  __take:{
                      value:function(n){
                          var storeArray=[];
                          if(this.length){
                              n>=0&&n<this.length&&share.pushArrayIndex(storeArray,this,0,n);
                              (n>=this.length||n===undefined)&&share.pushArrayIndex(storeArray,this,0,this.length);
                          }
                          return storeArray;
                      },
                      writable:false,
                      configurable:false,
                      enumerable:true
                  },

                  // 跟take方法相似，只是该方法是从后向前数的n个元素,默认返回的数组包含原数组的所有元素
                  /**
                   * var array=[1,2,3]
                     console.log(array.__takeRight(1))；
                     => [3]
                     console.log(array.__takeRight(2));
                     => [2,3]
                     console.log(array.__takeRight(100));
                     => [1,2,3]
                     console.log(array.__takeRight());
                     => [1,2,3]
                   */
                   __takeRight:{
                      value:function(n){
                          var storeArray=[];
                          if(this.length){
                              n>=0&&n<this.length&&share.pushArrayIndex(storeArray,this,this.length-n,this.length);
                              (n>=this.length||n===undefined)&&share.pushArrayIndex(storeArray,this,0,this.length);
                          }
                          return storeArray;
                      },
                      writable:false,
                      configurable:false,
                      enumerable:true
                   },

                   // 数组去重
                   /**
                    * var array=[2,1,2];
                      array.__uniq();
                      console.log(array);
                      => [2,1]
                    */
                    __uniq:{
                        value:function(){
                            var i,
                                j,
                                k,
                                len1,
                                len2,
                                len3;
                            if(this.length){
                                for(i=0,len1=this.length;i<len1;i+=1){
                                    for(j=i+1,len2=this.length;j<len2;j+=1){
                                        if(this[i]===this[j]){
                                            for(k=j,len3=this.length;k<len3;k+=1){
                                                this[k]=this[k+1];
                                            }
                                            this.length-=1;
                                            j-=1;
                                        }
                                    }
                                }
                            }    
                        },
                        writable:false,
                        configurable:false,
                        enumerable:true
                    },

                    // 对数组进行解包，返回一个新数组
                    /**
                     * var array=[['a',true,1],['b',false,2],['c',true,3]];
                       console.log(array.__unzip());
                       => [['a','b','c'],[true,false,true],[1,2,3]]
                     */
                     __unzip:{
                        value:function(){
                            var storeArray=[],
                                store,
                                i,
                                j,
                                k,
                                len1,
                                len2,
                                len3;
                            if(this.length){
                                for(i=0,j=0,len1=this.length,len2=this[i].length;i<len1||j<len2;i+=1,j+=1){
                                    store=[];
                                    for(k=0,len3=this.length;k<len3;k+=1){
                                        if(this[k][j]!==undefined){
                                            store.push(this[k][j]);
                                        }
                                    }
                                    storeArray.push(store);
                                }
                                for(i=0;i<storeArray.length;i+=1){
                                    if(!storeArray[i].length){
                                        for(j=i,len2=storeArray.length;j<len2;j+=1){
                                            storeArray[j]=storeArray[j+1];
                                        }
                                        storeArray.length-=1;
                                        i-=1;
                                    }
                                }
                            }    
                            return storeArray;
                        },
                        writable:false,
                        configurable:false,
                        enumerable:true
                     },

                     // 删除指定元素并返回一个新数组，注意此方法不会改变原数组
                     /**
                      * var array=[2,1,2,3];
                        console.log(array.__without(1,2));
                        => [3]
                      */
                      __without:{
                          value:function(){
                              var storeArray=[],
                                  i,
                                  j,
                                  k,
                                  len1,
                                  len2,
                                  len3;
                              if(this.length){
                                  share.pushArray(storeArray,this);
                                  for(i=0,len1=arguments.length;i<len1;i+=1){
                                      for(j=0;j<storeArray.length;j+=1){
                                          if(arguments[i]===storeArray[j]){
                                              for(k=j;k<storeArray.length;k+=1){
                                                  storeArray[k]=storeArray[k+1];
                                              }
                                              storeArray.length-=1;
                                              j-=1;
                                          }
                                      }
                                  }
                              }   
                              return storeArray; 
                          },
                          writable:false,
                          configurable:false,
                          enumerable:true
                      },

                      // 类似原生数组方法every
                      /**
                       * var array=[1,2,3,4,5];
                         array.__every(function(element){
                            console.log(element);
                            return element<3;
                         });
                         => 1 2 3
                       */
                       __every:{
                          value:function(fn){
                              if(this.length&&typeof fn==="function"){
                                  for(var i=0,len=this.length;i<len;i+=1){
                                      if(!fn(this[i])){
                                         break;
                                      }
                                  }
                              }
                          },
                          writable:false,
                          configurable:false,
                          enumerable:true
                       },

                       // 类似原生数组方法some
                       /**
                        * var array=[1,2,3,4,5];
                          array.__some(function(element){
                              console.log(element);
                              return element>3;     
                          });
                          => 1 2 3 4
                        */
                        __some:{
                            value:function(fn){
                                if(this.length&&typeof fn==="function"){
                                    for(var i=0,len=this.length;i<len;i+=1){
                                        if(fn(this[i])){
                                            break;
                                        }
                                    }
                                }
                            },
                            writable:false,
                            configurable:false,
                            enumerable:true
                        },

                        // 类似原生数组方法map
                        /**
                         * var array=[1,2,3,4,5];
                           console.log(array.__map(function(element){
                                return element*2;
                           }));
                           => [2,4,6,8,10]
                         */
                         __map:{
                            value:function(fn){
                                var storeArray=[],
                                    i,
                                    len;
                                if(this.length&&typeof fn==="function"){
                                    for(i=0,len=this.length;i<len;i+=1){
                                        storeArray.push(fn(this[i]));
                                    }
                                }    
                                return storeArray;
                            },
                            writable:false,
                            configurable:false,
                            enumerable:true
                         },

                         // 类似原生数组方法filter
                         /**
                          * var array=[1,2,3,4,5,6,7,8,9];
                            console.log(array.__filter(function(element){
                                return element%2===0;
                            }));
                            => [2,4,6,8]
                          */            
                          __filter:{
                              value:function(fn){
                                  var storeArray=[],
                                      i,
                                      len;
                                  if(this.length&&typeof fn==="function"){
                                      for(i=0,len=this.length;i<len;i+=1){
                                          fn(this[i])&&storeArray.push(this[i]);
                                      }
                                  }    
                                  return storeArray;
                              },
                              writable:false,
                              configurable:false,
                              enumerable:true
                          },

                          // 类似原生数组方法reduce
                          /**
                           * var array=[1,2,3,4,5];
                             console.log(array.__reduce(function(result,element){
                                  return result+element;
                             }));
                             => 15
                             array=['one','two','three'];
                             console.log(array.__reduce(function(result,element){
                                  return result+element;
                             }));
                             => 'onetwothree'
                           */
                           __reduce:{
                              value:function(fn){
                                  var result;
                                  if(this.length&&typeof fn==="function"){
                                      result=this[0];
                                      for(var i=1,len=this.length;i<len;i+=1){
                                          result=fn(result,this[i]);
                                      }
                                  }
                                  return result;
                              },
                              wirtable:false,
                              configurable:false,
                              enumerable:true
                           },

                           // 通过迭代运行数组中的每个元素并扁平映射每个数组元素来创建一个新数组
                           /**
                            * var array=[1,2,3];
                              console.log(array.__flatMap(function(element){
                                  return [element,element];
                              }));
                              => [1,1,2,2,3,3]
                            */  
                            __flatMap:{
                               value:function(fn){
                                  var i,
                                      j,
                                      len1,
                                      len2,
                                      storeArray=[];
                                  if(this.length&&typeof fn==="function"){
                                      for(i=0,len1=this.length;i<len1;i+=1){
                                          if(share.checkType(fn(this[i]),"[object Array]")){
                                              for(j=0,len2=fn(this[i]).length;j<len2;j+=1){
                                                  storeArray.push(fn(this[i])[j]);
                                              }
                                          }
                                      }
                                  }
                                  return storeArray;    
                               },
                               writable:false,
                               configurable:false,
                               enumerable:true
                            },

                            // 类似原生数组方法join，如果不传入实参，则返回undefined
                            /**
                             * var array=[1,2,3,4,5,6];
                               console.log(array.__join('~'));
                               => 1~2~3~4~5~6
                             */
                             __join:{
                                value:function(sep){
                                    var str;
                                    if(this.length&&typeof sep==='string'){
                                        str=this[0];
                                        for(var i=1,len=this.length;i<len;i+=1){
                                            str+=sep+this[i];
                                        }
                                    }
                                    return str;
                                },
                                writable:false,
                                configurable:false,
                                enumerable:true
                             },

                             // 将数组元素相加返回总和，如果其中有元素不是数字，则返回0
                             /**
                              * var num=[1,2,3,4,5];
                                console.log(num.__add());
                                => 15
                                num=[1,2,NaN,5];
                                console.log(num.__add());
                                => 0
                              */
                              __add:{
                                  value:function(){
                                      var sum=0,
                                          i,
                                          len;
                                      if(this.length){
                                          for(i=0,len=this.length;i<len;i+=1){
                                              if(share.isNumber(this[i])){
                                                 sum+=this[i];
                                              } else{
                                                  sum=0;
                                                  break;
                                              }
                                          }
                                      }    
                                      return sum;
                                  },
                                  writable:false,
                                  configurable:false,
                                  enumerable:true
                              },

                              // 找出数组中最大的值，如果遇到数组元素不是数字则返回首个元素值
                              /**
                               * var num=[1,2,3,4,5];
                                 console.log(num.__max());
                                 => 5
                                 num=[1,2,NaN,4];
                                 console.log(num.__max());
                                 => 1
                                 num=[];
                                 console.log(num.__max());
                                 => undefined
                               */
                              __max:{
                                  value:function(){
                                      var max,
                                          i,
                                          len;
                                      if(this.length){
                                         max=this[0];
                                         for(i=1,len=this.length;i<len;i+=1){
                                            if(share.isNumber(this[i])){
                                                if(this[i]>max){
                                                    max=this[i];
                                                } 
                                            } else{
                                                max=this[0];
                                                break;
                                            }
                                         }
                                      } 
                                      return max;   
                                  },
                                  writable:false,
                                  configurable:false,
                                  enumerable:true
                              },

                              // 找出数组元素属性中值最大的值，该数组元素是对象，如果遇到不是对象的数组元素则返回当前最大的属性值
                              // 该方法接受一个函数迭代每个数组元素
                              /**
                               * var objects=[{n:12},{n:2},{n:24},{n:11}];
                                 console.log(objects.__maxBy(function(o){
                                      return o.n;
                                 }));
                                 => 24
                                 objects=[{n:12},{n:2},'lala',{n:11}];
                                 console.log(objects.__maxBy(function(o){
                                      return o.n;
                                 }));
                                 => 12
                               */
                               __maxBy:{
                                  value:function(fn){
                                      var max,
                                          i,
                                          len;
                                      if(this.length&&share.check(fn,"function")){
                                          max=share.checkType(this[0],"[object Object]")&&
                                               share.isNumber(fn(this[0]))?
                                                 fn(this[0]):
                                                 undefined;
                                          for(i=1,len=this.length;i<len&&max&&share.checkType(this[i],"[object Object]")&&fn(this[i]);i+=1){
                                              if(fn(this[i])>max){
                                                 max=fn(this[i]);
                                              }
                                          }       
                                      }   
                                      return max;
                                  },
                                  writable:false,
                                  confugurable:false,
                                  enumerable:true
                               },

                               // 求数组元素的平均值，如果数组为空或遇到不是数字的数组元素都返回0
                               /**
                                * var num=[1,2,3,4];
                                  console.log(num.__mean());
                                  => 2.5
                                  num=[1,2,null,4];
                                  console.log(num.__mean());
                                  => 0
                                  num=[];
                                  console.log(num.__mean());
                                  => 0
                                */
                                __mean:{
                                    value:function(){
                                        var sum=0;
                                        if(this.length){
                                            for(var i=0,len=this.length;i<len;i+=1){
                                                if(share.isNumber(this[i])){
                                                    sum+=this[i];
                                                } else{
                                                    sum=0;
                                                    break;
                                                }
                                            }
                                            return sum/this.length;
                                        }
                                        return sum;
                                    },
                                    writable:false,
                                    configurable:false,
                                    enumerable:true
                                },

                                __meanBy:{
                                    value:function(fn){
                                        var sum=0,
                                            i,
                                            len;
                                        if(this.length&&share.check(fn,"function")){
                                            for(i=0,len=this.length;i<len;i+=1){
                                                if(share.checkType(this[i],"[object Object]")&&share.isNumber(fn(this[i]))){
                                                    sum+=fn(this[i]);
                                                } else{
                                                    sum=0;
                                                    break;
                                                }
                                            }
                                            return sum/this.length;
                                        }    
                                        return sum;
                                    },
                                    writable:false,
                                    configurable:false,
                                    enumerable:true
                                }       

    });
})();