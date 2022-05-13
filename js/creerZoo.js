import { Girafe } from "./girafe.js";
import { Koala } from "./koala.js";
import { Lion } from "./lion.js";
import { Ours } from "./ours.js";

const btnLion = document.querySelector('.btn-lion');
const btnOurs = document.querySelector('.btn-ours');
const btnGirafe = document.querySelector('.btn-girafe');
const btnKoala = document.querySelector('.btn-koala');
const reset = document.querySelector('.reset');
const message = document.querySelector('.message');
//je créer un tableau qui aura chaue animaux instancié à l'interieur
let arrayLion = [];
let arrayOurs = [];
let arrayGirafe = [];
let arrayKoala = [];
//je créer un tableau de tableau d'animaux
let arrayAnimaux = [arrayKoala, arrayGirafe, arrayOurs, arrayLion];

function gestionAnimal(animal, array, btn, lieu){
    const baliseAudio = document.querySelectorAll('audio');
    
    //je rajoute l'image de l'animal dans la div de l'animal concerné
    lieu.append(animal.img);
    //je met l'animal dans un tableau
    array.push(animal);
    //je verifie le nombre d'animal dans le tableau
    if(array.length == 3){
        btn.setAttribute("disabled", true);
        message.classList.add('active');
    }
    //je prend le tableau avec mes animaux 
    for(let i = 0; i < array.length; i++){
        //si il y un animal dans le tableau je rajoute la balise audio en html et je lance la bande son de l'animal
        if( array.length == 1){
            lieu.prepend(animal.audio);
            animal.audio.play();
        }
    }
    //je verifie si une balise audio est dans le dom
    if(baliseAudio.length != 0){
        baliseAudio.forEach(audio =>{
            if(audio.src != animal.audio.src ){
                //si l'audio en cours est differente de celle de l'animal qui est instacié la mettre en pause
                audio.pause();
            }else{
                audio.play();
            }
        })
    }
}

reset.addEventListener('click',()=>{
    const images = document.querySelectorAll('.parent img');
    const audio = document.querySelectorAll('.parent audio');
    const buttons = document.querySelectorAll('button');
    //je supprime toutes les images d'animaux dans chaque div
    images.forEach(image => {
        image.remove();
    });
    //je supprime toutes les balises audio
    audio.forEach(e => {
        e.remove();
    });
    //je réactive le bouton pour chaque animal
    buttons.forEach(button =>{
        button.removeAttribute("disabled")
    });
    //reinitisaliser le tableau d'animaux
    arrayAnimaux.forEach(array =>{
        array.length = 0;
    });
    //je verifie si pop up est presente
    if(message != undefined){
        //si pop up presente je la supprime
        message.classList.remove('active');    
    
    }

})

message.addEventListener('click',()=>{
    message.classList.remove('active');
})

btnLion.addEventListener('click',()=>{
    const btnLion = document.querySelector(".btn-lion");
    const lieu = document.querySelector('.lion');
    let lion = new Lion(lieu);
    
    gestionAnimal(lion, arrayLion, btnLion, lieu);
   
})

btnOurs.addEventListener('click',()=>{
    const btnOurs = document.querySelector(".btn-ours");
    const lieu = document.querySelector('.ours');
    let ours = new Ours(lieu);

    gestionAnimal(ours, arrayOurs, btnOurs, lieu);
})

btnGirafe.addEventListener('click',()=>{
    const btnGirafe = document.querySelector(".btn-girafe");
    const lieu = document.querySelector('.girafe');
    let girafe = new Girafe(lieu);

    gestionAnimal(girafe, arrayGirafe, btnGirafe, lieu);
})

btnKoala.addEventListener('click',()=>{
    const btnKoala = document.querySelector(".btn-koala");
    const lieu = document.querySelector('.koala');
    let koala = new Koala(lieu);

    gestionAnimal(koala, arrayKoala, btnKoala, lieu);
    
})




