//for in loop
var x=3;
var y=""
var person={name:"raju",age:22,gender:"male"};
for(x in person)
{
    y += person[x];
}
console.log(y);