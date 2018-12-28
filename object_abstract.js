var animal = function(name)
{
    this.name=name;
    throw new Error("cant creat instance for it")
}
animal.prototype.details = function()
{
    return "this is" +this.name;
}
var tiger = function(type){
    this.type=type;

}
tiger.prototype = new animal("rabbit");
var tg=new tiger("good");
console.log(tg.name);
