import React from "react";
import styles from "./ItemMain.module.css";

class Up extends React.Component {
  render() {
    return (
      <>
        <div className={styles.up}>
            <button type="button" className={styles.up__button}>SALE</button>
        </div>
      </>
    );
  }
}

export default Up;
