import React from "react";
import { convertMonths, convertDay } from "../../helpers/dates";
import ImgNotFound from "../../assets/img/blog/img-not-found/verbo.png";

// import { Container } from './styles';

export default function Posts({ posts }) {
  return (
    <>
      {posts.map(post => (
        <article key={post.id} className="blog_item">
          {post.tumb !== "" ? (
            <>
              <div className="blog_item_img">
                <img
                  className="card-img card-img-height rounded-0"
                  src={post.tumb}
                  alt=""
                />
                <a href={`/noticia/${post.id}`} className="blog_item_date">
                  <h3>{convertDay(post.data)}</h3>
                  <p>{convertMonths(post.data)}</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href={`/noticia/${post.id}`}>
                  <h2>{post.title}</h2>
                </a>
                <p>
                  {`${post.content.substr(0, 50)}...`}
                  <a className="d-inline-block" href={`/noticia/${post.id}`}>
                    [Leia Mais]
                  </a>
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a
                      href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-user" /> Pr Walmir
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-comments" /> 03 Comments
                    </a>
                  </li> */}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="blog_item_img">
                <img
                  className="card-img card-img-height rounded-0"
                  src={ImgNotFound}
                  alt=""
                />
                <a href={`/noticia/${post.id}`} className="blog_item_date">
                  <h3>{convertDay(post.data)}</h3>
                  <p>{convertMonths(post.data)}</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href={`/noticia/${post.id}`}>
                  <h2>{post.title}</h2>
                </a>
                <p>
                  {`${post.content.substr(0, 50)}...`}
                  <a className="d-inline-block" href={`/noticia/${post.id}`}>
                    [Leia Mais]
                  </a>
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a
                      href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-user" /> Pr Walmir
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </article>
      ))}
    </>
  );
}
