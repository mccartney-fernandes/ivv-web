import React from "react";

// import { Container } from './styles';

export default function Recents({ posts }) {
  return posts.map((post, index) => (
    <div className="card-blog col-lg-6 col-12" key={index}>
      <img
        className="card-img"
        src={post.tumb}
        alt=""
        style={{ height: 400 }}
      />
      <div className="blog-body">
        <a href="##">
          <h3>{post.title}</h3>
        </a>
        <ul className="blog-info">
          <li>
            <a href="##">
              <i className="far fa-user" /> {post.autor_name}
            </a>
          </li>
          <li>
            <a href="##">
              <i className="far fa-clock" /> {post.data}
            </a>
          </li>
          <li>
            <a href="##">
              <i className="far fa-comment" /> {post.qtdComments}
            </a>
          </li>
        </ul>
      </div>
    </div>
  ));
}
