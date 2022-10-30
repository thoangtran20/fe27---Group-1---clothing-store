import React from "react";
import styles from "./Loader.module.scss";
import bg_loading from "../../assets/bg_loading.png";
import  ReactDOM  from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={bg_loading} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
