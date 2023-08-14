const lightTheme = ()=>{
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('data-theme', 'light');
}

const darkTheme = ()=>{
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('data-theme', 'dark');
}

let theme = localStorage.getItem('data-theme');
if (theme == 'light') lightTheme();

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
    logo.setAttribute("src", "/assets/img/tercio_black.png");
  } else {
    logo.setAttribute("src", "/assets/img/tercio_white.png");

  }
});
