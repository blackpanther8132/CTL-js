function game(name,rank)
{
    this.name=name;
    this.rank=rank;
}
function sport(name1,cat)
{
    this.name=name1;
    this.cat=cat;
    this.game=game;// it is like importing game function into sport function

}
var mysport=new sport("cricket","wk");
mysport.game("kabaddi",1);
console.log(mysport.name);
console.log(mysport.cat);
console.log(mysport.name);


