var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var ourRequest = new XMLDocument();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload() = function()
    {
    var ourdata=JSON.parse(ourRequest.resposnseText);
    console.log(ourdata[0]);
    };
    ourRequest.send();
});
