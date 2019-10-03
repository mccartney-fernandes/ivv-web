import React, { useState, useEffect } from 'react';

import './styles.css';

export default function MenuInstitucional() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (window.screen.width <= 991) setVisible(1);
    else setVisible(0);
  }, []);

  return (
    <nav hidden={visible} className="navbar-institucional container-fluid">
      <div className="container container-links-inst">
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.org.br/budejan/"
        >
          {'BUD & JAN'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.org.br/ministerio/"
        >
          {'MINISTÉRIO'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alumnirhema.com.br/"
        >
          {'ALUMNI'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.org.br/centrodecura/"
        >
          {'CENTRO DE CURA'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.org.br/rhema/"
        >
          {'RHEMA BRASIL'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.org.br/rhema/emr/"
        >
          {'EMR'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.org.br/rhema/ermm/"
        >
          {'ERMM'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.verboshop.com.br/"
        >
          {'VERBOSHOP'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.rhemabrasilpublicacoes.com.br/"
        >
          {'EDITORA'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.org.br/ministerio/enderecos/"
        >
          {'ENCONTRE-NOS'}
        </a>
        <a
          className="links-institucional"
          target="_blank"
          rel="noopener noreferrer"
          href="http://verbodavida.com/"
        >
          {'VERBODAVIDA.COM'}
        </a>
      </div>
    </nav>
  );
}
