import React, { useContext } from "react";
import { Context } from "../../../context";

import CaseItem from "./CaseItem/CaseItem";

import styles from "./CaseList.module.scss";

const CaseList = () => {
  const { CASES } = useContext(Context);

  return (
    <div className={styles.List}>
      {CASES.map((item) => (
        <CaseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CaseList;
