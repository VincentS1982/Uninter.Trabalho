const telefoneLink = document.querySelector('a[href^="tel"]');
const emailLink = document.querySelector('a[href^="mailto"]');

telefoneLink.addEventListener('click', () => {
    alert("Você clicou no número de telefone!");
});

emailLink.addEventListener('click', () => {
    alert("Você clicou no e-mail!");
});

