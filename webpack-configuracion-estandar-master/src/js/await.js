import { buscarHeroesAsync } from './promesas';
const heroesId =['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async() => {

    const heroesArr = [];

    for(const id of heroesId){
       // buscarHeroesAsync(id).then( heroe => {heroesArr.push(heroe)});
       const heroe = await  buscarHeroesAsync(id);
       heroesArr.push(heroe);
    }

  /*   setTimeout(() => {
        console.log('Obtener heroes retardo .Nunca hacerlo..');
        console.table(heroesArr);
    }, 1000); */

    return heroesArr;
}