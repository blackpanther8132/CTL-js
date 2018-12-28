function Person(name,age){
    this.pname=name;
    this.page=age;
    this.details= function()
    {
    return this.pname + " " + this.page;
      
    }
}
var prson = new Person("raju","22");
console.log(prson.details());