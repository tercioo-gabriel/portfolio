//Função troca de tema e logo

const darkTheme = ()=>{
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('data-theme', 'light');
}

const lightTheme = ()=>{
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('data-theme', 'dark');
}

let theme = localStorage.getItem('data-theme');
if (theme == 'light') darkTheme();

const checkboxTheme = document.getElementById('checkbox');

if (localStorage.getItem('data-theme') == 'dark'){
  checkboxTheme.checked = true;
}

checkboxTheme.addEventListener('change', () =>{
  let theme = localStorage.getItem('data-theme');
  let logo = document.getElementById('logo');

  if(checkboxTheme.checked){
    lightTheme();
  } else{
    darkTheme();
  }
  
  if (checkboxTheme.checked) {
    logo.setAttribute("src", "./src/images/tercio_white.png");
  } else {
    logo.setAttribute("src", "./src/images/tercio_black.png");

  }
});

//Desmarcar CheckBox (tema) no refresh da página

function desmarcarCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
  });
}

window.onload = desmarcarCheckboxes;

//Função de clique para exibir habilidades

const html = document.querySelector('.card1');
const css = document.querySelector('.card2');
const js = document.querySelector('.card3');
const ts = document.querySelector('.card4');
const ps = document.querySelector('.card5');
const git = document.querySelector('.card6');

const pHtml = document.querySelector('.p1');
const pCss = document.querySelector('.p2');
const pJs = document.querySelector('.p3');
const pTs = document.querySelector('.p4');
const pPs = document.querySelector('.p5');
const pGit = document.querySelector('.p6');

function mouserOverText (tec, p) {
  tec.addEventListener('mouseover', ()=>{
    p.style.opacity = 1;
  });
  tec.addEventListener('mouseout', ()=>{
    p.style.opacity = 0;
  })
};

mouserOverText(html, pHtml);
mouserOverText(css, pCss);
mouserOverText(js, pJs);
mouserOverText(ts, pTs);
mouserOverText(ps, pPs);
mouserOverText(git, pGit);

