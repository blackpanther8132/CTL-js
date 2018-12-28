function Person(name,age){
    this.pname=name;
    this.page=age;
    this.details= function()
    {
        var det=this.pname+" "+this.page;
        console.log(det);
    }
}
var Person = new Person("raju","22");