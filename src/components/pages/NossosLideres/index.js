import React from "react";
import Template from "../../Template";
import BannerHome from "../../BannerHome";
import ContainerLideres from "../../ContainerLideres";
import ContainerDepartament from "../../ContainerDepartament";
import imgBannerIvv from "../../../assets/img/banner/doze-banner.png";

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
