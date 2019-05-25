import React from "react";
import "../css/javascript-history.css";

const JavascriptHistoryListItem = props => {
  return props.javascriptHistoryData.map((data, i) => {
    return (
      <li className="js-history-list-item" key={i}>
        <img
          className="js-history-list-item--icon"
          src="https://www.google.com/s2/favicons?domain=https://medium.com/better-programming/learning-how-to-learn-javascript-1989eeae2122"
          alt="icon"
        />
        <a href="/#" className="js-history-list-item--title">
          {data.title}
        </a>
        <span className="js-history-list-item--time">
          <time dateTime="1558113238595">2 days ago</time>
        </span>
      </li>
    );
  });
};

export default JavascriptHistoryListItem;
