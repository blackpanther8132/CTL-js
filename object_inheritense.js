var person= function(name)
{
this.name=name;
}
person.prototype.getname= function()
{
        return this.name;
}
person.prototype.namelength = function()
{
    return this.name.length;
}

var goodperson = function(quality)
{
    this.quality=quality;
}
var badperson = function(quality)
{
    this.quality=quality;
}

goodperson.prototype=new person("Raju");
badperson.prototype=new person("raaaa");
var gp = new goodperson("smile");
var bp= new badperson("angry");
console.log(gp.getname());
console.log(gp.namelength());
console.log(gp.quality);
console.log(bp.getname());
console.log(bp.namelength());
console.log(bp.quality);


var books = function(){

}
books.prototype.details = function()
{
    console.log("action");
}
var action = function(){
   
}
action.prototype=new books();
action.prototype.details= function()
{
    console.log("300 w");
}
var romantic = function(){
}
romantic.prototype=new books();
romantic.prototype.details =function()
{
    console.log(" titanic ");
}
var harror = function()
{
    
}
harror.prototype = new books();


console.log(action.details);

