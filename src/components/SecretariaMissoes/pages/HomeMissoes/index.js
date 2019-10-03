import React from 'react';
import TemplateMissoes from '../../TemplateMissoes';
import BannerHome from '../../../BannerHome';

// import { Container } from './styles';

export default function HomeMissoes() {
  return (
    <TemplateMissoes>
      <BannerHome
        imgBanner={`http://verbodavida.org.br/site/wp-content/themes/portal/images/topos/topo_missoes.jpg`}
      />
    </TemplateMissoes>
  );
}
