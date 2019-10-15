import React from "react";
import parse from "html-react-parser";
import { reOrderDate } from "../../helpers/dates";

import "./styles.css";

export default function SingleBlog({ post }) {
  function countComments(comments) {
    let countComments = comments.filter(comment => comment.verified === true);
    return countComments.length <= 1
      ? `${countComments.length} Comentário`
      : `${countComments.length} Comentários`;
  }

  return (
    <section className="blog_area single-post-area section-margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 posts-list">
            <div className="single-post">
              <div className="feature-img">
                <img className="img-fluid-single-post" src={post.tumb} alt="" />
              </div>
              <div className="col-lg-3  col-md-3"></div>
              <div className="blog_details">
                <h2>{post.title}</h2>
                <ul className="blog-info-link mt-3 mb-4">
                  <li>
                    <i className="far fa-calendar-alt" />{" "}
                    {reOrderDate(post.data)}
                  </li>
                  <li>
                    <i className="far fa-comments" />{" "}
                    {countComments(post.comments)}{" "}
                  </li>
                </ul>
                <p className="excert">
                  {post.soundCloudURL ? parse(post.soundCloudURL) : ""}
                  {post.content}
                </p>
              </div>
            </div>

            <div className="blog-author">
              <div className="media align-items-center">
                <img src={post.autor_tumb} alt="" />
                <div className="media-body">
                  <ul className="social-links social-links-autor">
                    <li>
                      <i className="far fa-user" />
                      &nbsp; Autor
                    </li>
                    <li>
                      {post.autor_face ? (
                        <a
                          href={post.autor_face}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </li>
                    <li>
                      {post.autor_insta ? (
                        <a
                          href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </li>
                    <li>
                      {post.autor_youtu ? (
                        <a
                          href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-youtube" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </li>
                  </ul>
                  <h4>{post.autor_name}</h4>
                  <p>{post.autor_cargo}</p>
                </div>
              </div>
            </div>

            <div className="comments-area">
              <h4>{countComments(post.comments)}</h4>
              {post.comments.map((comments, index) => {
                if (!comments.verified) {
                  return <span key={index}></span>;
                }

                return (
                  <div key={index} className="comment-list">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src={comments.tumb} alt="" />
                        </div>
                        <div className="desc">
                          <p className="comment">{comments.comment}</p>

                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <a
                                  href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {comments.name}
                                </a>
                              </h5>
                              <p className="date">
                                {reOrderDate(comments.data)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="comment-form">
              <form
                className="form-contact comment_form"
                action="#"
                id="commentForm"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="9"
                        placeholder="Write Comment"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="website"
                        id="website"
                        type="text"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="button button-contactForm">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
