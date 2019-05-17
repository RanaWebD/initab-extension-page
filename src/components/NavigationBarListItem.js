import React from "react";

const NavigationBarListItem = props => {
  return props.navigationBarData.map(data => {
    return (
      <div>
        <span>{data.icon}</span>
        <span>{data.title}</span>
      </div>
    );
  });
};

export default NavigationBarListItem;
