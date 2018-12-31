
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