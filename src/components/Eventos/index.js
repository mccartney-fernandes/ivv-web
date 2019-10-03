import React from 'react';
import ImgSection from '../../assets/img/home/section-style.png';

// import { Container } from './styles';

export default function Eventos() {
  const itens = [
    {
      id: 1,
      img:
        'https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/67425138_949477298726930_7267805605157404672_o.jpg?_nc_cat=104&_nc_oc=AQnrG0FSF27PeBIJpkna9vtILNx-6tVMvBnX3ms39yKIzWtlSts-84GrT_8xKAUNkn0&_nc_ht=scontent.frec8-1.fna&oh=dd1b0de8335a1b6436bdd68a671e0807&oe=5DE81915',
      titleNav: '12 Anos',
      dataNav: '25 de novembro 2019',
      hoursContet: '9.00 AM - 10.30 AM',
      titleContent: 'Aniversario de 12 anos Igreja Verbo da Vida',
      content: `Aniversario de 12 anos da Igreja Verbo da Vida de
    Santa Maria da Boa Vista.`,
    },
    {
      id: 2,
      img:
        'http://verbodavida.com/recifeboaviagem/wp-content/uploads/sites/17/2016/08/WhatsApp-Image-2016-08-11-at-16.50.17-356x220.jpeg',
      titleNav: 'Missões',
      dataNav: '02 de outubro 2019',
      hoursContet: '13.00 AM - 15.30 AM',
      titleContent: 'Dia Verbo da Vida de Missões',
      content: `A Igreja Verbo da Vida, realizara neste dia 
      diversas palestra missionarias pelo mundo.`,
    },
    {
      id: 3,
      img:
        'http://1.bp.blogspot.com/-4N-BWlTrYW4/VV5RL9EgyII/AAAAAAAABGI/je_swMrvKK8/s1600/Igreja%2BVerbo%2Bda%2BVida-01.png',
      titleNav: 'Culto de Natal',
      dataNav: '02 de dezembro 2019',
      hoursContet: '13.00 AM - 15.30 AM',
      titleContent: 'Culto de Natal',
      content: `A Igreja Verbo da Vida, realizara neste dia 
      diversas palestra misionarias pelo mundo.`,
    },
  ];
  function toggleTab(e, id) {
    const elementUl = document.querySelector('.nav-tabs').children;
    const cildrenTabs = document.querySelector('.tab-content').children;
    const classTabPanel = document.querySelector(`#tab-pane-${id}`);

    let elementA = null;
    if (e.target.nodeName === 'P' || e.target.nodeName === 'H4') {
      elementA = e.target.parentNode;
    } else {
      elementA = e.target;
    }

    for (let itemA of elementUl) {
      for (let itemB of itemA.children) {
        itemB.classList.remove('active');
      }
    }

    for (let item of cildrenTabs) {
      item.classList.remove('active');
    }

    classTabPanel.classList.add('active');
    elementA.classList.add('active');
  }
  return (
    <section className="section-margin mb-5 pb-5">
      <div className="container">
        <div className="section-intro text-center pb-98px">
          <h2 className="primary-text">Eventos</h2>
          <img src={ImgSection} alt="" />
        </div>

        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="scheduleTab">
              <ul className="nav nav-tabs">
                {/* Evento e Data */}
                {itens.map((item, index) => (
                  <li className="nav-item text-center mt-1" key={index}>
                    <a
                      className={index === 0 ? 'active' : ''}
                      onClick={event => toggleTab(event, item.id)}
                      style={{ cursor: 'pointer' }}
                      href="/#!"
                    >
                      <h4>{item.titleNav}</h4>
                      <p>{item.dataNav}</p>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Tab panes  */}
              <div className="tab-content">
                {itens.map((item, index) => (
                  <div
                    id={`tab-pane-${item.id}`}
                    className={`tab-pane ${index === 0 ? 'active' : ''}`}
                    key={index}
                  >
                    <div className="schedule-card">
                      <div className="row no-gutters">
                        <div className="col-md-3">
                          <div className="card-identity">
                            <img src={item.img} alt="" />
                          </div>
                        </div>
                        <div className="col-md-9 align-self-center">
                          <div className="schedule-content">
                            <p className="schedule-date">{item.hoursContet}</p>
                            <span className="schedule-title">
                              <h3>{item.titleContent}</h3>
                            </span>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
