function appendWork(){
  $("#header-content").load("./assets/html/work.html");
  setTimeout(function(){
    document.querySelector("#work-content").classList.add("displayed");
  }, 100);
}

function appendAbout(){
  $("#header-content").load("./assets/html/about.html");
  setTimeout(function(){
    document.querySelector("#about-content").classList.add("displayed");
  }, 100);
}

function appendProject(el){
  var projectTitle = document.querySelector("#project-title"),
      projectSubtitle = document.querySelector("#project-subtitle"),
      projectDesc = document.querySelector("#project-desc");
  projectTitle.innerHTML = window[el.dataset.id].title;
  projectSubtitle.innerHTML = window[el.dataset.id].subTitle;
  projectDesc.innerHTML = window[el.dataset.id].description
}
