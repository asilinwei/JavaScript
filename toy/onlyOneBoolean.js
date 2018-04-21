/*
 * onlyOneBoolean.js
   @LinWei
   2018-04-21

   This is a file that contains only an object that contains two methods.
   One method is to judge whether or not the arguments contain only one truthy value and
   the other one judge whether or not the arguments contain only one falsy value. 

   For example:

   console.log(onlyOneBoolean.onlyOneTruthyValue(1,0,0)); // => true
   console.log(onlyOneBoolean.onlyOneTruthyValue(1,1,0)); // => false

   console.log(onlyOneBoolean.onlyOneFalsyValue(0,1,1));  // => true
   console.log(onlyOneBoolean.onlyOneFalsyValue(0,0,1));  // => false
*/

var onlyOneBoolean=(function(){
	"use strict";

	return {

		onlyOneTruthyValue:function(a,b,c){
			return !!((a&&!b&&!c)||(!a&&b&&!c)||(!a&&!b&&c));
		},

        onlyOneFalsyValue:function(a,b,c){
        	return !!((!a&&b&&c)||(a&&!b&&c)||(a&&b&&!c));
        }

	};
})();