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