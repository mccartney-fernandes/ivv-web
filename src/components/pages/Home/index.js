import React from "react";
import Template from "../../Template";
import BannerHome from "../../BannerHome";
import HoursCulto from "../../HoursCulto";
import Projects from "../../Projects";
import ContainerLideres from "../../ContainerLideres";
import Eventos from "../../Eventos";
import Gallery from "../../Gallery";
import RecentsPosts from "../../RecentsPosts";
import imgBannerIvv from "../../../assets/img/banner/doze-banner.png";

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
