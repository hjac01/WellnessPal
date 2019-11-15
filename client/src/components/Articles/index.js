import React from "react";
// import "./style.css";

function ArticleResults(props) {
  return (
    <ul className="list-group article-results">
      {props.results.map(results => (
        <li key={results} className="list-group-item">
          <img alt="Article" src={results} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default ArticleResults;