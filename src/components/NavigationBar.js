import React, { Component } from "react";
import NavigationBarList from "./NavigationBarList";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <NavigationBarList navigationBarData={this.props.navigationBarData} />
      </div>
    );
  }
}

export default NavigationBar;
