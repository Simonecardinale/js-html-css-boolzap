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
                        message_sent: "Ciao a tutti",
                        message_received: "Ciao a te",
                        sent: "sent",
                        received: "received"
                    },
                    {
                        message_sent: "Come stai?",
                        message_received: "Tutto bene tu?",
                        sent: "sent",
                        received: "received"
                    },
                    {
                        message_sent: "Tutto ok!",
                        message_received: "Ciao!",
                        sent: "sent",
                        received: "received",
                    },
                ],
                
            },
            {
                nome: 'Federica',
                immagine: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
                status: false,
                message:[
                    {
                        message_sent: "Ciaone",
                        message_received: "Ciao!",
                        sent: "sent",
                        received: "received"
                    },
                    {
                        message_sent: "Domani vado a pescare!",
                        message_received: "Buon per te",
                        sent: "sent",
                        received: "received",
                        
                    },
                ],
            },
            {
                nome: 'Nino',
                immagine: "https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__340.png",
                status: false,
                message:[
                    {
                        message_sent: "Saluti",
                        message_received: "Ciao a te",
                        sent: "sent",
                        received: "received"
                    },
                    {
                        message_sent: "Domani aperitivo?",
                        message_received: "No",
                        sent: "sent",
                        received: "received",
                        
                    },
                ],
            },
            {
                nome: 'Peppe',
                immagine: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
                status: false,
                message:[
                    {   
                        message_sent: "",
                        message_received: "AoE?",
                        sent: "sent",
                        received: "received",
                        
                    },
                    {
                        message_sent: "Ti distruggo",
                        message_received: "Si ciao",
                        sent: "sent",
                        received: "received",
                        
                    },
                ]
            },
        ],
        chat: "",
        utenteSelezionato: 0,
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
            this.utenteSelezionato.message.push({user_chat: this.chat, user:"sent", message_sent:"", message_received:""});
            this.chat = "";
        }
    }
});