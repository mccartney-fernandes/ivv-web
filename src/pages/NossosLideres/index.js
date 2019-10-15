import React from "react";
import Template from "../../components/Template";
import BannerHome from "../../components/BannerHome";
import ContainerLideres from "../../components/ContainerLideres";
import ContainerDepartament from "../../components/ContainerDepartament";
import imgBannerIvv from "../../assets/img/banner/doze-banner.png";

// import { Container } from './styles';

export default function NossosLideres() {
  return (
    <Template>
      <BannerHome imgBanner={imgBannerIvv} />
      <ContainerLideres />
      <ContainerDepartament />
    </Template>
  );
}
