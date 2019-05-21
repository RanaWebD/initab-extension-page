import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/time-section.css";
import moment from "moment";

class TimeSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: ""
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <section id="section-Time">
        <div id="time-box">
          <div>
            <span id="hours-minutes-text">
              {
                moment()
                  .format("LT")
                  .split(" ")[0]
              }
            </span>
            <span id="ampm-text">
              {
                moment()
                  .format("LT")
                  .split(" ")[1]
              }
            </span>
          </div>
          <div id="time-note">
            <span>
              Did you know you can add CUSTOM LINKS to display in this section?
              <FontAwesomeIcon
                icon={"question-circle"}
                style={{
                  color: "#ffb86c",
                  height: 16,
                  width: 16,
                  marginRight: 5
                }}
              />
            </span>
            <br />
            Open the SETTINGS panel and add the URLs of your favorites sites to
            the 'CUSTOM LINKS' textarea.
            <div id="time-dont-show-me-btn">
              <FontAwesomeIcon
                icon={"times-circle"}
                style={{
                  color: "#ffb86c",
                  height: 16,
                  width: 16,
                  marginRight: 5
                }}
              />
              Got it! Don't show me this again.
            </div>
            <div />
          </div>
        </div>
      </section>
    );
  }
}

export default TimeSection;
