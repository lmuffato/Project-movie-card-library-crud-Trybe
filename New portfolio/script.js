window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").id ='header-down';
    document.querySelector(".dropdown-content").id = 'dropdown-content-down';
  } else {
    document.querySelector("header").id = '';
    document.querySelector(".dropdown-content").id = '';
  }
}