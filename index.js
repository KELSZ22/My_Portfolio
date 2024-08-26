const icon = document.getElementById("icon");

icon.onclick = function (){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        icon.src="images/light_mode.svg";

    }
    else{

        icon.src="images/dark_mode.svg";
    }



}

