# 🌌 Le Monde des Citations

Une application web interactive et immersive qui génère des citations inspirantes en temps réel, accompagnée d'une ambiance sonore spatiale.

## 🚀 Fonctionnalités
- **Génération dynamique** : Récupération de citations aléatoires via l'API Ninjas.
- **Synthèse Vocale (TTS)** : Possibilité d'écouter les citations grâce à l'API Web Speech.
- **Ambiance Immersive** : Fond d'écran animé et musique d'ambiance (Hans Zimmer) intégrée.
- **Interface Adaptative** : Mode Sombre/Clair disponible pour un confort de lecture optimal.

## 🛠️ Technologies
- **Backend** : Node.js, Express
- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Sécurité** : Gestion des clés API via des variables d'environnement (`dotenv`)
- **Stockage** : Git LFS pour la gestion des fichiers multimédias volumineux

## 📂 Structure du Projet
```text
Quotes_Website/
├── server.js          # Serveur Express (Proxy API)
├── .env               # Variables secrètes (non inclus sur GitHub)
├── .gitignore         # Fichiers ignorés par Git
└── public/            # Fichiers Front-end
    ├── index.html
    ├── style.css
    ├── script.js
    └── musique/       # Fichiers audio

📦 Installation et Utilisation
Cloner le dépôt :

Bash
git clone [https://github.com/Eds8n/Quotes_Website.git](https://github.com/Eds8n/Quotes_Website.git)
cd Quotes_Website
Installer les dépendances :

Bash
npm install
Configuration :
Créez un fichier .env à la racine du projet et ajoutez votre clé API :

Extrait de code
API_KEY=votre_cle_api_ici
Lancer le serveur :

Bash
node server.js

![Quotes Website Preview](https://raw.githubusercontent.com/Eds8n/Quotes_Website/da3577b664432dd2d27a9a11d4e9e581aa798da5/Presentation-quotes-website.png)
