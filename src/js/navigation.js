if (window.location.pathname === '/') {
  document.querySelectorAll('.link').forEach(link => {
    const anchor = link.href.split('#')[1];
    link.setAttribute('href', `#${anchor}`);
  });
}

if (window.location.pathname === '/team.html') {
  document.querySelectorAll('.link').forEach(link => {
    const anchor = link.href.split('#')[1];
    link.setAttribute('href', `index.html#${anchor}`);
  });
}
