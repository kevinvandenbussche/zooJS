import { Animal } from "./animal.js";

export class Ours extends Animal{
    constructor(lieuDeVie){
        super(lieuDeVie); 
        if(this.bebe){
            this.srcImage('img/bebeOurs.gif');
        }else{
            this.srcImage('img/parentOurs.gif')
        }
        this.srcAudio('audio/ours.mp3')
    }
}