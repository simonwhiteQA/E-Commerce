let contactUsBtn = document.getElementById("contactUsBtn");
contactUsBtn.addEventListener("click", contactUs);

function contactUs() {
    let contactUsDisplay = document.getElementById("contactUsDisplay");
    contactUsDisplay.setAttribute("style", "display: block");

    let aboutUsDisplay = document.getElementById("aboutUsDisplay");
    aboutUsDisplay.setAttribute("style", "display: none");

    let blogDispay = document.getElementById("blogDisplay");
    blogDispay.setAttribute("style", "display: none");
}