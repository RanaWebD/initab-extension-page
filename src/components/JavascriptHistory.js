import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JavascriptHistoryList from "./JavascriptHistoryList";
import "../css/navigation-bar.css";

class JavascriptHistory extends Component {
  render() {
    // console.log(this.props.javascriptHistoryData)
    return (
      <section id="section-javascript-history">
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
        <JavascriptHistoryList
          javascriptHistoryData={this.props.javascriptHistoryData}
        />
      </section>
    );
  }
}

export default JavascriptHistory;
