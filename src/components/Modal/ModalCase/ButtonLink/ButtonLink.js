import React from "react";
import styles from "./ButtonLink.module.scss";

const buttonLink = (props) => {
  if (props.link) {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.Link}
      >
        Перейти на сайт
      </a>
    );
  } else {
    return null;
  }
};

export default buttonLink;
