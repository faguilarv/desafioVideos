//IIFE
const desafioVideos = (() => {

    // se crea una funcion privada 

    const desafioAtributo = (elemento, atributo, valor) => {
        elemento[atributo] = valor
    }
    //se crea la funcion publico que invoca la funcion privada para mostrar la url e id
    return {
        publico(elemento, valor) {
            desafioAtributo(elemento, "src", valor)
        }
    }
})();
const domMusica = document.querySelector("#domMusica")
const domPeliculas = document.querySelector("#domPeliculas")
const domSeries = document.querySelector("#domSeries")


//se crea la clase padre que recibe las propiedades url
class Multimedia {
    #url
    constructor(url) {
        this.#url = url
    }
    get url() {
        return this.#url
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}
//se crea la clase hija que hereda de Multimedia

class Reproductor extends Multimedia {
    #elemento
    constructor(elemento, url) {
        super(url)
        this.#elemento = elemento
    }
    //se crea el metodo multimedia que llama a la funcion publica del IIFE
    playMultimedia() {
        desafioVideos.publico(this.#elemento, this.url) //this.url
    }
    setInicio(tiempo) {
        desafioVideos.publico(this.#elemento, `${this.url}?start=${tiempo}`)
        console.log(`${this.url}?start=${tiempo}`)
    }
}

//se instancia para insertar las url correspondiente a cada sección
const musica = new Reproductor(domMusica, "https://www.youtube.com/embed/ciCYd9B2UWQ?si=tbiC1mu--uAEVy3h")
musica.setInicio(50)
musica.playMultimedia()


const peliculas = new Reproductor(domPeliculas, "https://www.youtube.com/embed/V-mugKDQDlg?si=MnDNppEizrrrlRxX")
peliculas.setInicio(10)
peliculas.playMultimedia()



const series = new Reproductor(domSeries, "https://www.youtube.com/embed/uPOONJlXRr4?si=wpN4hY5t5vD1XoJA")
series.setInicio(20)
series.playMultimedia()



