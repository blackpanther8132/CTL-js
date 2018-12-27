var str1="kings man secret agents MAN";
var regexp=/MAN/ig;
var result=regexp.exec(str1);
console.log(result);
console.log(result.index);
console.log(result[0]);
