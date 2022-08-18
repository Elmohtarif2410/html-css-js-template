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
        localStorage.setItem("colorOption", color);
        // add class active to button clicked
        addCalssActive(settingColorButtons)
    }
})

/*********** reset color option by local storge ***********/

let safeColorStorge = localStorage.getItem("colorOption");

if (safeColorStorge !== null) {
    // change root elment varible --main-color => color button
    document.documentElement.style.setProperty("--main-color", safeColorStorge);
    //remove class active from all buttons
    settingColorButtons.forEach((but) => {
        //remove class active from all buttons
        but.classList.remove("active");
        // Choose the item that data-color = safeColorStorge
        if (but.dataset.color === safeColorStorge) {
            // add class list in button clicked 
            but.classList.add("active");
        }
    });
}

/*********** Random background option ***********/

let randomBackgroundPlay;

// add and remove class active to spans
const settingRandomBackSpan = document.querySelectorAll(".setting .random-option span"); // All spans option

// loop in spnp option
settingRandomBackSpan.forEach((span) => {
    // when spans clicked
    span.onclick = (event) => {
        // function remove class active to all spans and add class active to span clicked 
        addCalssActive(settingRandomBackSpan)
        // turn on random background
        if (span.dataset.action === "yes") {
            // turn on random Background Play
            randomBackgroundPlay = true;
            // Function Change background image randomly every 4 seconds
            randomBackgroundImage()
            // safe in local storge option => yes
            localStorage.setItem("randomBackOption", "yes");
        }
        // turn of random background
        if (span.dataset.action === "no") {
            // turn of random Background Play
            randomBackgroundPlay = false;
            // turn of interval
            clearInterval(randomBackgroundInterval);
            // safe in local storge option => no
            localStorage.setItem("randomBackOption", "no");
        } 
    }
})

/*********** Random background option local sorage ***********/

let saveBackRandomSrorge = localStorage.getItem("randomBackOption");

if (saveBackRandomSrorge !== null) {

    // remove class active to all elements add class active to span selcted
    settingRandomBackSpan.forEach((span) => {
        //remove class active from all elemnts
        span.classList.remove("active");

        if (span.dataset.action === saveBackRandomSrorge) {
            // add class active to option selected
            span.classList.add("active");
        }
    });

    if (saveBackRandomSrorge === "yes") {
        // turn on random background image
        randomBackgroundPlay = true;

    } else if (saveBackRandomSrorge === "no") {
        // turn of random background image
        randomBackgroundPlay = false;
    }
}

/************* Functions optin settings *****************/

// function remove class active to all elements add class active to element clicked
function addCalssActive(elments) {
    //remove class active from all elemnts
    elments.forEach((but) => {
        but.classList.remove("active");
    });

    // add class list in element clicked
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

// Function change background images
function randomBackgroundImage() {
    // This condition was made in order to control the local storge
    if (randomBackgroundPlay === true) {
        // Change background image randomly every 4 seconds
        randomBackgroundInterval = setInterval(() => {
            // random Number from 0 to array images length
            let randomNumber = Math.floor(Math.random() * imagesLanddingArray.length);
        
            // style css => becouse Nice transtion  
            landdingPageSection.style.transition = "1s";
            // Change the background randomly from one of the elements of the array
            landdingPageSection.style.backgroundImage = `url(../images/landding-${imagesLanddingArray[randomNumber]}.jpg)`;
        
        }, 4000);

        // ftunction is return a interval number
        return randomBackgroundInterval;
    }
};

// call up function random Background Image
randomBackgroundImage();


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$ functionality to skills Anmainot $$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// set Varible 
const progressElements = document.querySelectorAll(".skills .progress span");
const skillsSection = document.querySelector(".skills");
const skillsSectionHeight = skillsSection.offsetHeight;
const skillsSectionPageHeight = skillsSection.offsetTop;
const windowInnerHeight = window.innerHeight;

window.onscroll = () => {
    // window scrolling Vertical
    let windowScrollingVertical = window.scrollY;
    // Equation Running Anmation => skills height ( plus ) skills away top sart page ( minus ) window height 
    let EquationRunningAnmation = (skillsSectionHeight + skillsSectionPageHeight) - windowInnerHeight

    // if window scrolling Vertical greater than or equal to ( >= ) Equation Running Anmation
    if (windowScrollingVertical >= EquationRunningAnmation) {
        // loop in progress Elements
        progressElements.forEach((prog) => {
            // turn on Animation
            prog.style.animationPlayState = "running";
        })
    }
}