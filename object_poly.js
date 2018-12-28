/* var books = function(bname){
    this.name="bname";

}
books.prototype.details = function()
{
    return " " +this.name;
}
var action = function(bname){
    this.name=bname;
}
action.prototype=new books();
action.prototype.details= function()
{
    return "300 warriors";
}
var romantic = function(bname){
    this.name=bname;
}
romantic.prototype=new books();
romantic.prototype.details =function()
{
    return "titanic";
}
var harror = function(bname)
{
    this.name=bname;
    
}
harror.prototype = new books();

var ac = new action("300 warriors");
var rom = new romantic("titanic");

var hr = new harror();
var bk = new books("worls is very big");
console.log(ac.name);
console.log(rom.name);
console.log(hr.name);
console.log(bk.name);

*/

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

