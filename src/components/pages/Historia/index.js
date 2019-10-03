import React from "react";
import Template from "../../Template";
import BannerHome from "../../BannerHome";
import imgBannerIvv from "../../../assets/img/banner/doze-banner.png";
import ImgSection from "../../../assets/img/home/section-style.png";

import "./styles.css";

export default function Historia() {
  return (
    <Template>
      <BannerHome imgBanner={imgBannerIvv} />
      <div className="container">
        <div className="section-intro text-center pb-98px ">
          <h2 className="primary-text">Nossa História</h2>
          <img src={ImgSection} alt="" />
        </div>
        <div className="single-post-area">
          <div className="blog_details">
            <p>
              A Igreja Verbo da Vida em Santa Maria da Boa Vista – PE nasceu com
              o proposito de compartilhar a visão da palavra da fé trazida pelos
              nossos fundadores Ap. Bud e Jan Wright.
            </p>
            <p>
              As primeiras reuniões tiveram início com os pastores Policarpo e
              Sérgio Brito na casa do nosso querido irmão e parceiro José
              Aparecido Andrade mais conhecido como Cidinho Andrade, que foi um
              parceiro fundamental na edificação da nossa igreja. Durante um
              tempo fomos apenas um ponto de pregação, onde o Senhor nos
              permitiu vivermos do sobrenatural em nossas vidas, mas a vontade
              Dele era que crescêssemos, e assim aconteceu.
            </p>
            <p>
              Em 15 de janeiro de 2007 o Pr. Sérgio Brito, juntamente com sua
              esposa Luciana e seus filhos Rafael e Ana Luiza vieram cuidar de
              um povo que ansiava conhecer mais do Senhor. Eles cuidaram muito
              bem desse lugar por três anos e meio passando o bastão para seu
              cunhado e irmã, Pr. Walmir Ferreira e Polynilma Brito, juntamente
              com Lucas Dhrick, filho do casal.
            </p>
            <p>
              Desde 19 de julho de 2010 estamos sobre a liderança de um casal
              que veio para revolucionar a nossa igreja e nos instigar a crescer
              cada vez mais, Pr. Walmir Ferreira e Polynilma Brito. São 8 anos
              de crescimento e avanço provando do infinitamente mais de Deus.
            </p>
            <p>
              No dia 4 de novembro de 2016 deixamos de ser congregação e viramos
              igreja, ao todo temos uma história de 12 anos e isso é só o começo
              de tudo aquilo que o Senhor tem reservado para nós.
            </p>
            <div className="quote-wrapper">
              <div className="quotes border-left-historia">
                Seja bem vindo a{" "}
                <span style={{ color: "#0540a2" }}>#VERBOSANTAMARIA</span>!
                Obrigado por visitar o nosso site e dedicar algum tempo para
                descobrir quem somos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
