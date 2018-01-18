/*let toCamelCaseVar = (str)=>{
  return str.replace(/_(\w)/g,function($0,$1){
    return $1.toUpperCase();
  });
}*/

/*function stringToCamelCase(str){
  var reg=/-(\w)/g;//子项()表示子项

  return str.replace(reg,function($0,$1){//$0代表正则整体，replace（）方法中的第二个参数若是回调函数，那么这个回调函数中的参数就是匹配成功后的结果
    //若回调函数中有多个参数时，第一个参数代表整个正则匹配结果，第二个参数代表第一个子项
    alert($0);//-b
    alert($1);//b
    return $1.toUpperCase();
  });
}*/


const toCamelCaseVar = (variable) =>{
  let reg=/_+(\w)/g;
  let str=variable.replace(reg,function(){
    console.log(arguments[0],arguments[1],arguments[2]);
    if(arguments[2])return (arguments[1]).toUpperCase();
    else return arguments[0];
  });
  return str;
}
let a = toCamelCaseVar("_is_good_");
console.log(a);



