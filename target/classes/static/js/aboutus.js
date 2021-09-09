let aboutUsBtn = document.getElementById("aboutUsBtn");
aboutUsBtn.addEventListener("click", aboutUs);



function aboutUs() {
    let aboutUsDisplay = document.getElementById("aboutUsDisplay");
    aboutUsDisplay.setAttribute("style", "display: block");

    let contactUsDisplay = document.getElementById("contactUsDisplay");
    contactUsDisplay.setAttribute("style", "display: none");

    let blogDispay = document.getElementById("blogDisplay");
    blogDispay.setAttribute("style", "display: none");
}