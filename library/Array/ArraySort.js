/**
 * 这是一个关于数组排序的函数库。
 * 你能通过<script>标签引用这个文件。
 * 你必须在使用它之前先引用它。
 * 仅供个人学习。
 */


// 共享函数对象。

 var sharingFunction={};


// 所有方法都不能被更改。

// 共享函数对象上的方法

Object.defineProperties(sharingFunction,{

    // 两数交换。

    exchangeNumber:{
        value:function(index1,index2){
            var temp;
            temp=this[index1];
            this[index1]=this[index2];
            this[index2]=temp;
        },

        // 不能被更改。

        writable:false,

        // 不能配置。

        configurable:false,

        // 可以枚举

        enumerable:true
    }
    
});

// Array.prototype上的方法。

Object.defineProperties(Array.prototype,{

    // 冒泡排序。数组元素从小到大排序。

    bubbleSort:{
        value:function(){
            for(var i=0,len1=this.length;i<len1;i+=1){
                for(var j=0,len2=this.length-1-i;j<len2;j+=1){
                    if(this[j]>this[j+1]){
                        sharingFunction.exchangeNumber.apply(this,[j,j+1]);
                    }
                }
            }
        },

        // 无法更改。 

        writable:false,

        // 无法配置。

        configurable:false,

        // 可以枚举。

        enumerable:true
    },

    // 选择排序。数组元素从小到大排序。

    selectionSort:{
        value:function(){
            var indexMin;                                     // 当前最小元素的索引。
            for(var i=0,len1=this.length-1;i<len1;i+=1){
                indexMin=i;
                for(var j=i,len2=this.length;j<len2;j+=1){
                    if(this[indexMin]>this[j]){
                        indexMin=j;
                    }
                }
                if(i!==indexMin){
                    sharingFunction.exchangeNumber.apply(this,[i,indexMin]);
                }
            }
        },

        // 无法更改。

        writable:false,

        // 无法配置。

        configurable:false,

        // 可以枚举。

        enumerable:true
    },

    // 插入排序。数组元素从小到大排序。

    insertionSort:{
        value:function(){
            var temp,
                i,
                j;
            for(i=1;i<this.length;i+=1){
                j=i;
                temp=this[i];              
                while(j>0&&this[j-1]>temp){
                    this[j]=this[j-1];
                    j--;
                }
                this[j]=temp;              
            }    
        },

        // 无法更改。

        writable:false,

        // 无法配置。

        configurable:false,

       // 可以枚举。
       
        enumerable:true

    }

});