const messageinput = document.getElementById("messageinput");

messageinput.addEventListener("keydown",function (event){
    if(event.key == "Enter"){
        getMessage();
    }
});

function getMessage(){
    document.getElementById("message-output").innerHTML += messageinput.value + "<br>";
    messageinput.value = "";
}


