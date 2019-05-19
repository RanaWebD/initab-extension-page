import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/navigation-bar.css";

const NavigationBarListItem = props => {
  return props.navigationBarData.map((data, i) => {
    return (
      <div class="navigation-bar-list-item-box" key={i}>
        <span>
          <FontAwesomeIcon icon={[data.prefix, data.icon]} size="2x" class="navigation-bar-icon" style={{backgroundColor: data.color}} />
        </span>
        <span class="navigation-bar-text" style={{color: data.color}}>{data.title}</span>
        {data.lockIcon? <FontAwesomeIcon icon="lock" style={{color: "white", marginLeft: 5}}/> : "" }
        
      </div>
    );
  });
};

export default NavigationBarListItem;
