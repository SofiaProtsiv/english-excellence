const switchElement = document.querySelector('.theme-switch');

switchElement.addEventListener("click", themeSwitch)

export function themeSwitch() {
  if (switchElement.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

export function setThemeOnLoad() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    switchElement.checked = true;
    document.body.classList.add(currentTheme);
  }
}

setThemeOnLoad()