/* 
Milestone 1

Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

TODO Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
 */


// Devo creare una funzione che mi restituisca l'indice dell'oggetto degli array

const { createApp } = Vue;

createApp({
    data() {
        return {
            // Inizializzazione dei dati
            textToFind: "",
            // Inizializzo il messaggio come stringa vuota
            newMessage: "",
            // Iniziallizzo l'indice del contatto attivo a 0
            activeIndex: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        }
    },
    computed: {

    },
    methods: {

        // Metodo che cambia il contatto attivo
        setActiveContact(i) {
            // Assegno all'indice del contatto attivo l'indice del contatto cliccato
            this.activeIndex = i;
            console.log(this.activeIndex);
        },
        // Metodo che risponde automaticamente dopo un secondo
        autoReplyMessage(i) {
            setTimeout(() => {
                this.contacts[i].messages.push({
                    date: '10/01/2020 15:51:00',
                    message: 'Ok!',
                    status: 'received'
                });
            }, 1000);
        },
        // Metodo che aggiunge un messaggio inviato
        addMessage(message, i) {
            // Trimmo il messaggio
            message = message.trim();
            // Se il messaggio è vuoto return vuoto
            if (!message) return;
            // Aggiungo il messaggio all'array dei messaggi
            this.contacts[i].messages.push({
                date: '10/01/2020 15:51:00',
                message,
                status: 'sent'
            });
            // Svuoto il campo del messaggio
            this.newMessage = "";
            // Richiamo il metodo che risponde automaticamente dopo un secondo
            this.autoReplyMessage(i);
        },
        // Metodo che capitalizza la prima lettera di una parola
        capitalize: (text) => {
            // Inizializzo la stringa capitalizzata vuota
            let capitalizedText = "";
            // Ritorno la stringa montata
            return capitalizedText = text.charAt(0).toUpperCase() + text.substring(1);
        },

        // Metodo che cerca se una parola è inclusa in un'altra parola
        isIncludes: (text, textToFind) => {
            // Trasformo il testo e la stringa da cercare in minuscolo (per poterli cercare senza problemi di case sensitive)
            text = text.toLowerCase();
            textToFind = textToFind.toLowerCase();
            // Ritorno true altrimenti false
            return text.includes(textToFind) ? true : false;
        },
        // Metodo che cerca il contatto
        searchContact() {
            // Ciclo l'array dei contatti
            this.contacts.forEach((contact) => {
                // Assegno un valore booleano alla proprietà del contatto in base al risultato della  funzione richiamata
                // contact.visible = contact.name.includes(this.textToFind) ? true : false;
                contact.visible = this.isIncludes(contact.name, this.textToFind);
                // Utilizzo il metodo capitalize per rendere la prima lettera del nome del contatto maiuscola
                contact.name = this.capitalize(contact.name);
            });
        },
    },
    beforeUpdate() {
        // Richiamo il metodo searchContact prima di aggiornare 
        this.searchContact();
    },
}).mount('#app');