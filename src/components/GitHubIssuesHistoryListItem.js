import React from "react";
import "../css/github-Issues-history.css";

const GitHubIssuesHistoryListItem = props => {
  return props.gitHubIssuesHistoryData.map((data, i) => {
    return (
      <li
        style={{ color: "white" }}
        key={i}
        className="github-issues-history-list-item"
      >
        <a
          className="github-issues-history-list-item--a"
          href="https://github.com/facebook/react/issues/1819"
        >
          <h5 className="github-issues-history-list-item--repo">{data.repo}</h5>
          <h6 className="github-issues-history-list-item--issue">{data.issue}</h6>
          <p className="github-issues-history-list-item--warning">{data.warning}</p>
        </a>
      </li>
    );
  });
};

export default GitHubIssuesHistoryListItem;
