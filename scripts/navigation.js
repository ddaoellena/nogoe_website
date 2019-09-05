var headerWrapper = document.querySelector("#header-wrapper");
var headerContent = document.querySelector("#header-content");
var activeProject = "";

function toggleWork(){
  if (headerWrapper.classList.contains("expanded") == true) {
    headerWrapper.classList.remove("expanded");
    document.querySelector("#work-content").classList.add("hidden");
    headerContent.innerHTML = "";
  } else if (headerWrapper.classList.contains("full-expanded") == true) {
    headerWrapper.classList.remove("full-expanded");
    headerWrapper.classList.add("expanded");
    appendWork();
    setTimeout(setCurrentActiveProject, 100);
  } else {
    headerWrapper.classList.add("expanded");
    appendWork();
    setTimeout(setCurrentActiveProject, 100);
  }
}

function setCurrentActiveProject(){
  if (activeProject.length > 0) {
    var currentProjectText = document.querySelector("#text-"+activeProject);
    console.log(currentProjectText);
    currentProjectText.classList.add("active");
  }
}

function toggleAbout(){
  if (headerWrapper.classList.contains("full-expanded") == true) {
    headerWrapper.classList.remove("full-expanded");
    headerContent.innerHTML = "";
  } else if (headerWrapper.classList.contains("expanded") == true) {
    headerWrapper.classList.remove("expanded");
    headerWrapper.classList.add("full-expanded");
    appendAbout();
  } else {
    headerWrapper.classList.add("full-expanded");
    appendAbout();
  }
}

function openProject(el){
  headerWrapper.classList.remove("expanded");
  document.querySelector("#work-content").classList.add("hidden");
  activeProject = window[el.dataset.id].toString;
  setActiveProject(el);
  appendProject(el);
}

function setActiveProject(el){
  var workTexts = document.getElementsByClassName("work-text");
  for (var i = 0; i < workTexts.length; i++) {
    workTexts[i].classList.remove("active");
  }
  el.classList.add("active");
}
