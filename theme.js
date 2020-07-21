const missingClassName = "container-xl"; // container-lg for medium screens

// find page head and fix it's children
const headContainer = document.getElementById("js-repo-pjax-container");
const elements = headContainer.children[0].children;
for(let i = 0; i < elements.length; i++) {
  elements[i].classList.add(missingClassName);
}
