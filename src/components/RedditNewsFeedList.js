import React from "react";
import RedditNewsFeedListItem from "./RedditNewsFeedListItem";
import "../css/navigation-bar.css";

const RedditNewsFeedList = props => {
  return (
    <ul id="reddit-news-feed-list"> 
      <RedditNewsFeedListItem redditNewsFeedData={props.redditNewsFeedData} />
    </ul>
  );
};

export default RedditNewsFeedList;
