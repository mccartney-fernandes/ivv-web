import React from 'react';

// import { Container } from './styles';

export default function Footer() {
  const feed = [
    {
      id: 1,
      img: `https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/49678534_818227801851881_8874231770246021120_n.jpg?_nc_cat=104&_nc_oc=AQlX53vtjcNZGtW1iE-6aVh7p1A4DTrR2o647Hjo_cgFqvPNDf_T-fAJmfQqA86A5MA&_nc_ht=scontent.frec7-1.fna&oh=da070180672187e6152290f2ad7b73ab&oe=5DC9F4CB`,
    },
    {
      id: 2,
      img: `https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/68429832_959201434421183_4007675958612983808_n.jpg?_nc_cat=104&_nc_oc=AQnWHGFXKxyq3PIFHNDtFFbmn1UxG7P_AUHHQm8DuAFpHTALiLniPpbpG9A5gR1oz4s&_nc_ht=scontent.frec7-1.fna&oh=c15457aef3899283a820d664d6c5e545&oe=5DD69F94`,
    },
    {
      id: 3,
      img: `https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/49540995_818226668518661_653175143157202944_n.jpg?_nc_cat=108&_nc_oc=AQn6gtAQWfvDzTtd2i72RGVE5Q4H71S3vyTKArgdlPhSFFdGzFF74IeukyqV4TLszrQ&_nc_ht=scontent.frec7-1.fna&oh=8faa0ec313543f8eb1c98cec9b92adfd&oe=5DD69D9F`,
    },
    {
      id: 4,
      img: `https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/48377207_807261232948538_1661418032993402880_n.jpg?_nc_cat=108&_nc_oc=AQn2gfk7EsREJMjdSEmkYXtyFlJuyfhA5JaiNvuwTAt9vPrkFjlc82yjoDrlL8AWsWU&_nc_ht=scontent.frec7-1.fna&oh=0695357860edd32596f80da35c6da476&oe=5DCFF2B4`,
    },
    {
      id: 5,
      img: `https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/49605972_818227428518585_7703417693877043200_n.jpg?_nc_cat=103&_nc_oc=AQmf1okZlMQLGUUkVuyDeWNHofPRoWUrCjz5Qtk2teC4mahVIovAAGv3gpk3dJVRNG0&_nc_ht=scontent.frec7-1.fna&oh=6acccad12927296d32912ac17bb4e7a3&oe=5DC9C8B2`,
    },
    {
      id: 6,
      img: `https://scontent.frec7-1.fna.fbcdn.net/v/t1.0-9/49385902_818227858518542_6593708864552566784_n.jpg?_nc_cat=110&_nc_oc=AQmNiHjItx1qKNjkz_wBINkzavlQJCiV8ZVgoZtiypP4lm6zwodzAG2NQ1ohPJ76kXE&_nc_ht=scontent.frec7-1.fna&oh=0ffe7aaea89b48abf69183bb10c9be30&oe=5DDDD2DA`,
    },
  ];
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Igreja Verbo da Vida - Santa Maria da Boa Vista - PE</h6>
              <p>
                A Bíblia é a Palavra inspirada de Deus, produto de homens santos
                do passado que falaram e escreveram conforme eram movidos pelo
                Espírito Santo. Aceitamos a Nova Aliança, registrada no Novo
                Testamento, como nosso guia infalível em assuntos concernentes à
                conduta e doutrina (2Tm 3.16, 1Ts 2.13 e 1Pe 1.21).
              </p>
            </div>
          </div>

          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Receba as novidadas da nossa igreja.</p>
              <div id="mc_embed_signup">
                <form className="subscription relative">
                  <div className="input-group d-flex flex-row">
                    <input
                      name="EMAIL"
                      placeholder="Endereço de E-mail"
                      required
                      type="email"
                    />
                    <button className="btn bb-btn">
                      <i className="far fa-paper-plane" />
                    </button>
                  </div>
                  <div className="mt-10 info" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Feeds do Instagram</h6>
              <ul className="instafeed d-flex flex-wrap">
                {feed.map(f => (
                  <li key={f.id}>
                    <img src={f.img} width="50" height="50" alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
              {' '}
              Template reestruturado para componentes ReactJs por M.I.H.A
              Sistemas. This template is made with | rights reserved | Copyright
              &copy; {new Date().getFullYear()} All
              <i className="fa fa-heart" aria-hidden="true" /> by{' '}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
            </p>
            <div className="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
              <a href="/#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="/#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
