var Person = function () {
   this.name="raju";
    this.age=22;
  };
  

  var person1 = new Person();
 
  console.log(person1.name);


var pers =function()
  {
      this.name="raju";
  };
  pers.prototype.age = function()
  {
    console.log(this.name+"");
  };
 var p=new pers();
  p.age();