import { buscarHeroesAsync } from './promesas';
const heroesId =['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async() => {

    return await Promise.all( heroesId.map( buscarHeroesAsync ));

    /* const heroesArr = [];

    for(const id of heroesId){
       const heroe = await  buscarHeroesAsync(id);
       heroesArr.push(heroe);
    }

   

    return heroesArr; */
}