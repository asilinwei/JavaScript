var JSONParse=(function(){
    var ch;
    var at;
    var text;
    var result;
    var parseValue=function(){
        switch(true){
            case ch==='{':
                 return object();
            case ch==='[':
                 return array();
            case /[0-9]/.test(ch):
                 return number();
            case ch==='\"'||'\'':
                 return string();
            case ch==='t'||'f':
                 return boolean();
            default:
                 throw new Error();                          
        }
    };
    var next=function(c){
        if(c&&c!==ch){
            throw new Error();
        }
        ch=text.charAt(at);
        at+=1;
        return ch;
    };
    var object=function(){
        var key;
        var obj={};
        next();
        while(ch){
            key='';
            next('\"');   // ch==='\"'
            while(ch!=='\"'){
                key+=ch;
                next();
            }
            next('\"');
            next(':');
            obj[key]=parseValue();
            if(ch==='}'){
                next('}');
                return obj;
            }
            next(',');
        }
    };
    var array=function(){};
    var number=function(){
        var value='';
        var num;
        while(/[1-9]/.test(ch)){
            value+=ch;
            next();
        }
        num= +value;  // ch==='}'||','
        return num;
    };
    var string=function(){};
    var boolean=function(){};
    return function(sourse){
        at=0;
        text=sourse;
        next();
        result=parseValue();
        return result;
    };
})();