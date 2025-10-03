// ...existing code...
// Scroll suave apenas para âncoras internas do menu
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus();
    }
  });
});

// Destaque animado no menu conforme a seção visível
const navLinks = document.querySelectorAll('nav a');
const sections = Array.from(document.querySelectorAll('main section'));

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Mensagem de boas-vindas acessível
function showWelcome() {
  const welcome = document.createElement('div');
  welcome.textContent = 'Bem-vindo(a) ao meu portfólio!';
  welcome.setAttribute('role', 'status');
  welcome.style.position = 'fixed';
  welcome.style.top = '24px';
  welcome.style.left = '50%';
  welcome.style.transform = 'translateX(-50%)';
  welcome.style.background = '#3a7bd5';
  welcome.style.color = '#fff';
  welcome.style.padding = '12px 32px';
  welcome.style.borderRadius = '8px';
  welcome.style.fontSize = '1.2rem';
  welcome.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
  welcome.style.zIndex = '1000';
  welcome.style.opacity = '0';
  welcome.style.transition = 'opacity 0.6s';
  document.body.appendChild(welcome);
  setTimeout(() => { welcome.style.opacity = '1'; }, 100);
  setTimeout(() => {
    welcome.style.opacity = '0';
    setTimeout(() => document.body.removeChild(welcome), 600);
  }, 2500);
}

// Atualiza o ano do rodapé automaticamente
function updateFooterYear() {
  const footer = document.querySelector('footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} <strong>Márcio Alexandre de Paiva Gil</strong> | Feito com dedicação! ✨`;
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  showWelcome();
  updateFooterYear();
});