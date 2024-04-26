let rating= 0;

document.querySelector("#btn-1").addEventListener("click", function(){
return rating=1;

});

document.querySelector("#btn-2").addEventListener("click", function(){
return rating=2;

});

document.querySelector("#btn-3").addEventListener("click", function(){
return rating=3;

});

document.querySelector("#btn-4").addEventListener("click", function(){
return rating=4;
});

document.querySelector("#btn-5").addEventListener("click", function(){
return rating=5;
});

document.querySelector("#submit").addEventListener("click", function(){
    if(rating===0){
document.getElementsByClassName(".border").classList.toggle("red");
    }
    else{
document.querySelector("#selection-msg").innerHTML = `You selected ${rating} of 5`;
document.querySelector(".box-1").classList.toggle("visible");
document.querySelector(".box-2").classList.toggle("invisible");
    }
});