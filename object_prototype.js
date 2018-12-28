function person(name)
{
    this.name=name;
}
//person.age=21; it will show undefined
person.prototype.age=21//21
var pr=new person("raju");
console.log(pr.name);
console.log(pr.age);