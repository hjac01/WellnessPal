import React from "react";
// import "./style.css";

function ArticleResults(props) {
  console.log(props)
  return (
    <ul className="list-group article-results">
      {props.results.map(results => (
        <li key={results.title} className="list-group-item">
          <a href={results.link}><h4>{results.title}</h4></a>
        </li>
      ))}
    </ul>
  );
}

export default ArticleResults;