// Script pour A Better Tesla Theater

// Enregistrer la dernière visite
document.addEventListener('DOMContentLoaded', function() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toISOString();
    
    if (lastVisit) {
        console.log('Dernière visite:', lastVisit);
    }
    
    localStorage.setItem('lastVisit', now);
    
    // Animation supplémentaire au survol
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Petit effet de feedback avant redirection
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Détection du mode plein écran (utile pour Tesla)
    document.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement) {
            console.log('Mode plein écran activé');
        } else {
            console.log('Mode plein écran désactivé');
        }
    });
});

// Fonction pour ajouter aux favoris (optionnelle)
function addToFavorites(serviceName) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!favorites.includes(serviceName)) {
        favorites.push(serviceName);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log(`${serviceName} ajouté aux favoris`);
    }
}

// Gestion du mode sombre/clair (déjà en mode sombre par défaut)
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
}

// Restaurer le thème au chargement
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}
