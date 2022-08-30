/*
    Template: Html - css - javascript
    made by : Ahmed Elmohtarif
    website : https://muhtarif.me
    deat finsh : 30 / 8 / 2022 
*/

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

let randomBackgroundPlay = true;

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

/*********** pass section page option ***********/

// set Varible
const settingPassSection = document.querySelectorAll(".setting .pass-option span"); // All spans option
const passPagesContainer = document.querySelector(".pass-pages");

// looping to setting pass sections span
settingPassSection.forEach(
    (pass) => {
        // whene click span option
        pass.addEventListener("click", (event) => {

            // add class active to span clicked
            addCalssActive(settingPassSection);

            // whene clicked to yes option
            if (pass.dataset.action === "yes") {
                // show passPagesContainer
                passPagesContainer.style.display = "block";
                // safe option to local storge
                localStorage.setItem("passSectionOption", "yes");
            }

            // whene clicked to yes option
            if (pass.dataset.action === "no") {
                // hide passPagesContainer
                passPagesContainer.style.display = "none";
                // safe option to local storge
                localStorage.setItem("passSectionOption", "no")
            }
        })
    }
)

/*********** pass section page option local sorage ***********/
// set varible => local storge
let savePassSectionSrorge = localStorage.getItem("passSectionOption");

if (savePassSectionSrorge !== null) {

    // remove class active from all spans & add this class to span clicked
    settingPassSection.forEach(
        (span) => {
            // remove class active
            span.classList.remove("active");

            if (span.dataset.action === savePassSectionSrorge) {
                // add class active to option selected
                span.classList.add("active");
            }
        }    
    );
    
    // whene safe sorge yes option 
    if (savePassSectionSrorge === "yes") {
        // show pass sections page
        passPagesContainer.style.display = "block";
    }

    // whene safe sorge no option 
    if (savePassSectionSrorge === "no") {
        // hide pass sections page
        passPagesContainer.style.display = "none";
    }
}

/************* Functions option settings *****************/

// function remove class active to all elements add class active to element clicked
function addCalssActive(elments) {
    //remove class active from all elemnts
    elments.forEach((ele) => {
        ele.classList.remove("active");
    });

    // add class list in element clicked
    event.target.classList.add("active")
}

/************* Functions Reset option settings ***************/
const resetOptionsButton = document.querySelector(".setting .rest-option");

// when clicked to reset Options Button
resetOptionsButton.onclick = () => {

    let alert = window.confirm("do you sure rest options");

    if (alert === true) {
         // clean local storge => remove setting option 
        localStorage.clear()

        // reload to page becose rest this setting
        window.location.reload();
    }
}


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$ functionality pass page section $$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

/******************** pass page section  *********************/
const passPageBultes = document.querySelectorAll(".pass-pages .pass");

// looping on bultes pass page section
passPageBultes.forEach(
    (bulte) => {
        // when bulute clicked send to section
        bulte.addEventListener("click", () => {
            // open(`#${bulte.dataset.pass}`, "_self");
            // send to section  > id = data-pass
            document.getElementById(bulte.dataset.pass).scrollIntoView({behavior: "smooth"})
        })
    }
)

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$ functionality to scroll to top $$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// scroll To Top Button
const scrollToTopButton = document.querySelector(".scroll-top");

// Function Check scrolling page 
const checkScrollingPage = () => {

    // window Scroll Vertical
    const windowScrollVertical = window.scrollY;

    // when window Scroll Vertical letter than 700
    if (windowScrollVertical >= 700) {

        // show scroll To Top Button
        scrollToTopButton.style.display = "block"

    } else {

        // hide scroll To Top Button
        scrollToTopButton.style.display = "none"
    }
}

// when scrolling window check (show  / hide) => scroll To Top Button
window.addEventListener("scroll", checkScrollingPage );

// when window load checker (show  / hide) => scroll To Top Button
window.addEventListener("load", checkScrollingPage );

// button scroll To Top Button action
scrollToTopButton.addEventListener("click", (e) => {

    // send top page
    window.scrollTo(0, 0)
});

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$ functionality to navgation $$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

/******************** navgation pass links  *********************/
const navLinksPass = document.querySelectorAll(".landding .links a");

