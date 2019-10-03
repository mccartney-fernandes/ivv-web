import React from 'react';
import ImgProjects from '../../assets/img/home/projeto-sozo1.jpg';
import ImgBg from '../../assets/img/home/doze-anos-bg.png';
import ImgSection from '../../assets/img/home/section-style.png';

// import { Container } from './styles';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Conectados',
      photos: [
        { id: 1, photo: ImgProjects },
        { id: 2, photo: ImgProjects },
        { id: 3, photo: ImgProjects },
      ],
    },
    {
      id: 2,
      name: 'Sozo',
      photos: [
        { id: 1, photo: ImgProjects },
        { id: 2, photo: ImgProjects },
        { id: 3, photo: ImgProjects },
      ],
    },
  ];
  return (
    <section
      className="section-padding--small sponsor-bg"
      style={{ backgroundImage: `url(${ImgBg})` }}
    >
      <div className="container">
        <div className="section-intro text-center pb-80px">
          <p className="section-intro__title">O que estamos fazendo</p>
          <h2 className="primary-text">Nossos Projetos</h2>
          <img src={ImgSection} alt="" />
        </div>

        {projects.map(p => (
          <div key={p.id} className="sponsor-wrapper mb-5 pb-4">
            <h3 className="sponsor-title mb-5 " style={{ color: '#ea0763' }}>
              {p.name}
            </h3>
            <div className="row d-flex justify-content-center">
              {p.photos.map(ph => (
                <div key={ph.id} className="col-sm-6 col-lg-4 mb-3 mb-lg-0 ">
                  <div className="sponsor-single">
                    <img className="img-fluid" src={ph.photo} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
