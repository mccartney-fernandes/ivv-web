import React from "react";

// import { Container } from './styles';

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  pagePrev,
  pageNext,
  currentP
}) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="blog-pagination justify-content-center d-flex">
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={() => pagePrev()}
            style={{ cursor: "pointer" }}
            href="#!"
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">
              <i className="fas fa-chevron-left" />
            </span>
          </a>
        </li>

        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentP === number ? "active" : ""}`}
          >
            <a
              onClick={() => paginate(number)}
              style={{ cursor: "pointer" }}
              className="page-link"
              href="#!"
            >
              {number}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a
            onClick={() => pageNext()}
            href="#!"
            className="page-link"
            aria-label="Next"
            style={{ cursor: "pointer" }}
          >
            <span aria-hidden="true">
              <i className="fas fa-chevron-right" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
