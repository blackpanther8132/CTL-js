"use strict"
/*function str(str1,str2){
    this.str1=str1;
    this.str2=str2;
    this.fulName = function()
    {
        console.log( this.str1+" "+this.str2);
    }
}
var s=new str("raj","mah");
s.fulName();
*/
var str=(str1,str2) => {
    this.str1=str1;
    this.str2=str2;
    this.fulName = function()
    {
        return this.str1+" "+this.str2;
    }
    var s=new str("raj","mah");
s.fulName();
console.log( this.str1+" "+this.str2);
}
