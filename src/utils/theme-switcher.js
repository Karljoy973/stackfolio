document.addEventListener('DOMContentLoaded', () => {
    // Charger le thème sauvegardé ou utiliser le thème par défaut
    const savedTheme = localStorage.getItem('theme') || 'solar';
    setTheme(savedTheme);

    // Ajouter les écouteurs d'événements pour chaque pastille
    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.addEventListener('click', setCurrentTheme);
        dot.addEventListener('touchstart', setCurrentTheme);
        dot.addEventListener('pointerdown', setCurrentTheme);
    });
});

function setTheme(themeName) {
    // Supprimer l'ancien lien de thème s'il existe
    const existingTheme = document.querySelector('link[data-theme]');
    if (existingTheme) {
        existingTheme.remove();
    }

    // Créer et ajouter le nouveau lien de thème
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/src/themes/${themeName}.css`;
    link.dataset.theme = themeName;
    document.head.appendChild(link);

    // Sauvegarder le thème choisi
    localStorage.setItem('theme', themeName);

    // Mettre à jour l'interface utilisateur
    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.classList.toggle('active', dot.dataset.theme === themeName);
    });
}

function setCurrentTheme(e) {

    const theme = e.currentTarget.dataset.theme;
    setTheme(theme);
}