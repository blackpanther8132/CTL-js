function person(name,age){
    this.name=name;
    this.age=age;
   this.det=function()
    {
        console.log(this.name+""+this.age);
    }
}
var r=new person("raju",21)
var m=new person("mahges",20)
r.det();
m.det();