import React, { Component } from "react";
import GitHubIssuesHistoryList from "./GitHubIssuesHistoryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/github-Issues-history.css";

class GitHubIssuesHistory extends Component {
  render() {
    return (
      <section id="section-github-issues-history">
        <h4 id="github-issues-history-heading">
        <FontAwesomeIcon icon={["fab", "github-alt"]} /> GitHub Issues
          History
        </h4>
        <div id="github-issues-history-sub-heading">
          <span id="github-issues-history-sub-heading-one">
            Issues
            <div id="github-issues-history-sub-heading-icon">
              <FontAwesomeIcon icon={"caret-up"} style={{}} />
            </div>
          </span>
          <span id="github-issues-history-sub-heading-two">Pull Requests</span>
        </div>
        <GitHubIssuesHistoryList
          gitHubIssuesHistoryData={this.props.gitHubIssuesHistoryData}
        />
      </section>
    );
  }
}

export default GitHubIssuesHistory;
