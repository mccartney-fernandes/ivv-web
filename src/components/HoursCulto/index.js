import React, { useState, useEffect } from "react";
import firebase from "../../services/firebase";

// import { Container } from './styles';

export default function HoursCulto() {
  const [horarioCulto, setHorarioCulto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Horarios")
      .doc("mensagem")
      .get()
      .then(snapshot => {
        let title = snapshot.data();
        firebase
          .firestore()
          .collection("Horarios")
          .doc("mensagem")
          .collection("horas")
          .get()
          .then(snap => {
            let arrayHorario = [];
            snap.forEach(doc => arrayHorario.push(doc.data()));
            let horarioOrder = arrayHorario.sort(function(a, b) {
              if (a.level > b.level) {
                return 1;
              }
              if (a.level < b.level) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
            setHorarioCulto({ mensagem: title, horarios: horarioOrder });
            setLoading(false);
          })
          .catch(error => console.log(error));
      });
  }, []);

  /*const horarioCulto = {
    mensagem: {
      head: 'Mateus 18:20',
      content: `Pois onde se reunirem dois ou três em meu nome, ali eu estou no
    meio deles`,
    },
    horarios: [
      { id: 1, dia: 'DOM', hora: '10H' },
      { id: 2, dia: 'DOM', hora: '19H' },
      { id: 3, dia: 'QUIN', hora: '20H' },
    ],
  };*/
  const classColor = [
    "clockdiv-day",
    "clockdiv-hour",
    "clockdiv-minute",
    "clockdiv-day",
    "clockdiv-hour",
    "clockdiv-minute",
    "clockdiv-day",
    "clockdiv-hour",
    "clockdiv-minute",
    "clockdiv-day",
    "clockdiv-hour",
    "clockdiv-minute",
    "clockdiv-day",
    "clockdiv-hour",
    "clockdiv-minute"
  ];

  return (
    <section className="section-padding--small bg-gray">
      <div className="container">
        {Object.keys(horarioCulto).length !== 0 ? (
          <div className="row">
            <div className="col-lg-6 align-self-center mb-5 mb-lg-0">
              <div className="innovative-wrapper">
                <h2 className="primary-text">Horarios dos Cultos</h2>
                <p className="h4 primary-text2 mb-3">
                  {horarioCulto.mensagem.head}
                </p>
                <p>{horarioCulto.mensagem.content}</p>
              </div>
            </div>
            <div className="col-lg-6 pl-xl-5">
              <ul className="clockdiv text-center" id="clockdiv">
                {horarioCulto.horarios.map((h, index) => (
                  <li
                    key={index}
                    className={`clockdiv-single ${classColor[index]}`}
                  >
                    <h1 className="hours">{h.hora}</h1>
                    <span className="smalltext">{h.dia}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-6 align-self-center mb-5 mb-lg-0">
              <div className="innovative-wrapper">
                <h2 className="primary-text">Horarios dos Cultos</h2>
                <p>
                  {loading ? (
                    <i className="fas fa-spinner fa-2x fa-pulse mb-5" />
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
            <div className="col-lg-6 pl-xl-5">
              <ul className="clockdiv text-center" id="clockdiv">
                <li>
                  {loading ? (
                    <i className="fas fa-spinner fa-4x fa-pulse mb-5" />
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
