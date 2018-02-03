/**
 * This is the function library for adding sort public method for native array of JavaScript.
 * You can get this library through <script> tag.
 * You must introduce this file before you use it.
 * Also,this library is only for personal learning. 
 */


// The object is about sharing function.

 var sharingFunction={};


// All the methods cannot be modified.

// The method of sharingFunction.
Object.defineProperties(sharingFunction,{

    // exchange two number.
    exchangeNumber:{
        value:function(index1,index2){
            var temp;
            temp=this[index1];
            this[index1]=this[index2];
            this[index2]=temp;
        },

        // Cannot be modified. 
        writable:false,

        configurable:false,

        enumerable:true
    }
    
});

// The method of Array.prototype.
Object.defineProperties(Array.prototype,{

    // Bubble Sort.The result is from small to large.
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

        // Cannot be modified.
        writable:false,

        configurable:false,

        enumerable:true
    },

    // Selection Sort.The result is from small to large.
    selectionSort:{
        value:function(){
            var indexMin;                                     // The index of current minimum.
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

        // Cannot be modified.
        writable:false,

        configurable:false,

        enumerable:true
    },

    // Insertion Sort.The result is from small to large.
    insertionSort:{
        value:function(){
            var temp,
                i,
                j;
            for(i=1;i<this.length;i+=1){
                j=i;
                temp=this[i];               // The variable temp as the second element of the array is the initial value of the element to be compared.

                // If j>0 and the previous element is bigger than the variable temp , continue the loop. 

                while(j>0&&this[j-1]>temp){
                    this[j]=this[j-1];
                    j--;
                }
                this[j]=temp;               // Finally,the temp is the first element of the array.
            }    
        },

        // Cannot be modified.
        writable:false,

        configurable:false,

        enumerable:true
    }

});