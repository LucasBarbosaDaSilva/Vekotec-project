import { HashLink } from "react-router-hash-link";
import logo from '../css/img/VekoTec-colored-logo.png';

export default function Header() {
  return (
    <div
      id="header"
    >
      <img
        src={logo}
        alt="VekotekLogo"
      />
      <div
        id='header-links'
      >
        <HashLink
          className='header-link'
          smooth to={'/page#home'}>
          Home
        </HashLink>
        <HashLink
          className='header-link'
          smooth to={'/page#serviços'}>
          Serviços
        </HashLink>
        <HashLink
          className='header-link'
          smooth to={'/page#sobre'}>
          Sobre
        </HashLink>
        <HashLink
          className='header-link'
          smooth to={'/page#contato'}>
          Contato
        </HashLink>
      </div>
    </div>
  )
}