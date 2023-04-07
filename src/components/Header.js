import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from '../css/img/VekoTec-colored-logo.png';
import { pushDown } from "../css/img/svg";

export default function Header() {
  const [header, setHeader] = useState('hidden');
  const [headerActive, setHeaderActive] = useState('headerInactive')

  const handleMenu = () => {
    setHeaderActive(headerActive === 'headerActive' ? 'headerInactive' : 'headerActive');
    setHeader(header === 'hidden' ? 'display' : 'hidden');
  }
  return (
    <div
      id="header"
      className={headerActive}
    >
      <div
        id='header-imgs'
      >
        <img
          id='logo'
          src={logo}
          alt="VekotekLogo"
        />
        <button
          onClick={handleMenu}
        >
          <img
            id='pushdown'
            src={pushDown}
            alt="dropdown menu"
          />
        </button>
      </div>
      <div
        id='header-links'
      >
        <HashLink
          className={header}
          smooth to={'/page#home'}>
          Home
        </HashLink>
        <HashLink
          className={header}
          smooth to={'/page#serviços'}>
          Serviços
        </HashLink>
        <HashLink
          className={header}
          smooth to={'/page#sobre'}>
          Sobre
        </HashLink>
        <HashLink
          className={header}
          smooth to={'/page#contato'}>
          Contato
        </HashLink>
      </div>
    </div>
  )
}