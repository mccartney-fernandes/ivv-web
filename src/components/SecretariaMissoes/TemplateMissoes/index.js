import React from 'react';
import Footer from '../../Footer';
import MenuInstitucional from '../../MenuInstitucional';
import MainMenuMissoes from '../MainMenuMissoes';
// import { Container } from './styles';

export default function Template({ children }) {
  return (
    <>
      <MenuInstitucional />
      <MainMenuMissoes />
      {children}
      <Footer />
    </>
  );
}