// looping on link pass page section
navLinksPass.forEach(
    (link) => {
        // when link clicked send to section
        link.addEventListener("click", (e) => {
            // do not run action link
            e.preventDefault();
            // send to section  > id = data-pass
            document.getElementById(link.dataset.pass).scrollIntoView({behavior: "smooth"});
            // add class active to link clicked
            addCalssActive(navLinksPass);
        })
    }
)

/************** functionality to click button nav **************/

// navigtion toggler button 
const togglerButtonNav = document.querySelector("nav .toggler");

togglerButtonNav.onclick = (e) => {
    // strop propagation becuse click not closed
    e.stopPropagation()
    // toggle class active => show and hide menu
    togglerButtonNav.classList.toggle("active")
}

// close menu links when click body and link clicked 

const menuLinks = document.querySelector("nav .links");
const LinksNavgation = document.querySelectorAll("nav .links a");

// stop propagation to menu ul links
menuLinks.addEventListener("click", (e) => e.stopPropagation())

// when clicked to body not nav button and menu links
document.addEventListener("click", (e) => {

    if (e.target !== togglerButtonNav && e.target !== menuLinks) {

        // closed menu
        togglerButtonNav.classList.remove("active")

    }
});

LinksNavgation.forEach( (link) => {

    link.onclick = _ => togglerButtonNav.classList.remove("active"); // closed menu
})

window.addEventListener("scroll", _ => togglerButtonNav.classList.remove("active")); // closed menu

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

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$ functionality to Gallery popup $$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// set varible
const galleryImages = document.querySelectorAll(".gallery .image");

galleryImages.forEach((img) => {
    // image gallery on click
    img.addEventListener("click", () => {
        // image clicked src
        imageSrc = img.firstElementChild.src;
        // image clicked dataset title
        imageTitle = img.firstElementChild.dataset.title;
        // create popup function
        createPopupGallery(imageSrc, imageTitle);
        // body overflow => hidden
        document.body.style.overflow = "hidden";
    })
});

// Close popup gallery
document.addEventListener("click", (e) => {
    // set varible
    const closePopupSpan = document.querySelector(".popup-close"); // close popup span
    const popupGallery = document.querySelector(".popup-overlay");
    const popupOverlay = document.querySelector(".popup-gallery");

    // In the event that the target is close Popup Span
    if (e.target === closePopupSpan) {
        // remove the popup gallery
        popupGallery.remove();
        // remove the overlay popup
        popupOverlay.remove();
        // body overflow => auto
        document.body.style.overflow = "auto";
    }
})


// Function creat popup gallery
function createPopupGallery(src, title) {
    // create popup overlay element
    let popupOverlayElement = document.createElement("div");
    // add class popup-overlay to popupOverlayElement
    popupOverlayElement.classList.add("popup-overlay");
    // append popupOverlayElement to body
    document.body.appendChild(popupOverlayElement);

    // create popup image
    let popupImageElement = document.createElement("div");
    // add class popup-overlay to popupOverlayElement
    popupImageElement.classList.add("popup-gallery");

    // create heading title popup image
    if (title !== undefined) {
        let popupImageTitle = document.createElement("h4");
        // addtion text to popupImageTitle => image clicked dataset title
        popupImageTitle.textContent = title;
        // append popupImageTitle to popupImageElement
        popupImageElement.appendChild(popupImageTitle);
    }

    // create image popup image
    let popupImageimage = document.createElement("img");
    // add src to this image by image clicked src
    popupImageimage.setAttribute("src", src);
    // add alt to this image => "our gallery"
    popupImageimage.setAttribute("alt", "Our Gallery");
    // append popupImageTitle to popupImageElement
    popupImageElement.appendChild(popupImageimage);

    // creat close popup span 
    let closePopupSpan = document.createElement("span");
    // add class popup-close
    closePopupSpan.classList.add("popup-close");
    // addtion text to closePopupSpan
    closePopupSpan.textContent = "×";
    // append closePopupSpan to popupImageElement
    popupImageElement.appendChild(closePopupSpan);

    // append popupOverlayElement to body
    document.body.appendChild(popupImageElement);
}