import React from "react";
import parse from "html-react-parser";
import { convertMonths, convertDay } from "../../helpers/dates";
import ImgNotFound from "../../assets/img/blog/img-not-found/verbo.png";

// import { Container } from './styles';
// https://scontent.fpav1-1.fna.fbcdn.net/v/t1.0-9/53221748_852268868447774_4516328050715000832_n.jpg?_nc_cat=101&_nc_oc=AQm3CKymAscDzJI-zjTDv126OxcwZeb9h0ioAL5OYj3nJnviXom1uD_lySnMQxbVTTxhmzY-RSypHJo-MvHMc19d&_nc_ht=scontent.fpav1-1.fna&oh=63a27c879f65bcf19f46e9e4a9c2267d&oe=5E34E8F9

export default function Posts({ posts }) {
  return (
    <>
      {posts.map(post => (
        <article key={post.id} className="blog_item">
          {post.tags === "noticias" ? (
            <>
              <div className="blog_item_img">
                <img
                  className="card-img card-img-height rounded-0"
                  src={post.tumb ? post.tumb : ImgNotFound}
                  alt=""
                />
                <a href={`/noticia/${post.id}`} className="blog_item_date">
                  <h3>{convertDay(post.data)}</h3>
                  <p>{convertMonths(post.data)}</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href={`/noticia/${post.id}`}>
                  <h2>{post.title} -- Teste</h2>
                </a>
                <p>
                  {`${post.content.substr(0, 50)}...`}
                  <a className="d-inline-block" href={`/noticia/${post.id}`}>
                    [Leia Mais]
                  </a>
                </p>
                {/* <ul className="blog-info-link">
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
                </ul> */}
              </div>
            </>
          ) : post.tags === "dominical" ? (
            <>
              <div className="blog_item_img">
                <a href={`/noticia/${post.id}`} className="blog_item_date">
                  <h3>{convertDay(post.data)}</h3>
                  <p>{convertMonths(post.data)}</p>
                </a>
              </div>
              <div className="blog_details border-dominical">
                <a className="d-inline-block" href={`/noticia/${post.id}`}>
                  <h2>{post.title}</h2>
                </a>
                <p>
                  {parse(post.soundCloudURL)}
                  {`${post.content.substr(0, 50)}...`}
                  <a className="d-inline-block" href={`/noticia/${post.id}`}>
                    [Leia Mais]
                  </a>
                </p>
                {/* <ul className="blog-info-link">
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
                </ul> */}
              </div>
            </>
          ) : (
            ""
          )}
        </article>
      ))}
    </>
  );
}
