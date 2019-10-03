import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoMenu from "../../assets/img/logoivv.png";

// import { Container } from './styles';

export default function MainMenu() {
  const [navFixed, setNavFixed] = useState("");
  const [openCollapse, setOpenCollapse] = useState(false);

  window.onscroll = function() {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top >= 120) {
      setNavFixed("navbar_fixed");
    } else {
      setNavFixed("");
    }
  };

  function toggleSubMenu(e) {
    const elementUl = e.target.parentNode.children;
    for (let elUl of elementUl) {
      if (elUl.nodeName === "UL") {
        if (elUl.classList.value === "dropdown-menu show") {
          elUl.classList.remove("show");
        } else {
          elUl.classList.add("show");
        }
      }
    }
  }

  return (
    <header className={`header_area ${navFixed}`}>
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            <a className="navbar-brand logo_h" href="/">
              <img src={LogoMenu} alt="" />
            </a>
            <button
              className="navbar-toggler collapsed"
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
                openCollapse ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item submenu dropdown active">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={event => toggleSubMenu(event)}
                  >
                    Igreja
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/nossos-lideres">
                        Nossos Líderes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Departamentos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/historia">
                        História
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/no-que-cremos">
                        No que cremos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Atividades
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/missoes">
                    Missões
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/noticias">
                    Noticias
                  </a>
                </li>

                <li className="nav-item submenu dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={event => toggleSubMenu(event)}
                  >
                    Mensagens
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Devocional
                      </a>{" "}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Dominical
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item submenu dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={event => toggleSubMenu(event)}
                  >
                    Multimídia
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Áudios
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Fotos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Vídeos
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item submenu dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={event => toggleSubMenu(event)}
                  >
                    Blog
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Blog Single
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/livraria">
                    Livraria
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contato
                  </a>
                </li>
              </ul>

              <ul className="nav-right text-center text-lg-right py-4 py-lg-0">
                <li>
                  <a href="#">Novos Membros</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
