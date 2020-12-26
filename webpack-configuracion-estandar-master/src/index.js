import './styles.css';
import { buscarHeroe as buscrHeroeCallback} from './js/callbacks';
import { buscarHeroes } from './js/promesas';

const heroeId = 'iron';

buscrHeroeCallback(heroeId, (err,heroe)=>{
    if (heroe){
        console.log(`Hola ${ heroe.poder }`); 
    }else{
        console.log(` ${ err}`); 
    }

});