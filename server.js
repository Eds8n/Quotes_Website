require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// On sert les fichiers qui sont dans le dossier /public
app.use(express.static(path.join(__dirname, 'public')));

// Route pour l'API des citations
app.get("/api/quote", async (req, res) => {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: { "X-Api-Key": process.env.API_KEY }
        });
        const data = await response.json();
        res.json(data[0]);
    } catch (error) {
        console.error("Erreur API:", error);
        res.status(500).json({ error: "Erreur lors de la récupération de la citation" });
    }
});

// Route par défaut (si on tape n'importe quoi, ça renvoie l'index)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});