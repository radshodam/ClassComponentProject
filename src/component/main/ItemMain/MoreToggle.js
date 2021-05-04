import React from "react";
class MoreToggle extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  
    this.handleClose = this.handleClose.bind(this)
  }
  
  handleClose(e){
   const elem = document.querySelector('#some-element');
   console.log(elem) }
  render() {
    return (
      <div className="hpp" id='some-element'>
        <div className="row">
          <div className="col-md-2">
            <button onClick={this.handleClose}>close</button>
          </div>
          <div className="col-md-9">description:{this.props.name}</div>
        </div>
      </div>
    );
  }
}
export default MoreToggle;
