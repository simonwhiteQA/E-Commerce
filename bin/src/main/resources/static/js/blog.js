let blogBtn = document.getElementById("blogBtn");
blogBtn.addEventListener("click", blog);

function blog() {
    let blogDispay = document.getElementById("blogDisplay");
    blogDispay.setAttribute("style", "display: block");

    let contactUsDisplay = document.getElementById("contactUsDisplay");
    contactUsDisplay.setAttribute("style", "display: none");

    let aboutUsDisplay = document.getElementById("aboutUsDisplay");
    aboutUsDisplay.setAttribute("style", "display: none");
}