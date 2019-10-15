import React, { useState, useEffect } from "react";
import ImgSection from "../../assets/img/home/section-style.png";
import firebase from "../../services/firebase";

// import { Container } from './styles';

export default function ContainerDepartament({ pastoral }) {
  // const lideres = [

  //   {
  //     id: 2,
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F02%20-%20POLYNILMA.jpg?alt=media&token=dba43298-11f1-4918-abca-0c96304c070b",
  //     name: "Polynilma Brito",
  //     cargo: "Vice-presidente",
  //     cargoDepartament: "Louvor",
  //     face: "https://www.facebook.com/VERBOSANTAMARIA/?ref=page_internal",
  //     insta: "",
  //     twit: "",
  //     cpastor: true,
  //     level: 1,
  //     diretoria: true,
  //     departament: true
  //   },
  //   {
  //     id: 3,
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F03%20-%20JANE.jpg?alt=media&token=36cbd40c-2db3-4bbc-a502-a6b1ab9581e1",
  //     name: "Jane Mercia",
  //     cargo: "1º Diretor Financeiro",
  //     cargoDepartament: "",
  //     face: "",
  //     insta: "",
  //     twit: "",
  //     cpastor: false,
  //     level: 2,
  //     diretoria: false,
  //     departament: false
  //   },
  //   {
  //     id: 4,
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F04%20-%20LAICE.jpg?alt=media&token=76cefb2b-d55e-4d0f-b478-1b05fa3c108b",
  //     name: "Laice Lima",
  //     cargo: "2º Diretor Financeiro",
  //     cargoDepartament: "",
  //     face: "",
  //     insta: "",
  //     twit: "",
  //     cpastor: false,
  //     level: 3,
  //     diretoria: false,
  //     departament: false
  //   },
  //   {
  //     id: 5,
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F05%20-%20HELON.jpg?alt=media&token=42835373-9409-43a7-a57c-b2f3740a6ab3",
  //     name: "Helon Magalhães",
  //     cargo: "1º Secretário Executivo",
  //     cargoDepartament: "Jovem",
  //     face: "",
  //     insta: "",
  //     twit: "",
  //     cpastor: false,
  //     level: 4,
  //     diretoria: true,
  //     departament: true
  //   },
  //   {
  //     id: 6,
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F06%20-%20MARCIOS.jpg?alt=media&token=02d2114b-57c8-497a-a890-f9637638c319",
  //     name: "Marcius Laerte",
  //     cargo: "2º Secretário Executivo",
  //     cargoDepartament: "",
  //     face: "",
  //     insta: "",
  //     twit: "",
  //     cpastor: false,
  //     level: 5,
  //     diretoria: true,
  //     departament: false
  //   }
  // ];
  const [lideres, setLideres] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Ministros")
      .where("departament", "==", true)
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

  let printLideres = lideres
    .filter(l => l.departament)
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

  return (
    <section className="speaker-bg section-padding">
      <div className="container">
        <div className="section-intro section-intro-white text-center pb-98px">
          <p className="section-intro__title">Líderes</p>
          <h2 className="primary-text">Departamentos</h2>
          <img src={ImgSection} alt="" />
        </div>

        <div className="row d-flex justify-content-center">
          {printLideres.map(l => (
            <div key={l.id} className="col-lg-3 col-sm-6 mb-4 mb-lg-4">
              <div className="card-speaker">
                <img className="card-img rounded-0" src={l.img} alt="" />
                <div className="speaker-footer">
                  <h4>{l.cargoDepartament}</h4>
                  <p>{l.name} </p>
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
