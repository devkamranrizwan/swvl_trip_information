import React from "react";

import styles from './Avatar.module.scss';


export default function Avatar(props) {
  return (
    <div className={`${styles.avatar} avatar`}>
      <img src={props.imagePath} alt="avatar" />
    </div>
  );
}
