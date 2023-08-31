console.log(window.location.pathname);

if (
  window.location.pathname.includes('/') ||
  window.location.pathname.includes('/index.html')
) {
  document.querySelectorAll('.link').forEach(link => {
    const anchor = link.href.split('#')[1];
    link.setAttribute('href', `#${anchor}`);
  });
}

if (window.location.pathname.includes('/team.html')) {
  document.querySelectorAll('.link').forEach(link => {
    const anchor = link.href.split('#')[1];
    link.setAttribute('href', `index.html#${anchor}`);
  });
}
