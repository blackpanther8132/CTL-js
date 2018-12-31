var person={
    name: "Raju"
};
var study=function(year,branch)
{
this.year=year;
this.branch=branch;
console.log(this.name+""+year+""+branch);
}
var b=study.bind(person)
b("e4","cse");
