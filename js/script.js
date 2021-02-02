var app = new Vue ({
    el: '#app',
    data: {
        avatarArray: [
            {
                nome: 'Michele',
                immagine: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png',
                status: false,
            },
            {
                nome: 'Federica',
                immagine: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
                status: false,
            },
            {
                nome: 'Nino',
                immagine: "https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__340.png",
                status: false,
            },
            {
                nome: 'Peppe',
                immagine: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
                status: false,
            },
            
        ]
    },

    methods: {
        statusChange(index) {
            this.avatarArray[index].status = true;
            console.log(this.avatarArray[0].status);
            console.log(this.avatarArray[1].status);
        }
    }
});