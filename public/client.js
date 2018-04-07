var navbar = document.getElementById('navbar');
var logoSmall = document.getElementById('logoSmall');
var main = document.getElementById('main');
var checkboxMenu = document.getElementById('checkboxMenu');

// function fadeEffect() {
//
//   // .className meni class pro dany element v DOM
//   btnOmne.className = "animated fadeOut";
//   logoBig.className = "animated fadeOut";
//
//   // setTimeout fce udela funkci az za specifikovanou dobu v milisekundach
//   // display: none uklidi logo a button, aby tam nedelali bordel
//   setTimeout(function() {
//     logoBig.style.display = "none";
//     btnOmne.style.display = "none";
//   }, 800);
//
//   // stejne tady, ale s tim, ze navbar a small Logo se zobrazi az za 1,1s
//   setTimeout(function() {
//     navbar.style.display = "block";
//     navbar.className = "animated bounceInDown";
//     logoSmall.style.display = "block";
//     logoSmall.className = "animated bounceInDown";
//
//   }, 1100);
// }


//funcke na presmerovani po kliknuti na male logo na stranku o omne
function goHome() {
  location.href = "omne.html";
}

//tohle je, kdyz je pri nacteni dana sirka < 930
if(window.innerWidth < 930) {
    window.addEventListener('scroll', scrollAndHide, false);
}
//tahle funkce udela
function scrollAndHide() {
  navbar.style.animationDuration = "0.3s";

  if(window.oldScroll > (window.scrollY || window.pageYOffset)) {
    navbar.className = "animated fadeIn";
  } else {
    navbar.className = "animated fadeOut";
  }
  window.oldScroll = ( window.scrollY || window.pageYOffset);
}

window.addEventListener('resize', mediaWidth, false);

function mediaWidth() {
      var width = window.innerWidth;
      if (width < 930) {
        window.addEventListener('scroll', scrollAndHide, false);
      } else {
        window.removeEventListener('scroll', scrollAndHide, false);
      }
}
