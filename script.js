function downloadFile() {
    window.location.href = './damso_damso-on-n-est-jamais-mieux-compris-que-par-soi-meme.mp3';
}




document.getElementById('menu-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});
