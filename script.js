const inText = document.querySelector("#inputText");
const outText = document.querySelector("#outputText");

const moveButton = document.getElementById("moveButton");


function t (){
    
    function move(){
        outText.textContent = inText.value;
    outText.setAttribute("aria-live","assertive"); 
    }
    move()
        inText.addEventListener("change", move);
    }
    
moveButton.addEventListener("click", t);
    