import React, { Component } from "react";
import RedditNewsFeedList from "./RedditNewsFeedList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/navigation-bar.css";

class RedditNewsFeed extends Component {
  render() {
    return (
      <section id="section-reddit-news-feed">
        <h4 className="section-title">
          <FontAwesomeIcon
            icon={["fab", "reddit-alien"]}
            style={{
              color: "#8be9fd",
              height: 16,
              width: 16,
              marginRight: 5
            }}
          />
          POPULAR ON R/JAVASCRIPT
        </h4>
        <RedditNewsFeedList
          redditNewsFeedData={this.props.redditNewsFeedData}
        />
      </section>
    );
  }
}

export default RedditNewsFeed;
