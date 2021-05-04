import React from "react";
import styles from './list.module.css';
class ListMenu extends React.Component {
  render() {
    return (
      <li>
        <a  className={`px-3 ${styles.list}`} href={this.props.href}>{this.props.name}</a>
      </li>
    );
  }
}
export default ListMenu;
