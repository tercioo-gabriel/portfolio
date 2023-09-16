//Função troca de tema e logo //

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
    logo.setAttribute('src', "./assets/images/tercio_white.png");
  } else {
    logo.setAttribute('src', "./assets/images/tercio_black.png");

  }
});

// Função digitando do Título //

function digitarTitulo(elemento){
  const arrTexto = elemento.innerHTML.split('');

  elemento.innerHTML = '';
  arrTexto.forEach((letra, i)=>{
    setTimeout(()=> elemento.innerHTML += letra, 135 * i);
  });
}

const h1Titulo = document.querySelector('.digitando');
digitarTitulo(h1Titulo);

//Função desmarcar CheckBox (tema) no refresh da página //

function desmarcarCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
  });
}

window.onload = desmarcarCheckboxes();

//Função Navbar Mobile/Responsiva //

function navbarResponsive(){
  const hamburguer = document.querySelector('.hamburguer');
  const nav = document.querySelector('.items-nav');

  hamburguer.addEventListener('click', () => {
    if (nav.style.opacity === '0') {
      nav.style.opacity = 1;
      nav.style.pointerEvents = 'all';
    } else {
      nav.style.opacity = 0;
      nav.style.pointerEvents = 'none';
    }
  });
  
}

navbarResponsive();

//Função do Media Querie Navbar //

function mudancaNaMedia() {

  const mediaQuery = window.matchMedia("(min-width: 741px)");
  const nav = document.querySelector('.items-nav');

  if (mediaQuery.matches) {
    nav.style.opacity = 1;
    nav.pointerEvents = 'all';
  } else {
    nav.style.opacity = 0;
  }
}

mudancaNaMedia();

window.addEventListener('resize', mudancaNaMedia);

// Função de Animation hamburguerNav //

const hamburguer = document.querySelector('.hamburguer');

function toggleHamburguer() {
  hamburguer.classList.toggle('active');
}

toggleHamburguer();
window.onload = toggleHamburguer(false);

window.addEventListener('resize', () => {
  hamburguer.classList.remove('active');
});

//Função de clique para exibir habilidades //

const html = document.querySelector('.card1');
const css = document.querySelector('.card2');
const js = document.querySelector('.card3');
const ts = document.querySelector('.card4');
const rct = document.querySelector('.card5');
const styled = document.querySelector('.card6');
const sql = document.querySelector('.card7');
const git = document.querySelector('.card8');

const pHtml = document.querySelector('.p1');
const pCss = document.querySelector('.p2');
const pJs = document.querySelector('.p3');
const pTs = document.querySelector('.p4');
const pRct = document.querySelector('.p5');
const pStyled = document.querySelector('.p6');
const pSql = document.querySelector('.p7');
const pGit = document.querySelector('.p8');

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
mouserOverText(rct, pRct);
mouserOverText(styled, pStyled);
mouserOverText(sql, pSql);
mouserOverText(git, pGit);
