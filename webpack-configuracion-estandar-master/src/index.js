import { buscarHeroe } from './js/callbacks';
import { promesaLenta, promesaRapida, promesaMedia, buscarHeroesAsync, buscarHeroes } from './js/promesas';
import './styles.css';

buscarHeroes('capi1').then(console.log);
buscarHeroesAsync('spider1').then(console.log);

 