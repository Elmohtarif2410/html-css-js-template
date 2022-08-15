/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$ functionality to click buttons $$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// navigtion toggler button 
const togglerButtonNav = document.querySelector("nav .toggler");

togglerButtonNav.onclick = () => {
    // toggle class active => show and hide menu
    togglerButtonNav.classList.toggle("active")
}