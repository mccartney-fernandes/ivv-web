import React, { useState, useEffect, useCallback } from "react";
import Template from "../../Template";
import BannerHome from "../../BannerHome";
import imgBannerIvv from "../../../assets/img/banner/doze-banner.png";
import SingleBlog from "../../SingleBlog";
import firebase from "../../../services/firebase";

// {
//   id: 0,
//   title: "Renascimento Batismo nas águas",
//   content: `No último dia 22/06, em uma manhã de sábado, festejamos o renascimento de 15 novas pessoas.
//   .
//   O batismo nas águas é uma simbologia bíblica que retrata a transformação de uma vida. Uma vez que descemos as águas, significa que não somos mais os menos, o velho homem ficou afogado em um passado perdoado por Deus o qual não devemos mais ressuscita-lo.
//   .
//   Estamos vivendo um novo tempo em nossa igreja. Venha fazer parte do nosso crescimento.`,
//   tumb:
//     "https://scontent.fpav1-1.fna.fbcdn.net/v/t1.0-9/65482603_930442643963729_7345452476360818688_n.jpg?_nc_cat=103&_nc_oc=AQn10M7RKcNJhU1IupjKmDpn6_a2KupXVT2bNZVNbFvyUcP5ADmB-nVfWYsk_QZHozxJCpMgIAZLqGUlrSkaXiQ8&_nc_ht=scontent.fpav1-1.fna&oh=9deaf5d33d4c926683c5fe65054b92a6&oe=5E35D592",
//   data: "2019-06-22",
//   autor_tumb:
//     "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F01%20-%20WALMIR.jpeg?alt=media&token=20bb3e3f-8a67-42b8-aec0-84852a722b90",
//   autor_name: "Pr Walmir Ferreira",
//   autor_cargo:
//     "Pastor Presidente da Igreja Verbo da Vida de Santa Maria da Boa Vista - PE",
//   autor_face: "https://www.facebook.com/pg/VERBOSANTAMARIA/",
//   autor_insta: "https://www.facebook.com/pg/VERBOSANTAMARIA/",
//   autor_youtu: "https://www.facebook.com/pg/VERBOSANTAMARIA/",
//   comments: [
//     {
//       tumb:
//         "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F06%20-%20MARCIOS.jpg?alt=media&token=02d2114b-57c8-497a-a890-f9637638c319",
//       comment:
//         "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
//       name: "Marcius Laerte",
//       data: "2019-06-22",
//       verified: true
//     },
//     {
//       tumb:
//         "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F04%20-%20LAICE.jpg?alt=media&token=76cefb2b-d55e-4d0f-b478-1b05fa3c108b",
//       comment:
//         "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
//       name: "Laice Lima",
//       data: "2019-06-22",
//       verified: false
//     },
//     {
//       tumb:
//         "https://firebasestorage.googleapis.com/v0/b/ivvsantamaria.appspot.com/o/lideres%2F05%20-%20HELON.jpg?alt=media&token=42835373-9409-43a7-a57c-b2f3740a6ab3",
//       comment:
//         "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
//       name: "Helon Magalhães",
//       data: "2019-06-22",
//       verified: true
//     }
//   ]
// },

// import { Container } from './styles';

export default function Noticia({ match }) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCommentsPost = useCallback(
    docPost => {
      firebase
        .firestore()
        .collection("Posts")
        .doc(match.params.id)
        .collection("comments")
        .get()
        .then(snapshot => {
          let arrayComments = [];
          snapshot.forEach(doc =>
            arrayComments.push({ id: doc.id, ...doc.data() })
          );
          console.log({ ...docPost, comments: arrayComments });
          setPost({ ...docPost, comments: arrayComments });
          setLoading(false);
        })
        .catch(error => console.log("error Noticias", error));
    },
    [match.params.id]
  );

  useEffect(() => {
    firebase
      .firestore()
      .collection("Posts")
      .doc(match.params.id)
      .get()
      .then(snapshot => {
        loadCommentsPost(snapshot.data());
      })
      .catch(error => console.log("error Noticias", error));
  }, [loadCommentsPost, match.params.id]);

  return (
    <Template>
      <BannerHome imgBanner={imgBannerIvv} />
      {loading ? (
        <p className="text-center">
          <i className="fas fa-spinner fa-5x fa-pulse mb-5 mt-5" />
        </p>
      ) : (
        <SingleBlog post={post} />
      )}
    </Template>
  );
}
