import React from "react";
import MainMenu from "../MainMenu";
import Footer from "../Footer";
import MenuInstitucional from "../MenuInstitucional";
// import { Container } from './styles';

export default function Template({ children }) {
  return (
    <>
      <MenuInstitucional />
      <MainMenu />
      {children}
      <Footer />
    </>
  );
}
