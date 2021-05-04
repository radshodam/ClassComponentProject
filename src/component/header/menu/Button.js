import React from "react";
import MenuMini from "./MenuMini";
import styles from './menu.module.css'
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
  }
  render() {
    return (
      <button type="button" onClick={this.handleClick} className={styles.button}>
        {this.state.toggle ? <MenuMini/> : "≡"}
      </button>
    );
  }
}
export default Button;
