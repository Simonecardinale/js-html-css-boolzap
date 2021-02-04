var app = new Vue ({
    el: '#app',
    data: {
        user:[
            {
                nome: "Simone",
                immagine: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
            }
        ],
        avatarArray: [
            {
                nome: 'Michele',
                immagine: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png',
                status: false,
                message:[
                    {
                        text: "Ciao come stai?",
                        status: "sent",
                    },
                    {
                        text: "Tutto bene tu?",
                        status: "received",
                    },
                    {
                        text: "Tutto ok!",
                        status: "sent",
                    }
                ],
                
            },
            {
                nome: 'Federica',
                immagine: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
                status: false,
                message:[
                    {
                        text: "Domani a pesca?",
                        status: "sent",
                    },
                    {
                        text: "No mi secca",
                        status: "received",
                    },
                    {
                        text: "Va bene",
                        status: "sent",
                    }
                ],
            },
            {
                nome: 'Nino',
                immagine: "https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__340.png",
                status: false,
                message:[
                    {
                        text: "Aperitivo",
                        status: "sent",
                    },
                    {
                        text: "Si dai",
                        status: "received",
                    },
                    {
                        text: "Andiamo!",
                        status: "sent",
                    },
                ],
            },
            {
                nome: 'Peppe',
                immagine: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
                status: false,
                message:[
                    {
                        text: "AoE?",
                        status: "sent",
                    },
                    {
                        text: "Ti distruggo",
                        status: "received",
                    },
                    {
                        text: "Si ciao!",
                        status: "sent",
                    }
                ]
            },
        ],
        chat: "",
        utenteSelezionato: 0,
        risposta: "",
    },

    created() {
        this.utenteSelezionato = this.avatarArray[0];
        console.log(this.utenteSelezionato);
        
    },


    methods: {
        // statusChange(index) {
        //     this.avatarArray[index].status = true;
        //     this.selected.push(this.avatarArray[index]),
        //     this.selected.splice(0, 2, this.avatarArray[index])
        // },

        indexContatto(index) {
            this.utenteSelezionato = this.avatarArray[index];
            console.log(this.utenteSelezionato);
        },
        
        sendChat() {
            this.utenteSelezionato.message.push({text: this.chat, status:"sent"});
            this.chat =  "";
                setTimeout(this.sendAnswer, 1000);
            },
            sendAnswer(){
                this.utenteSelezionato.message.push({text:"ok", status: "received"})
                console.log(this.utenteSelezionato);
            }
        },

    
});