document.querySelector("#search-icon").addEventListener("click", function () {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("search");
    nav.classList.toggle("no-search");
    document.querySelector(".search-input").classList.toggle("search-active");
  });
  
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("mobile-nav");
    this.classList.toggle("is-active");
  });
  