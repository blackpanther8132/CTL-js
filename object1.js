function game(name,rank)
{
    this.name=name;
    this.rank=rank;
}
function sport(name1,cat)
{
    this.name1=name1;
    this.cat=cat;
    this.game=game;

}
var mysport=new sport("cricket","wk");
mysport.game("kabaddi",1);
console.log(mysport.name1);
console.log(mysport.cat);
console.log(mysport.name);


