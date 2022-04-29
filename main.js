// get elemant into varible

let btnEle = document.getElementById("btn");
let inputEle = document.getElementById("input");

// event
btnEle.addEventListener("click" , toggelPassword);

// function
function toggelPassword(){
    if(btnEle.getAttribute("data-text") == ("show")){

//      - Convert input Password to Text.
//      - Convert Show text to hide .

        inputEle.setAttribute("type" , "text");
        this.setAttribute("data-text" , "hide");
        this.innerText = ("Hide");

    }else{

//        - Convert input Text to Password.
//        - Convert hide to show 

        inputEle.setAttribute("type" , "password");
        this.setAttribute("data-text" , "show");
        this.innerText = ("Show");
    }
}