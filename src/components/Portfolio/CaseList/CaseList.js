import React from "react";
import { useSelector } from "react-redux";
import CaseItem from "./CaseItem/CaseItem";

import styles from "./CaseList.module.scss";

const CaseList = () => {
  const cases = useSelector((state) => {
    return state.works.cases;
  });

  return (
    <div className={styles.List}>
      {cases.map((item) => (
        <CaseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CaseList;
