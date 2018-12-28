details();
function details(){
person.prototype.getname = function(){
    return this.name.toUpperCase();
}

var pr=new person("Raju");
var pr1=new person("rrrr"); 
console.log(pr.name);
console.log(pr1.name);
}
function person(name){
    this.name=name;
}
person.prototype.getname = function()
{
    return this.name;
    }