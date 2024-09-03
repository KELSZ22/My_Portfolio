var darkMode = document.getElementById("darkMode");

darkMode.onclick = function() {


    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darkMode.src="images/light_mode.svg";


        }
        else{
            darkMode.src="images/dark_mode.svg";

        }

}