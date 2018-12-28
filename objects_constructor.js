function person()
{
    this.pname="Raju";
}
var Person = new person();
var pr=new person();
console.log(Person.pname);//Raju
console.log(pr.pname);//Raju
