document.getElementById('btn-dark').addEventListener('click', 
    function () {
       document.getElementById('mode').classList.toggle('dark');
       document.getElementById('icon-mode').classList.toggle('fa-sun');
       document.getElementById('icon-mode').classList.toggle('fa-moon');
    }
);

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scrollpage', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
