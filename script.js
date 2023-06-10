
document.onload = ScrollHeight();


window.addEventListener('resize', function (event) {
  ScrollHeight();
});


function ScrollHeight() {
  var content = document.querySelector('#parchment');
  var container = document.querySelector('#contain');
  content.style.height = container.offsetHeight + 'px';
}
var btnAssinar = document.getElementById('btnAssinar');
var areaAssinatura = document.getElementById('areaAssinatura');

btnAssinar.addEventListener('click', function() {
  var nomeAssinatura = document.getElementById('nomeAssinatura').value;
  areaAssinatura.textContent = nomeAssinatura;
  areaAssinatura.classList.add('assinado');
});