// Carregar pergil des de el servidor.
async function carregarPerfil() {
  try {
    const res = await fetch('/api/profile');
    if (!res.ok) throw new Error('No s’ha pogut carregar el perfil');
    const data = await res.json();

    // Espera claus en català: nom, email, gitHub, linkedIn
    document.getElementById('nom').textContent = data.nom || '—';


// Email
    const email = document.getElementById('email');
    if (data.email) {
      email.textContent = data.email;
      email.href = `mailto:${data.email}`;
    }

    // GitHub
    const gitHub = document.getElementById('gitHub');
    if (data.gitHub) {
      gitHub.textContent = data.gitHub;
      gitHub.href = data.gitHub;
    }

    // LinkedIn
    const linkedIn = document.getElementById('linkedIn');
    if (data.linkedIn) {
      linkedIn.textContent = data.linkedIn;
      linkedIn.href = data.linkedIn;
    }
    
  } catch (err) {
    console.error(err);
  }
}

// Inicialització quan carregui la pàgina.
document.addEventListener('DOMContentLoaded', () => {
  carregarPerfil();
  setupDarkMode();
  setupNavigation();
});

//Configuració darkMode
function setupDarkMode() {
  const button = document.getElementById("toggleBtn");
  if (!button) return;

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    button.textContent =
      document.body.classList.contains("dark-mode")
        ? "☀️ Modo claro"
        : "🌙 Modo oscuro";
  });
}

//Navegació entre seccions (Personal/Baloncesto/IA)

function setupNavigation() {
  const buttons = document.querySelectorAll('.navBtn');
  const sections = document.querySelectorAll('.section');


  // Totes les seccions amagades d'inici.
  sections.forEach(sec => sec.style.display = 'none');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.section;
      const section = document.getElementById(target);
      const isVisible = section.style.display === 'block';
     
      // Desmarcar tots els botons.
      buttons.forEach(b => b.classList.remove('active'));

      if (isVisible) {
        // Si ja està oberta → tanquem
        section.style.display = 'none';
      } else{
        // Amagar totes les seccions.
        sections.forEach(sec => sec.style.display = 'none');

        // Mostrar només la secció clicada.
        document.getElementById(target).style.display = 'block';

        // Marcar botó actiu.
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
}
