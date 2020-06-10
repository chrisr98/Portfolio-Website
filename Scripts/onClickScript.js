function show_dropdown() {
    const menu_Bar = document.getElementById('sec');
    menu_Bar.classList.toggle('active');
    const nav_Menu = document.getElementById('navigation');
    nav_Menu.classList.toggle('active');
    const footer = document.getElementById('copyright');
    footer.classList.toggle('active');


    const dropdown = document.getElementById('dropdown_content');
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}


//<textarea placeholder="Message" onkeyup="charLimit(this, 400);" required id="message"></textarea>
function charLimit(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);}
}

function sendEmail() {
    let body = "Hey Chris-Emio, %0D%0A%0D%0A";
    let href = "mailto:chrisr98@bu.edu?subject=&body="+body;

    window.location.href = href;

}
