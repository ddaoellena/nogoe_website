function appendWork(){
  $("#header-content").load("./assets/html/work.html");
}

function appendAbout(){
  $("#header-content").load("./assets/html/about.html");
}

function appendProject(el){
  var projectTitle = document.querySelector("#project-title"),
      projectSubtitle = document.querySelector("#project-subtitle"),
      projectDesc = document.querySelector("#project-desc");
  projectTitle.innerHTML = window[el.dataset.id].title;
  projectSubtitle.innerHTML = window[el.dataset.id].subTitle;
  projectDesc.innerHTML = window[el.dataset.id].description
}
