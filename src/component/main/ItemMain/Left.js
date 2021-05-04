import React from "react";
import Down from "./Down";
import Up from "./Up";
class Left extends React.Component {
  render() {
    return (
      <>
        <div className="row flex-column align-items-center">
          <div className="col-md-6 ">
            <Up/>
          </div>
          <div className="col-md-6">
            <Down/>
          </div>
        </div>
      </>
    );
  }
}

export default Left;
