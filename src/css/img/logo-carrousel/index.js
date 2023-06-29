import logoESG from './logo-esg.png';
import logoCAR from './logo-car.png';
import logoINCRA from './logo-incra.png';
import { back1, back2, back3 } from '../../img/backgrounds';

const carrousel = [
  {
    title: 'Georreferenciamento certificado pelo',
    image: back1,
    logo: logoINCRA,
    classe:'incra'
  },
  {
    title: 'Cadastro de Imóveis Rurais',
    image: back2,
    logo: logoCAR,
    classe:'car',
  },
  {
    title: 'ESG é com a Vekotec',
    image: back3,
    logo: logoESG,
    classe:'esg',
  },
];

export default carrousel;