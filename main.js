let toggleThemeBtn = document.getElementById('toggleThemeBtn');

toggleThemeBtn.onclick = () => {
   document.body.classList.toggle('dark');
   toggleThemeBtn.innerText = document.body.classList.contains('dark') ? 'Светлая тема' : 'Темная тема';
}