import React from "react";
import SecendMain from "./SecendMain";
import StartMain from "./ItemMain/StartMain";
class Main extends React.Component {
  render() {
    return (
      <>
        <div className=" py-4 bg-randomRad">
          <StartMain />
        </div>
        <div>
          <SecendMain />
        </div>
      </>
    );
  }
}

export default Main;
