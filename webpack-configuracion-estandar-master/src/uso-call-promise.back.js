import './styles.css';
import { buscarHeroe as buscrHeroeCallback} from './js/callbacks';
import { buscarHeroes } from './js/promesas';

const heroeId = 'iron';
const heroeId2 = 'capi';

/* buscarHeroes(heroeId).then(heroe => {
    console.log(`Enviando heroe ${heroe.nombre} a la mision`);
})        */   

Promise.all([buscarHeroes(heroeId), buscarHeroes(heroeId2)]).then(([resp1,resp2])=>{
    console.log(` Enviando  ${resp1.nombre} y a ${resp2.nombre}`)
}).catch(err=>{
    alert(err);
}).finally(()=>{
    console.log('Finalizo las promesas');
});

console.log('Fin de programa');