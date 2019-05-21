import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "./components/NavigationBar";
import RedditNewsFeed from "./components/RedditNewsFeed";
import JavascriptHistory from "./components/JavascriptHistory";
import GitHubIssuesHistory from "./components/GitHubIssuesHistory";
import TimeSection from "./components/TimeSection";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faWrench,
  faCode,
  faChartLine,
  faPencilAlt,
  faQuestion,
  faLock,
  faQuestionCircle,
  faTimesCircle,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
library.add(
  fab,
  faWrench,
  faCode,
  faChartLine,
  faPencilAlt,
  faLightbulb,
  faQuestion,
  faLock,
  faQuestionCircle,
  faTimesCircle,
  faCaretUp
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationBarData: [],
      redditNewsFeedData: [],
      javascriptHistoryData: [],
      gitHubIssuesHistoryData: []
    };
  }

  componentDidMount() {
    axios
      .get("navigation-bar-data.json")
      .then(res => this.setState({ navigationBarData: res.data }));
    axios
      .get("redditNews-feed-data.json")
      .then(res => this.setState({ redditNewsFeedData: res.data }));
    axios
      .get("javascript-history-data.json")
      .then(res => this.setState({ javascriptHistoryData: res.data }));
    axios
      .get("gitHub-issues-history.json")
      .then(res => this.setState({ gitHubIssuesHistoryData: res.data }));
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: "flex" }}>
          <NavigationBar
            navigationBarData={this.state.navigationBarData}
            style={{ flex: 1 }}
          />
          <div id="main" style={{ flex: 10 }}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <RedditNewsFeed
                  redditNewsFeedData={this.state.redditNewsFeedData}
                />
              </div>
              <div style={{ flex: 2 }}>
                <JavascriptHistory
                  javascriptHistoryData={this.state.javascriptHistoryData}
                />
                <TimeSection />
              </div>
              <div style={{ flex: 1 }}>
                <GitHubIssuesHistory
                  gitHubIssuesHistoryData={this.state.gitHubIssuesHistoryData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
