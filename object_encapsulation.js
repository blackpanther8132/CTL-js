/* var person=function()
{
    this.name="mahes";
    this.age="18";
}
var p = new person();
console.log(p.name);
console.log(p.age);
(function person()
{
    this.name="Raju";
    this.age="21";
    console.log(name);
})();

*/

(function raju()
{var person = {
    name:"Raju"
};
function study(branch) {
    
    this.branch=branch;

console.log(this.name,branch);

};
study.call(person,"cse");
})();
(function raju()
{var person = {
    name:"Raju"
};
function study(year,branch) {
    this.year=year;
    this.branch=branch;

console.log(this.name,year,branch);

};
var arr=["4th","cse"];
study.apply(person,arr);
})();