function show_dropdown() {
    const menu_Bar = document.getElementById('sec');
    menu_Bar.classList.toggle('active');
    const nav_Menu = document.getElementById('navigation');
    nav_Menu.classList.toggle('active');


    const dropdown = document.getElementById('dropdown_content');
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

function charLimit(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);}
}

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let body = "Hey Chris-Emio, %0D%0A%0D%0A" + message + "%0D%0A%0D%0AFrom: "+ name + "%0D%0A%0D%0AEmail: " + email + "%0D%0A%0D%0APhone: " + phone;
    let href = "mailto:chrisr98@bu.edu?subject="+subject+"&body="+body;
    window.open(href);
    window.location.href = "SentMail.html";
}
