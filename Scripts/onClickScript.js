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