var btnOmne = document.getElementById('btnOmne');
var navbar = document.getElementById('navbar');
var logoBig = document.getElementById('logoBig');
var logoSmall = document.getElementById('logoSmall');
var main = document.getElementById('main');
var content = document.getElementById('content');
var checkboxMenu = document.getElementById('checkboxMenu');

function fadeEffect() {

  // .className meni class pro dany element v DOM
  btnOmne.className = "animated fadeOut";
  logoBig.className = "animated fadeOut";

  // setTimeout fce udela funkci az za specifikovanou dobu v milisekundach
  // display: none uklidi logo a button, aby tam nedelali bordel
  setTimeout(function() {
    logoBig.style.display = "none";
    btnOmne.style.display = "none";
  }, 800);

  // stejne tady, ale s tim, ze navbar a small Logo se zobrazi az za 1,1s
  setTimeout(function() {
    navbar.style.display = "block";
    navbar.className = "animated bounceInDown";
    logoSmall.style.display = "block";
    logoSmall.className = "animated bounceInDown";

  }, 1100);
}

//fuknce na zavreni menu po kliknuti na main div - kontroluje checkbox
function closeMenu() {
  if (checkboxMenu.checked === true) {
    main.addEventListener("click", unCheck, false);
  }

  function unCheck() {
    checkboxMenu.checked = false;
  }

}

//funcke na presmerovani po kliknuti na male logo na stranku o omne
function goHome() {
  location.href = "omne.html";
}
