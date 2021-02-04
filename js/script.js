var app = new Vue ({
    el: '#app',
    data: {
        user:[
            {
                nome: "Simone",
                immagine: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
                date: ""
            }
        ],
        avatarArray: [
            {
                nome: 'Michele',
                immagine: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png',
                
                message:[
                    {
                        text: "Ciao come stai?",
                        status: "sent",
                        date: '20/03/2020 16:30:00',
                    },
                    {
                        text: "Tutto bene tu?",
                        status: "received",
                        date: '22/03/2020 18:30:00',
                    },
                    {
                        text: "Tutto ok!",
                        status: "sent",
                        date: '23/03/2020 06:30:00',
                    },
                    
                ],
                
            },
            {
                nome: 'Federica',
                immagine: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
                
                message:[
                    {
                        text: "Domani a pesca?",
                        status: "sent",
                        date: '27/03/2020 19:30:00',
                    },
                    {
                        text: "No mi secca",
                        status: "received",
                        date: '28/03/2020 10:30:00',
                    },
                    {
                        text: "Va bene",
                        status: "sent",
                        date: '28/03/2020 11:30:00',
                    }
                ],
            },
            {
                nome: 'Nino',
                immagine: "https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__340.png",
                
                message:[
                    {
                        text: "Aperitivo",
                        status: "sent",
                        date: '18/03/2020 16:30:00',
                    },
                    {
                        text: "Si dai",
                        status: "received",
                        date: '19/03/2020 18:30:00',
                    },
                    {
                        text: "Andiamo!",
                        status: "sent",
                        date: '21/03/2020 16:30:00',
                    }
                ],
            },
            {
                nome: 'Peppe',
                immagine: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
                
                message:[
                    {
                        text: "AoE?",
                        status: "sent",
                        date: '20/03/2020 10:30:00',
                    },
                    {
                        text: "Ti distruggo",
                        status: "received",
                        date: '20/03/2020 19:30:00',
                    },
                    {
                        text: "Si ciao!",
                        status: "sent",
                        date: '20/03/2020 20:30:00',
                    },
                    {
                        text: "Ciao",
                        status: "received",
                        date: '20/03/2020 22:30:00',
                    },
                ]
            },
        ],
        chat: "",
        utenteSelezionato: 0,
        indexData: "",
    },

    created() {
        this.utenteSelezionato = this.avatarArray[0];
        this.indexData = this.utenteSelezionato.message[0].date;
    },


    methods: {
        // statusChange(index) {
        //     this.avatarArray[index].status = true;
        //     this.selected.push(this.avatarArray[index]),
        //     this.selected.splice(0, 2, this.avatarArray[index])
        // },

        indexContatto(index) {
            this.utenteSelezionato = this.avatarArray[index];

            for(var k in this.utenteSelezionato.message) {
                if(this.utenteSelezionato.message[k].status == "received") {
                    this.indexData = this.utenteSelezionato.message[k].date;
                }
            }
            console.log(this.indexData);
        },
        
        sendChat() {
            this.utenteSelezionato.message.push({text: this.chat, status:"sent"});
            this.chat =  "";
                setTimeout(this.sendAnswer, 1000);
            },
            sendAnswer(){
                this.utenteSelezionato.message.push({text:"ok", status: "received"})
            },
        },

    
});