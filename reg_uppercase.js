function upper(str1){
    var regexp_f = /^[A-Z]/;    //checking uppercase string starting
    if(regexp_f.test(str1))
    {
        console.log("first index is uppecase");
    }

    else{
       console.log("first index is not uppercase"); 
    }
}
upper('Cosmic');