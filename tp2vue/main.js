error = input.placeholder;
const app = Vue.createApp({
    data() {
        return {
            textobtnSeguir:"Seguir",
            image: '/tp2vue/assets/1.png',
            profileImage: '/tp2vue/assets/profileimg.jpg',
            postimage: '/tp2vue/assets/post.jpg',
            dataPerson: {
                name: 'Jane Doe',
                datetime: {
                    title: 'Fecha de nacimiento: ',
                    time: '01/05/1996'
                },
                Phone: {
                    title: 'Teléfono: ',
                    number: '918-936-9585'
                },
                City: {
                    title: 'Ciudad: ',
                    city: 'Tokyo Japón'
                },
                Work: {
                    title: 'Trabajando en: ',
                    work: 'Lawn N'
                },
            },
            contadorMeGusta: 0,
            nombre: '',
            comentario: '',
            comentarios : []
        }
    },
    methods: {
        seguir(){
            if(!this.seguirBooleano){
                this.textobtnSeguir = "Dejar de seguir";
                this.seguirBooleano= true;
            }else{
                this.textobtnSeguir = "Seguir";
                this.seguirBooleano= false;
            }
        },
        meGusta() {
            if (!this.botonPresionado) {
                this.contadorMeGusta += 1;
                this.botonPresionado = true;
                icono.classList.toggle("icono-destacado");
            }
            else {
                this.contadorMeGusta -= 1;
                this.botonPresionado = false;
                icono.classList.toggle("icono-destacado");
            }
            
        },
        comentar() {
            if (this.nombre === "") {
                this.comentario = "";
                input.placeholder = ('Ingrese un usuario para comentar')

            }else if (this.comentario === "") {
                input.placeholder= ('Ingrese comentario') 
            }
            else {
                const nuevoComentario = {
                    id: Date.now(), 
                    usuario: this.nombre + ": ",
                    comentario: this.comentario
                  };
                  this.comentarios.push(nuevoComentario);

            this.nombre = '';
            this.comentario = '';
            }
        },
          eliminarComentario(id) {
            this.comentarios = this.comentarios.filter(comentario => comentario.id !== id);
          },
        usuario(){
            if(this.nombre === ""){
                console.log("error de usuario");
                this.error1 = "Error de usuario. Intente de nuevo.";
            }else{

                console.log("usuario aceptado");
                this.error1 = "";  
            }
        }
    }
})
