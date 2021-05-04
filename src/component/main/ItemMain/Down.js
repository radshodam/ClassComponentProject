import React from "react";
import styles from "./ItemMain.module.css";

class Down extends React.Component {
  render() {
    return (
      <>
        <div className={styles.down}>
          <div>
            <button type="button" className={styles.up__button}>
             OFF
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Down;
