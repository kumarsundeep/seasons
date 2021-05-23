import "./SeasonsDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Summers. Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Winters. Burr, it's chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  //   const text =
  //     season === "winter" ? "Burr, it's chilly!" : "Let's hit the beach!";
  //   const iconName = season === "winter" ? "snowflake" : "sun";

  // created seasonConfig and destructure it get iconName and text
  //console.log(seasonConfig[season]);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`seasons-display ${season}`}>
      <i className={`massive icon-left ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`massive icon-right ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonsDisplay;
