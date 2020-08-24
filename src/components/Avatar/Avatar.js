import React from "react";

import styles from './Avatar.module.scss';

  
export default function Avatar(props) {
  return (
    <div className={`${styles.avatar} avatar`}>
      <img src="https://via.placeholder.com/70" alt="avatar" />
    </div>
  );
}
