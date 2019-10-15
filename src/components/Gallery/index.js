import React from 'react';
import ImgSection from '../../assets/img/home/section-style.png';

// import { Container } from './styles';

export default function Gallery() {
  const gallery = [
    {
      id: 1,
      img: `https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/68401427_958628627811797_3683093718002302976_n.jpg?_nc_cat=107&_nc_oc=AQltQ1By8U8-zhKhxhrWRbSD9j9bVxyV7c9Ubp2sSN2YciHuVJkaUQ_y-at9v6PE2rk&_nc_ht=scontent.frec8-1.fna&oh=a4ac05685fdafea2acf0ddf5a23b0394&oe=5DDFBC8F`,
    },
    {
      id: 2,
      img: `https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/69143858_958627217811938_4686246268433858560_n.jpg?_nc_cat=108&_nc_oc=AQkCJJMBimXG71g5urELg21uD8KIwjDFfR4P8z4zQtLcsEbzTpIRsHfVC_-pz--ovV8&_nc_ht=scontent.frec8-1.fna&oh=2edb991d645b9af1cc8350197b11d9c0&oe=5DCD33FE`,
    },
    {
      id: 3,
      img: `https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/67800066_958628167811843_8742743601336811520_n.jpg?_nc_cat=107&_nc_oc=AQmcheviZpcCHcU6gxnqRCHY1cMa-E8D5sVdPjZKkTxZxTB8QswR0Z70CJW2u-Z7Evg&_nc_ht=scontent.frec8-1.fna&oh=21ecf1d7d85faf662583f37b9dfb8d2d&oe=5DC9319C`,
    },
    {
      id: 4,
      img: `https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/68392624_958628797811780_7532447355199553536_n.jpg?_nc_cat=108&_nc_oc=AQlDuMqPOw3x_7G_YZ7NKxd5P8av-wOw8S9DYdvS9JNnKLSu2pAASxTYofdTGWKVUtg&_nc_ht=scontent.frec8-1.fna&oh=7ca83021643b90ac7cf40cfab8857877&oe=5DDFACD8`,
    },
    {
      id: 5,
      img: `https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/67723099_954397954901531_4101825833629384704_n.jpg?_nc_cat=111&_nc_oc=AQmnhIUkdI_ElvvOiwilfQpUf0dGi_Kn3QYPaltACQozT8yhrFjF_FkM7ti5bHaTU9g&_nc_ht=scontent.frec8-1.fna&oh=35af9521756a19f89004870f41e248b9&oe=5DE2EC1D`,
    },
    {
      id: 6,
      img: `https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/67802932_954397738234886_5265677561853116416_n.jpg?_nc_cat=100&_nc_oc=AQlGepWZOuL2vBD4bbU9DQcnT1flp_8QqfjyU4_abNP-yg7qD-V56aEHzVpX9XzomiQ&_nc_ht=scontent.frec8-1.fna&oh=a8b159a986a3149440599e1fc65ee924&oe=5DDD4020`,
    },
  ];
  return (
    <section className="section-padding gallery-area gallery-bg">
      <div className="container">
        <div className="section-intro section-intro-white text-center pb-98px">
          <p className="section-intro__title">Galeria</p>
          <h2 className="primary-text">Nossa Igreja</h2>
          <img src={ImgSection} alt="" />
        </div>

        <div className="row no-gutters">
          {gallery.map(phote => (
            <div className="col-sm-6 col-md-4" key={phote.id}>
              <a href={phote.img} className="img-gal">
                <div className="single-imgs relative">
                  <img className="card-img rounded-0" src={phote.img} alt="" />
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-icon">
                        <i className="fas fa-plus" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
