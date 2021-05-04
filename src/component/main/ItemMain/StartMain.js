import React from "react";
import Left from "./Left";
import Right from "./Right";
class StartMain extends React.Component {
  render() {
    return (
      <div className="m-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-6">
              <Left />
            </div>
            <div className="col-md-6">
              <Right />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartMain;
