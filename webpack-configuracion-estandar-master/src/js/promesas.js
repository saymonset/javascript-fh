const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de aranas...'
    },
}

export const buscarHeroes = (id)=> {

    
    const heroe = heroes[id];

    return new Promise((resolve, reject)=>{
                   if (heroe){
                       resolve(heroe);
                   }else{
                       reject(`No existe un heroe con el id ${id}`);
                   }
    });

}


export const buscarHeroesAsync = async( id ) => {

    
    const heroe = heroes[id];

                if (heroe){
                    return heroe;
                }else{
                    // throw  Error(`No existe un heroe con el id ${id}`);
                    throw  `No existe un heroe con el id ${id}`;

                }

    /* return new Promise((resolve, reject)=>{
                   if (heroe){
                       resolve(heroe);
                   }else{
                       reject(`No existe un heroe con el id ${id}`);
                   }
    }); */

}

const promesaLenta = new Promise ( (resolve, reject)=>{
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 2000);
});


const promesaMedia = new Promise ( (resolve, reject)=>{
    setTimeout(() => {
        resolve('Promesa media');
    }, 1500);
});


const promesaRapida = new Promise ( (resolve, reject)=>{
    setTimeout(() => {
        resolve('Promesa rapida');
    }, 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}