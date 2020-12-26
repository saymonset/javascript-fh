import { promesaLenta, promesaRapida, promesaMedia } from './js/promesas';
import './styles.css';

Promise.race([promesaRapida, promesaMedia, promesaLenta])
.then(console.log)
.catch(console.log);