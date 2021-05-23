import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Loader from "./Loader";

// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position),
//         (err)=> console.log(err)
//     );
//     return (
//         <div>Latitute: </div>

//     );
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props); //reference to parent constructor function - here it is React.Component
  //   //1st time initializing state
  //    this.state = { lat: null, errMsg: "" };
  // }

  // this line is equivalent to constructor line as babel.js convert below line the way we write above
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //To set state use this.setState is the method
        this.setState({ lat: position.coords.latitude });

        //never use below it is bad habbit as we are again again initilizing the this.setState
        //this.state.lat = position.coords.latitude;
      },
      (err) => this.setState({ errMsg: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errMsg)
      return <SeasonsDisplay lat={this.state.lat} />;
    if (!this.state.lat && this.state.errMsg)
      return <div>Error: {this.state.errMsg}</div>;
    return <Loader message="Please accept the location" />;
  }

  render() {
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (err) => console.log(err)
    // );
    // return (
    //   <div>
    //     Latitute: {this.state.lat} <br />
    //     Error: {this.state.errMsg}
    //   </div>
    // );
    //Conditional Rendering
    // 1. if have lat no err
    // 2. if no lat show err
    // 3. if no lat no err show loading
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
