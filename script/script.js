 const projectCss = document.getElementById("projectCss");
 const projectFlex = document.getElementById("projectFlex");
 const projectGrid = document.querySelector("#projectGrid");
 const projectSomeSite = document.getElementById("projectSomeSite");
 const projectBootstrap = document.getElementById("projectBootstrap");
 const projectAdaptive = document.getElementById("projectAdaptive");
 const projectFetch = document.getElementById("projectFetch");



 function openProject (url) {
    window.location.href = `${url}`
 }

 projectCss.addEventListener('click', () => openProject("https://asdrty.github.io/cursor-HW/HW_3/"));
 projectFlex.addEventListener('click', () => openProject("https://asdrty.github.io/cursor-HW/HW_6/#"));
 projectGrid.addEventListener('click', () => openProject("https://asdrty.github.io/cursor-HW/HW_7/"));
 projectSomeSite.addEventListener('click', () => openProject("https://asdrty.github.io/cursor-HW/HW_9/#"));
 projectBootstrap.addEventListener('click', () => openProject("https://asdrty.github.io/cursor-HW/HW_11/#"));
 projectAdaptive.addEventListener('click', () => openProject("https://asdrty.github.io/cursor-HW/HW_12/#"));
 projectFetch.addEventListener('click', () => openProject("https://asdrty.github.io/cursor-HW/HW_14A/#"));
 
 