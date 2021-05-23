import React from "react";

// class Loader extends React.Component {
//   render() {
//     return (
//       <div class="ui active dimmer">
//         <div class="ui big text loader">Loading</div>
//       </div>
//     );
//   }
// }

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Loader.defaultProps = {
  message: "Loading...",
};

export default Loader;
