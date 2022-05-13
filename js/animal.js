function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
   }

const MIN = 40;
const MAX = 200;


export class Animal{
    constructor(lieuDeVie){
        let taille = randomIntFromInterval(MIN, MAX);
        this.lieuDeVie = lieuDeVie;
        this.taille = taille;
        this.bebe = this.taille < MAX/2.5;
        this.img = document.createElement('img');
        this.img.src;
        this.audio = document.createElement('audio');
        this.audio.setAttribute("controls", '');
        this.audio.src;
        if(this.bebe){
            this.img.setAttribute("width", taille + "px");
        }else{
            this.img.setAttribute("width", taille + "px");
        }
    }
    srcImage(src){
        this.img.src = src;
    }    
    srcAudio(src){
        this.audio.src = src;
    }

}

