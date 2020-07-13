import React from "react";

import CaseItem from "./CaseItem/CaseItem";

import styles from "./CaseList.module.scss";

const caseList = ({ caseItem }) => {
  return (
    <div className={styles.List}>
      {caseItem.map((item) => (
        <CaseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default caseList;
