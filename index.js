
// responsive burger menu
let menuIcon = document.getElementById('menu-icon');
let navLinks = document.querySelector('nav ul');


    menuIcon.addEventListener('click', function() 
    {
    navLinks.classList.toggle('active');

    if(navLinks.classList.contains('active')){

        menuIcon.src="images/close_icon.svg";
        let nav=true;
        console.log(nav);

    }
    else{
        menuIcon.src="images/menu_icon.svg";
           let nav=false;
        console.log(nav);

    }

});

// dark theme
let darkTheme = document.getElementById("dark-mode-icon");

darkTheme.onclick = () =>{

    document.body.classList.toggle("dark-theme")
        if(document.body.classList.contains("dark-theme")){

            darkTheme.src="images/dark_mode.svg";

        }
        else{
            darkTheme.src="images/light_mode.svg";

        }

}
