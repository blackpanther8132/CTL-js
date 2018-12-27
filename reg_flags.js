var str = "git hub labs git";

if( str.match(/HUB/i) ) //i flags
{
    console.log("found");
   var git=(str.match(/git/g)); // it will store in array
   git.push("git3");// pushing git3 into array
    console.log(git);//
    var str1=git.toString(); // converting array to string'
    console.log(str1);
}
else
{
    console.log('not found');
}



