import React from "react";
import "../css/reddit-news-feed.css";

const RedditNewsFeedListItem = props => {
  return props.redditNewsFeedData.map((data, i) => {
    return (
      <li className="reddit-news-feed-list-item-box" key={i}>
        <h5 className="reddit-news-feed--title">{data.title}</h5>
        <h6 className="reddit-news-feed--posted-by">
          Posted by: <span>{data.postedBy}</span>
        </h6>
        <span className="reddit-news-feed--reddit-core">
          Reddit Score: <span>{data.redditScore}</span>
        </span>
        <a className="reddit-news-feed--reddit-linktocomments" href="#">
              {data.linkToComments}
            </a>
      </li>
    );
  });
};

export default RedditNewsFeedListItem;
