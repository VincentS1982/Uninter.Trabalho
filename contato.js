document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const main = document.getElementById("main-content");

    const menuItems = [
        { href: 'index.html', text: 'Início' },
        { href: 'sobre.html', text: 'Sobre' },
        { href: 'formacao.html', text: 'Formação' },
        { href: 'portfolio.html', text: 'Portfólio' },
        { href: 'contato.js', text: 'Contato' }
    ];

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    
    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    body.appendChild(header);

    if (window.location.pathname.includes('contato.js')) {
        main.innerHTML = `
            <h1>Meus Contatos</h1>
            <p><strong>Telefone:</strong> <a href="tel:+5541999998788">(41) 99999-8788</a></p>
            <p><strong>E-mail:</strong> <a href="mailto:thiagosilva1978@gmail.com">thiagosilva1978@gmail.com</a></p>
        `;
    }

    body.appendChild(main);
});

