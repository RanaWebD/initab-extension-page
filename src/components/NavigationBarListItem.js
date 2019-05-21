import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/navigation-bar.css";

const NavigationBarListItem = props => {
  return props.navigationBarData.map((data, i) => {
    return (
      <div className="navigation-bar-list-item-box" key={i}>
        <span className="navigation-bar-icon-box" style={{backgroundColor: data.color}}>
          <FontAwesomeIcon icon={[data.prefix, data.icon]} size="2x" className="navigation-bar-icon" />
        </span>
        <span className="navigation-bar-text" style={{color: data.color}}>{data.title}</span>
        {data.lockIcon? <FontAwesomeIcon icon="lock" style={{color: "white", marginLeft: 5}}/> : "" }
      </div>
    );
  });
};

export default NavigationBarListItem;
