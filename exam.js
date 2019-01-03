"use strict"
class humans{
    constructor(name,gender)
    {
        this.name=name;
        this.gender=gender;
        console.log(name+" "+gender);
    }
}
class animals extends humans{
    details(){
    console.log(this.name);
}
}
var ah=new animals("raju","male");
ah.details();