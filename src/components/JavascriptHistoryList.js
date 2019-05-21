import React from "react";
import JavascriptHistoryListItem from "./JavascriptHistoryListItem";
import "../css/javascript-history.css";

const JavascriptHistoryList = props => {
  return (
    <ul id="javascript-history-list">
      <JavascriptHistoryListItem javascriptHistoryData={props.javascriptHistoryData} />
    </ul>
  );
};

export default JavascriptHistoryList;
