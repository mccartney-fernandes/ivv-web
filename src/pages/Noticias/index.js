import React, { useState, useEffect } from "react";
import Template from "../../components/Template";
import BannerHome from "../../components/BannerHome";
import imgBannerIvv from "../../assets/img/banner/doze-banner.png";
import ImgSection from "../../assets/img/home/section-style.png";
import Blog from "../../components/Blog";
import firebase from "../../services/firebase";

// import { Container } from './styles';

export default function Noticias() {
  const [Post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Posts")
      .get()
      .then(snapshot => {
        let arrayPosts = [];
        snapshot.forEach(doc => arrayPosts.push({ id: doc.id, ...doc.data() }));
        const PostsNews = arrayPosts.filter(p => p.tags === "noticias");
        setPost(PostsNews);
        setLoading(false);
      })
      .catch(error => console.log("error Noticias", error));
  }, []);

  return (
    <Template>
      <BannerHome imgBanner={imgBannerIvv} />
      <div className="container">
        <div className="section-intro text-center pb-98px ">
          <h2 className="primary-text">Notícias</h2>
          <img src={ImgSection} alt="" />
        </div>
      </div>
      {loading ? (
        <p className="text-center">
          <i className="fas fa-spinner fa-5x fa-pulse mb-5" />
        </p>
      ) : Post.length <= 0 ? (
        <h1 className="text-center">Não há notícias</h1>
      ) : (
        <Blog PostList={Post} />
      )}
    </Template>
  );
}
