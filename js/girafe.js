import { Animal } from "./animal.js";

export class Girafe extends Animal{
    constructor(lieuDeVie){
        super(lieuDeVie); 
        if(this.bebe){
            this.srcImage('img/bebeGirafe.gif');
        }else{
            this.srcImage('img/parentGirafe.gif')
        }
        this.srcAudio('audio/girafe.mp3')
    }
}