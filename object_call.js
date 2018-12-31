var person ={
name : "Raju",
age:21
};
var details=function(gender,study)
{
 console.log(this.name+" "+gender+" "+study);
};
details.call(person, "male","btech");
