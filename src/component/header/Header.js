import React from "react";
import styles from "./header.module.css";
import Button from "./menu/Button";
import Menu from "./menu/Menu";
const Header = () => {
  return (
    <div className={styles.header}>
      <Menu />
      <Button/>   
       </div>
  );
};

export default Header;
