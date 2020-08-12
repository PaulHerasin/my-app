import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Backdrop.module.scss";
import { hideModal } from "../../../redux/actions";

const Backdrop = () => {
  const dispatch = useDispatch();

  const windowScroll = useSelector((state) => {
    return state.works.positionModal;
  });

  return (
    <div
      className={styles.Backdrop}
      onClick={() => dispatch(hideModal(windowScroll))}
    ></div>
  );
};

export default Backdrop;
