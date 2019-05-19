import React from "react";
import NavigationBarListItem from "./NavigationBarListItem";
import "../css/navigation-bar.css";

const NavigationBarList = props => {
  return (
    <div class="navigation-bar-list-box">
      <NavigationBarListItem navigationBarData={props.navigationBarData} />
    </div>
  );
};

export default NavigationBarList;
