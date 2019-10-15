import React, { useState, useEffect } from "react";
import ImgSection from "../../assets/img/home/section-style.png";
import Recents from "./Recents";
import firebase from "../../services/firebase";
// import { Container } from './styles';

export default function RecentsPosts() {
  let tamalhoTela = 0;
  if (window.screen.width <= 991) tamalhoTela = 1;
  else tamalhoTela = 2;

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(tamalhoTela);
  const [nextDesactive, setNextDesactive] = useState(false);
  const [prevDesactive, setPrevDesactive] = useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Posts")
      .get()
      .then(snapshot => {
        let arrayLideres = [];
        snapshot.forEach(doc =>
          arrayLideres.push({ id: doc.id, ...doc.data() })
        );
        setPosts(arrayLideres);
      });
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pagePrev = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage(currentPage - 1);
      setNextDesactive(false);
    } else {
      setPrevDesactive(true);
    }
  };

  const pageNext = () => {
    if (currentPage <= Math.ceil(posts.length / postsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
      setPrevDesactive(false);
    } else {
      setNextDesactive(true);
    }
  };
  return (
    <section className="section-margin">
      <div className="container">
        <div className="section-intro text-center pb-98px">
          <p className="section-intro__title">Postagens</p>
          <h2 className="primary-text">Últimas Postagens</h2>
          <img src={ImgSection} alt="" />
        </div>

        <div className="owl-theme owl-carousel blogCarousel pb-xl-1">
          <div
            className="row"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <a
              onClick={pagePrev}
              className={`btn-recents-posts prev ${
                prevDesactive ? "prev-next-desactive" : ""
              }`}
              href="/#!"
            >
              {prevDesactive ? (
                <i className="fas fa-exclamation-circle" />
              ) : (
                <i className="fas fa-chevron-left text-white" />
              )}
            </a>
            <Recents posts={currentPosts} />
            <a
              onClick={pageNext}
              className={`btn-recents-posts next ${
                nextDesactive ? "prev-next-desactive" : ""
              }`}
              href="/#!"
            >
              {nextDesactive ? (
                <i className="fas fa-exclamation-circle" />
              ) : (
                <i className="fas fa-chevron-right text-white" />
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
