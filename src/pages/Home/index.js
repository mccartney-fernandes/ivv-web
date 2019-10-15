import React from "react";
import Template from "../../components/Template";
import BannerHome from "../../components/BannerHome";
import HoursCulto from "../../components/HoursCulto";
import Projects from "../../components/Projects";
import ContainerLideres from "../../components/ContainerLideres";
import Eventos from "../../components/Eventos";
import Gallery from "../../components/Gallery";
import RecentsPosts from "../../components/RecentsPosts";
import imgBannerIvv from "../../assets/img/banner/doze-banner.png";

// import { Container } from './styles';

export default function Home() {
  return (
    <Template>
      <BannerHome imgBanner={imgBannerIvv} />
      <HoursCulto />
      <Projects />
      <ContainerLideres pastoral />
      <Eventos />
      <Gallery />
      <RecentsPosts />
    </Template>
  );
}
