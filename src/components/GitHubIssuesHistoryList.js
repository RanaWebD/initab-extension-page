import React from "react";
import GitHubIssuesHistoryListItem from "./GitHubIssuesHistoryListItem";
import "../css/github-Issues-history.css";

const GitHubIssuesHistoryList = props => {
  return (
    <ul id="github-issues-history-list">
      <GitHubIssuesHistoryListItem gitHubIssuesHistoryData={props.gitHubIssuesHistoryData} />
    </ul>
  );
};

export default GitHubIssuesHistoryList;
