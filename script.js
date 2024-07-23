




document.getElementById('menu-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});

document.getElementById('upload-input').addEventListener('change', function(event) {
    var fileName = event.target.files[0].name;
    document.getElementById('title').innerText = fileName;

    // Show the modal
    var modal = document.getElementById('languageModal');
    modal.style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    var modal = document.getElementById('languageModal');
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('languageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function downloadFile() {
    window.location.href = './damso_damso-on-n-est-jamais-mieux-compris-que-par-soi-meme.mp3';
}




function sidebar0() {
    document.getElementById("nav-bar1").style.display = 'none'
}