import { Animal } from "./animal.js";

export class Lion extends Animal{
    constructor(lieuDeVie){
        super(lieuDeVie); 
        if(this.bebe){
            this.srcImage('img/bebeLion.gif');
        }else{
            this.srcImage('img/parentLion.gif')
        }
        this.srcAudio('audio/lion.mp3')
    }
}
