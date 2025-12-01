// MENU MOBILE / NAVBAR
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const form     = document.querySelector('.contatos-form');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
};

// FECHAR MENU AO CLICAR EM QUALQUER LINK
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('ativo');
        menuIcon.classList.remove('bx-x');
    });
});

// ANIMAÇÃO DO MENU / TROCA DE CLASSE ATIVA NO SCROLL
window.onscroll = () => {
    sections.forEach(sec => {
        let top    = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id     = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('ativo');
            });

            const currentLink = document.querySelector(
                'header nav a[href*="' + id + '"]'
            );

            if (currentLink) {
                currentLink.classList.add('ativo');
            }
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};


// SCROLLREVEAL
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal('.inicio-img, .skills-container, .projetos-box, .contatos-form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});


// TYPED.JS
const typed = new Typed('.multiplo-texto', {
    strings: [
        'Analista de Implantação',
        'Analista de Suporte',
        'Programadora',
        'Analista de Dados'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// FORMULÁRIO → WHATSAPP (SEM RECARREGAR A PÁGINA)
function enviarWhats(event) {
    event.preventDefault(); // impede recarregar a página

    const nome     = document.getElementById('nome').value.trim();
    const email    = document.getElementById('email').value.trim();
    const numero   = document.getElementById('numero').value.trim();
    const assunto  = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const telefone = '5547991065913';

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha nome, e-mail e mensagem antes de enviar.');
        return;
    }

    const texto =
`Olá! Meu nome é ${nome}.

Estou entrando em contato para falar sobre: *${assunto || "Assunto não informado"}*.

📩 Mensagem:
${mensagem}

Meus dados para retorno:
- Email: ${email}
- Telefone: ${numero || "Não informado"}`;

    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');
}

// conecta o submit do formulário à função enviarWhats
if (form) {
    form.addEventListener('submit', enviarWhats);
}
