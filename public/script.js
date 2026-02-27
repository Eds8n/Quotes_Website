const quote = document.getElementById("quote");
const author = document.getElementById("author");
const musicBtn = document.getElementById("musicBtn");
const myAudio = document.getElementById("myAudio");

let reading = false;
let currentQuote = "";
let isLoadingQuote = false;
let currentSpeech = null; // Pour garder une référence sur la lecture actuelle

async function getquote() {
    // Si lecture en cours, arrêter juste la lecture actuelle
    if (currentSpeech) {
        window.speechSynthesis.cancel();
    }

    if (isLoadingQuote) return;
    isLoadingQuote = true;

    try {
        const response = await fetch("/api/quote");
        const data = await response.json();

        quote.innerHTML = `"${data.quote}"`;
        author.innerHTML = `- ${data.author}`;
        currentQuote = data.quote;

        // Si lecture automatique activée, relancer la lecture
        if (reading) {
            readQuote();
        }

    } catch (error) {
        quote.innerHTML = "Erreur de chargement.";
        author.innerHTML = "";
    } finally {
        isLoadingQuote = false;
    }
}

// Bouton musique
musicBtn.addEventListener("click", () => {
    if (myAudio.paused) {
        myAudio.play();
        musicBtn.textContent = "⏸️ Musique";
    } else {
        myAudio.pause();
        musicBtn.textContent = "🎵 Musique";
    }
});

// Lecture de la citation avec voix naturelle
function readQuote() {
    if (!currentQuote) return;

    // Arrêter la lecture précédente
    if (currentSpeech) window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(currentQuote);
    speech.rate = 0.9;
    speech.pitch = 1.1; // un peu plus naturel
    speech.volume = 1;

    // Choisir une voix plus naturelle si disponible
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.includes('fr') || v.lang.includes('en')) || voices[0];
    if (naturalVoice) speech.voice = naturalVoice;

    speech.onend = function() {
        if (reading) {
            getquote();
            setTimeout(readQuote, 500);
        }
    };

    currentSpeech = speech;
    window.speechSynthesis.speak(speech);
}

function toggleReading() {
    if (reading) {
        window.speechSynthesis.cancel();
        reading = false;
    } else {
        reading = true;
        readQuote();
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

document.getElementById("newQuoteBtn").addEventListener("click", getquote);
document.getElementById("readingBtn").addEventListener("click", toggleReading);
document.getElementById("themeBtn").addEventListener("click", toggleTheme);

getquote();

// S'assurer que les voix sont chargées
window.speechSynthesis.onvoiceschanged = () => {
    console.log("Voix chargées !");
};