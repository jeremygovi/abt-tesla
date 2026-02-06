# 🚗 A Better Tesla Theater

Un dashboard de divertissement et navigation optimisé pour Tesla, permettant d'accéder facilement à vos services de streaming préférés, outils de navigation et jeux.

## ✨ Fonctionnalités

### 📺 Vidéo

- **YouTube** - Visionnez vos vidéos préférées
- **Plex** - Accédez à votre serveur multimédia
- **Jellyfin** - Votre serveur Freebox personnel
- **Prime Video** - Streaming Amazon
- **myTF1** - Replay TF1
- **France TV** - Télévision publique française
- **6play** - Replay M6
- **Molotov TV** - TV en direct et replay

### 🛠️ Navigation & Outils

- **ABRP** (A Better Route Planner) - Planification de trajets pour véhicules électriques
- **Google Maps** - Navigation complète
- **Waze** - Navigation communautaire
- **Chargemap** - Bornes de recharge en Europe
- **Octopus Electroverse** - Réseau de recharge universel

### 🎮 Jeux

- **2048** - Jeu de puzzle addictif
- **Krunker.io** - FPS multijoueur
- **Skribbl.io** - Jeu de dessin multijoueur

## 🚀 Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main`.

### URL d'accès

Une fois configuré, votre dashboard sera accessible à l'adresse :

```
https://jeremygovi.github.io/abt-tesla/
```

### Configuration requise

1. **Activer GitHub Pages** :
   - Allez dans `Settings` > `Pages` de votre repository
   - Dans "Build and deployment", sélectionnez :
     - Source : `GitHub Actions`
   - Le workflow se déclenchera automatiquement

2. **Premier déploiement** :

   ```bash
   git add .
   git commit -m "Initial commit: Tesla Theater Dashboard"
   git push origin main
   ```

3. **Vérifier le déploiement** :
   - Allez dans l'onglet `Actions` de votre repository
   - Vérifiez que le workflow "Deploy to GitHub Pages" s'exécute correctement

## 🎨 Personnalisation

### Modifier les services

Éditez [index.html](index.html) pour :

- Ajouter de nouveaux services
- Modifier les URLs
- Changer les icônes (emojis)

### Personnaliser le style

Éditez [styles.css](styles.css) pour :

- Modifier les couleurs
- Ajuster la mise en page
- Changer les animations

### Configuration Jellyfin

L'URL Jellyfin est actuellement configurée pour : `http://freebox-cugand.freeboxos.fr:8096/`

Pour la modifier, éditez la ligne correspondante dans [index.html](index.html).

## 🚙 Utilisation dans Tesla

1. Ouvrez le navigateur web de votre Tesla
2. Accédez à l'URL GitHub Pages
3. Ajoutez la page aux favoris pour un accès rapide
4. Profitez de votre dashboard personnalisé !

## 📱 Responsive Design

Le dashboard est optimisé pour :

- Écrans Tesla (Model S/X/3/Y)
- Tablettes
- Smartphones
- Ordinateurs

## 🔧 Technologies

- HTML5
- CSS3 (animations, grilles flexibles)
- JavaScript (vanilla)
- GitHub Actions (CI/CD)

## 📝 Notes

- Tous les liens s'ouvrent dans un nouvel onglet
- Le design utilise un thème sombre optimisé pour la nuit
- Animations fluides pour une expérience premium
- LocalStorage pour mémoriser vos préférences

## 🤝 Contribution

N'hésitez pas à personnaliser ce dashboard selon vos besoins !

## 📄 Licence

Ce projet est libre d'utilisation.

---

Made with ❤️ for Tesla
