// Funzione principale per il Cifrario di Cesare
function calcolaCifratura() {
    // 1. INPUT: Prendo il testo e la chiave
    const inputElement = document.getElementById('inputText');
    const chiaveElement = document.getElementById('inputChiave');
    
    // Converte in maiuscolo per evitare complessità ASCII
    let messaggio = inputElement.value.toUpperCase();
    let chiave = parseInt(chiaveElement.value);

    // Aggiorna visivamente il valore della chiave nello span
    const labelChiave = document.getElementById('chiaveValore');
    if(labelChiave) labelChiave.innerText = chiave;

    let risultato = "";

    // 2. ALGORITMO: Ciclo su ogni carattere
    for (let i = 0; i < messaggio.length; i++) {
        let codiceLettera = messaggio.charCodeAt(i);

        // Se è una lettera (A=65, Z=90)
        if (codiceLettera >= 65 && codiceLettera <= 90) {
            // Formula: C = (P + K) % 26
            
            // Porto in range 0-25
            let posizione025 = codiceLettera - 65;
            
            // Applico spostamento
            let nuovaPosizione = posizione025 + chiave;
            
            // Gestisco il "giro" (wrap around)
            nuovaPosizione = nuovaPosizione % 26;
            
            // Ritorno in ASCII
            let nuovoCodice = nuovaPosizione + 65;
            
            risultato += String.fromCharCode(nuovoCodice);
        } else {
            // Caratteri speciali (spazi, numeri) restano uguali
            risultato += messaggio[i];
        }
    }

    // 3. OUTPUT: Mostro il risultato
    const outputElement = document.getElementById('outputText');
    
    if (risultato === "") {
        outputElement.innerText = "Attendendo input...";
        outputElement.style.color = "#64748b"; // Grigio se vuoto
    } else {
        outputElement.innerText = risultato;
        outputElement.style.color = "#4ade80"; // Verde Matrix se attivo
    }
}

// Inizializzazione al caricamento
window.onload = function() {
    calcolaCifratura();
};

// Smooth scroll per link interni (navigazione fluida)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});