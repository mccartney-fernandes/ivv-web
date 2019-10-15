import React, { useState, useEffect } from "react";
import ImgSection from "../../assets/img/home/section-style.png";
import firebase from "../../services/firebase";

// import { Container } from './styles';

export default function ContainerLideres({ pastoral }) {
  const [lideres, setLideres] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Ministros")
      .get()
      .then(snapshot => {
        let arrayLideres = [];
        snapshot.forEach(doc =>
          arrayLideres.push({ id: doc.id, ...doc.data() })
        );
        setLideres(arrayLideres);
      })
      .catch(error => console.log(error));
  }, []);

  let printLideres = [];
  let isCasalOrLideres = "";
  if (pastoral) {
    printLideres = lideres
      .filter(l => pastoral === l.cpastor)
      .sort(function(a, b) {
        if (a.level > b.level) {
          return 1;
        }
        if (a.level < b.level) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    isCasalOrLideres = "Casal Pastoral";
  } else {
    printLideres = lideres
      .filter(l => {
        if (l.departament && l.diretoria) {
          return true;
        }

        if (l.diretoria) {
          return true;
        }

        return false;
      })
      .sort(function(a, b) {
        if (a.level > b.level) {
          return 1;
        }
        if (a.level < b.level) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    isCasalOrLideres = "Diretoria";
  }
  return (
    <section className="speaker-bg section-padding">
      <div className="container">
        <div className="section-intro section-intro-white text-center pb-98px">
          <p className="section-intro__title">Líderes</p>
          <h2 className="primary-text">{isCasalOrLideres}</h2>
          <img src={ImgSection} alt="" />
        </div>

        <div className="row d-flex justify-content-center">
          {printLideres.map(l => (
            <div
              key={l.id}
              className={
                l.level <= 1
                  ? "col-lg-6 col-sm-6 mb-4 mb-lg-4"
                  : "col-lg-3 col-sm-6 mb-4 mb-lg-4"
              }
            >
              <div className="card-speaker">
                <img className="card-img rounded-0" src={l.img} alt="" />
                <div className="speaker-footer">
                  <h4>{l.name}</h4>
                  <p>{l.cargo}</p>
                </div>
                <div className="speaker-overlay">
                  <ul className="speaker-social">
                    {!!l.face ? (
                      <li>
                        <a
                          href={l.face}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                    ) : (
                      ""
                    )}

                    {!!l.insta ? (
                      <li>
                        <a
                          href={l.insta}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    ) : (
                      ""
                    )}

                    {!!l.twit ? (
                      <li>
                        <a
                          href={l.twit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className="w-100 mb-50px d-none d-lg-block" />
        </div>
      </div>
    </section>
  );
}
