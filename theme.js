const missingClassName = "container-lg"; // container-lx for wider screens
// find page head first div
document.getElementsByClassName("pagehead")[0].firstElementChild.classList.add(missingClassName);
document.getElementsByClassName("UnderlineNav")[0].classList.add(missingClassName);
document.getElementsByClassName('repository-content')[0].classList.add(missingClassName);
