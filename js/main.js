/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$ functionality setting Option $$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

/******************* gear button ************************/
// reser Varibles
const settingButton = document.querySelector(".setting .gear-icon");
const settingIcon = document.querySelector(".setting .gear-icon i");
const settingSection = document.querySelector("body > .setting");

settingButton.onclick = () => {
    // add class fa-spin in icon 
    settingIcon.classList.toggle("fa-spin");
    // opening to setting section and closed it 
    settingSection.classList.toggle("open")
}

/******************* color button ************************/
// All buttons color
const settingColorButtons = document.querySelectorAll(".setting ul.colors li");

// loop in buttons color
settingColorButtons.forEach((button) => {
    // when buttons color clicked
    button.onclick = (event) => {
        // set color hexcode by buttons attribute data-color 
        color = button.getAttribute("data-color");
        // change root elment varible --main-color => color button
        document.documentElement.style.setProperty("--main-color", color);
        // safe this color in local Storage
        localStorage.setItem("coloOption", color);
        // add class active to button clicked
        addCalssActive()
    }
})

/*********** reset color option by local storge ***********/

safeColorStorge = localStorage.getItem("coloOption");

if (safeColorStorge !== null) {
    // change root elment varible --main-color => color button
    document.documentElement.style.setProperty("--main-color", safeColorStorge);
    //remove class active from all buttons
    settingColorButtons.forEach((but) => {
        but.classList.remove("active");
    });
    // loop in buttons becuse Link to the item with the color saved in storge
    let buttonColorActiveted = Array.from(settingColorButtons).filter((element) => {
        return element.getAttribute("data-color") === safeColorStorge;
    });
    // add class list in button clicked
    buttonColorActiveted[0].classList.add("active");
}

// localStorage.clear()
// console.log(localStorage.getItem("coloOption"));

// function add class active to button clicked
function addCalssActive() {
    //remove class active from all buttons
    settingColorButtons.forEach((but) => {
        but.classList.remove("active");
    });

    // add class list in button clicked
    event.target.classList.add("active")
}


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$ functionality to click button nav $$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// navigtion toggler button 
const togglerButtonNav = document.querySelector("nav .toggler");

togglerButtonNav.onclick = () => {
    // toggle class active => show and hide menu
    togglerButtonNav.classList.toggle("active")
}

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$ functionality to background landding page $$$$$$$$$$$
$$$$$$$ Change background image randomly every 4 seconds $$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// reser Varibles
let landdingPageSection = document.querySelector(".landding");
let imagesLanddingArray = ["1", "2", "3", "4"]; // imges Number

setInterval(() => {
    // random Number from 0 to array images length
    let randomNumber = Math.floor(Math.random() * imagesLanddingArray.length);

    // style css => becouse Nice transtion  
    landdingPageSection.style.transition = "1s";
    // Change the background randomly from one of the elements of the array
    landdingPageSection.style.backgroundImage = `url(../images/landding-${imagesLanddingArray[randomNumber]}.jpg)`;

}, 4000);
