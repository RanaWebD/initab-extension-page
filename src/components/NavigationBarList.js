import React from "react";
import NavigationBarListItem from "./NavigationBarListItem";

const NavigationBarList = props => {
  return (
    <div>
      <NavigationBarListItem navigationBarData={props.navigationBarData} />
    </div>
  );
};

export default NavigationBarList;
