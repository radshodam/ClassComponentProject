import React from "react";
import ListMenu from "./ListMenu";
import styles from "./menu.module.css";

class MenuMini extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { name: "Home", href: "/home", id: 1 },
        { name: "About", href: "/about", id: 2 },
        { name: "Product", href: "/product", id: 3 },
        { name: "Contact", href: "/contact", id: 4 },
      ],
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
      <>
        <ul className={styles.menuFlexAdd}>
          {this.state.lists.map((list, id) => {
            //   const[name,href]=list
            return <ListMenu className={styles.items} {...list} />;
          })}
        </ul>
      </>
    );
  }
}
export default MenuMini;
