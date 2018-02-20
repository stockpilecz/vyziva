var btnOmne = document.getElementById('btnOmne');
var navbar = document.getElementById('navbar');
var logo = document.getElementById('logo');
var span = document.getElementsByClassName('span');

function fadeEffect() {

    // .className meni class pro dany element v DOM
    btnOmne.className = "animated flipOutX";
    logo.className = "animated flipOutX";

    // setTimeout fce udela funkci az za specifikovanou dobu v milisekundach
    // display: none uklidi logo a button, aby tam nedelali bordel
    setTimeout(function() {
      logo.style.display = "none";
      btnOmne.style.display = "none";
    }, 550);

    // stejne tady, ale s tim, ze navbar se zobrazi az za 1,1s
    setTimeout(function() {
      navbar.style.display = "block";
      navbar.className = "animated bounceInDown";
    }, 1100);

}
