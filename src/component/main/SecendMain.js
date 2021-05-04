import React from "react";
import SecondItems from "./ItemMain/SecondItem";
class SecendMain extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className="text-center p-4">Products of our store</h1>
          <h2 className="px-4">
            Buy everything you need at the best price from Radshodam!
          </h2>
        </div>
        <div>
          
          <SecondItems />
       
      
        </div>
      </>
    );
  }
}

export default SecendMain;
