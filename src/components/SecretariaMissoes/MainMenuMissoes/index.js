import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoMenuMissoes from '../../../assets/img/logoMissoes.png';

import './styles.css';

export default function MainMenu() {
  const [navFixed, setNavFixed] = useState('');
  const [openCollapse, setOpenCollapse] = useState(false);

  window.onscroll = function() {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top >= 120) {
      setNavFixed('navbar_fixed_missoes');
    } else {
      setNavFixed('');
    }
  };

  function toggleSubMenu(e) {
    const elementUl = e.target.parentNode.children;
    for (let elUl of elementUl) {
      if (elUl.nodeName === 'UL') {
        if (elUl.classList.value === 'dropdown-menu show') {
          elUl.classList.remove('show');
        } else {
          elUl.classList.add('show');
        }
      }
    }
  }

  return (
    <header className={`header_area header-area-missoes ${navFixed}`}>
      <div className="main_menu">
        <nav className="navbar navbar-missoes navbar-expand-lg navbar-light">
          <div className="container box_1620">
            <Link
              className="links-menu-missoes navbar-brand logo_h"
              to="/missoes"
            >
              <img src={LogoMenuMissoes} alt="" />
            </Link>
            <button
              className="navbar-toggler navbar-toggler-missoes collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={openCollapse}
              aria-label="Toggle navigation"
              onClick={() => setOpenCollapse(!openCollapse)}
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <div
              className={`collapse navbar-collapse offset ${
                openCollapse ? 'show' : ''
              }`}
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item">
                  <Link
                    className="links-menu-missoes nav-link dropdown-toggle"
                    to="/"
                  >
                    Igreja
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links-menu-missoes nav-link" to="/missoes">
                    Conheça-nos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links-menu-missoes nav-link" to="/missoes">
                    Missionários
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links-menu-missoes nav-link" to="/missoes">
                    Notícias
                  </Link>
                </li>
                <li className="nav-item submenu dropdown">
                  <Link
                    to="#"
                    className="links-menu-missoes nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={event => toggleSubMenu(event)}
                  >
                    Redes Socias
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" nav-item">
                      <Link className="nav-link nav-drop-missoes" to="/missoes">
                        Facebook
                      </Link>{' '}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="links-menu-missoes nav-link" to="/missoes">
                    Parceiros da Palavra
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
