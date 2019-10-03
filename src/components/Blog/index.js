import React, { useState } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';

import './styles.css';

export default function Blog({ PostList }) {
  

  const [posts] = useState(PostList);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  const paginate = pageNumber => {setCurrentPage(pageNumber);document.documentElement.scrollTop = 400;};

  const pagePrev = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage(currentPage - 1);
    }
    document.documentElement.scrollTop = 400;
  };

  const pageNext = () => {
    if (currentPage <= Math.ceil(posts.length / postsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
    document.documentElement.scrollTop = 400;
  };

  return (
    <section className="blog_area section-margin--large">         
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">                
                    <div className="blog_left_sidebar">

                        <Posts posts={currentPosts} />

                        <Pagination
                          postsPerPage={postsPerPage}
                          totalPosts={posts.length}
                          paginate={paginate}
                          pagePrev={pagePrev}
                          pageNext={pageNext}
                          currentP={currentPage}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                        <aside className="single_sidebar_widget search_widget">
                            <form action="#">
                              <div className="form-group">
                                <div className="input-group mb-3">
                                  <input type="text" className="form-control" placeholder="Search Keyword" />
                                  <div className="input-group-append">
                                    <button className="btn" type="button"><i className="ti-search" /></button>
                                  </div>
                                </div>
                              </div>
                              <button className="button rounded-0 primary-bg text-white w-100" type="submit">Search</button>
                            </form>
                        </aside>

                        <aside className="single_sidebar_widget post_category_widget">
                          <h4 className="widget_title">Category</h4>
                          <ul className="list cat-list">
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer" className="d-flex">
                                      <p>Resaurant food</p>
                                      <p>(37)</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer" className="d-flex">
                                      <p>Travel news</p>
                                      <p>(10)</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer" className="d-flex">
                                      <p>Modern technology</p>
                                      <p>(03)</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer" className="d-flex">
                                      <p>Product</p>
                                      <p>(11)</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer" className="d-flex">
                                      <p>Inspiration</p>
                                      <p>21</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer" className="d-flex">
                                      <p>Health Care (21)</p>
                                      <p>09</p>
                                  </a>
                              </li>
                          </ul>
                        </aside>

                        <aside className="single_sidebar_widget popular_post_widget">
                            <h3 className="widget_title">Recent Post</h3>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post1.jpg" alt="post" />
                                <div className="media-body">
                                    <a href="single-blog.html">
                                        <h3>From life was you fish...</h3>
                                    </a>
                                    <p>January 12, 2019</p>
                                </div>
                            </div>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post2.jpg" alt="post" />                              
                                <div className="media-body">
                                    <a href="single-blog.html">
                                        <h3>The Amazing Hubble</h3>
                                    </a>
                                    <p>02 Hours ago</p>
                                </div>
                            </div>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post3.jpg" alt="post" />                              
                                <div className="media-body">
                                    <a href="single-blog.html">
                                        <h3>Astronomy Or Astrology</h3>
                                    </a>
                                    <p>03 Hours ago</p>
                                </div>
                            </div>
                            <div className="media post_item">
                                <img src="img/blog/popular-post/post4.jpg" alt="post" />
                                <div className="media-body">
                                    <a href="single-blog.html">
                                        <h3>Asteroids telescope</h3>
                                    </a>
                                    <p>01 Hours ago</p>
                                </div>
                            </div>
                        </aside>
                        <aside className="single_sidebar_widget tag_cloud_widget">
                            <h4 className="widget_title">Tag Clouds</h4>
                            <ul className="list">
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">project</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">love</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">technology</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">travel</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">restaurant</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">life style</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">design</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">illustration</a>
                                </li>
                            </ul>
                        </aside>


                        <aside className="single_sidebar_widget instagram_feeds">
                          <h4 className="widget_title">Instagram Feeds</h4>
                          <ul className="instagram_row flex-wrap">
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    <img className="img-fluid" src="img/instagram/widget-i1.png" alt="" />
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    <img className="img-fluid" src="img/instagram/widget-i2.png" alt="" />
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    <img className="img-fluid" src="img/instagram/widget-i3.png" alt="" />
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    <img className="img-fluid" src="img/instagram/widget-i4.png" alt="" />
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    <img className="img-fluid" src="img/instagram/widget-i5.png" alt="" />
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/pg/VERBOSANTAMARIA/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    <img className="img-fluid" src="img/instagram/widget-i6.png" alt="" />
                                  </a>
                              </li>
                          </ul>
                        </aside>


                        <aside className="single_sidebar_widget newsletter_widget">
                          <h4 className="widget_title">Newsletter</h4>

                          <form action="#">
                            <div className="form-group">
                              <input type="email" className="form-control" placeholder="Enter email" required />
                            </div>
                            <button className="button rounded-0 primary-bg text-white w-100" type="submit">Subscribe</button>
                          </form>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
