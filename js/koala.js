import { Animal } from "./animal.js";

export class Koala extends Animal{
    constructor(lieuDeVie){
        super(lieuDeVie); 
        if(this.bebe){
            this.srcImage('img/bebeKoala.gif');
        }else{
            this.srcImage('img/parentKoala.gif')
        }
        this.srcAudio('audio/koala.mp3')
    }
}