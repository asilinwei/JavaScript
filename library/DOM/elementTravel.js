/**
 * This file is about the element traversal in DOM.
 * You can get this library through <script> tag.
 * You must introduce this file before you use it.
 * Also,this library is only for personal learning.
 */


// All the methods cannot be modified.

// The method of HTMLElement.prototype

Object.defineProperties(HTMLElement.prototype,{
	getElementAncestor:{
		value:function(floor){
			if(this.nodeType===1){
				if(floor>0){
					var element=this;
					while(floor>0&&element!==null){
						element=element.parentNode;
						floor--;
					}
					if(element!==null){
						return element;
					} else{
						return document;
					}
				} else if(floor===0){
					return this;
				} else if(floor<0){
					throw new Error("You cannot get the child element.");
				} else{
					throw new Error("The parameter is not a number.");
				}
			} else{
				return null;
			}
		},
		writable:false,
		configurable:false,
		enumerable:true
	}
});