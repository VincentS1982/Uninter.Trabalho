document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const main = document.getElementById("main-content");

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const menuItems = [
        { href: 'index.html', text: 'Início' },
        { href: 'sobre.html', text: 'Sobre' },
        { href: 'formacao.html', text: 'Formação' },
        { href: 'portfolio.html', text: 'Portfólio' },
        { href: 'contato.js', text: 'Contato' }
    ];

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

    if (window.location.pathname === '/contato.js') {
        const h1 = document.createElement("h1");
        h1.textContent = "Meus Contatos";
        main.appendChild(h1);

        const telefonePara = document.createElement("p");
        telefonePara.innerHTML = '<strong>Telefone:</strong> <a href="tel:+5541999998788">(41) 99999-8788</a>';
        main.appendChild(telefonePara);

        const emailPara = document.createElement("p");
        emailPara.innerHTML = '<strong>E-mail:</strong> <a href="mailto:thiagosilva1978@gmail.com">thiagosilva1978@gmail.com</a>';
        main.appendChild(emailPara);
    } 

    body.appendChild(main);
});



