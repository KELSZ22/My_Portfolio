

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