import React, { useContext } from "react";
import { Context } from "../../../context";

import styles from "./ModalCase.module.scss";

import maintenanceSVG from "../../../assets/images/maintenance.svg";
import coffeSVG from "../../../assets/images/coffee-cup-on-a-plate-black-silhouettes.svg";
import appointmentSVG from "../../../assets/images/appointment.svg";
import silhouetteSVG from "../../../assets/images/user-silhouette.svg";

const ModalCase = ({
  id,
  title,
  completed,
  imgMain,
  imgFull,
  imgPad,
  imgPhone,
}) => {
  const { removeCases } = useContext(Context);

  const bodyLol = () => {
    document.body.style.overflowY = "scroll";
  };

  return (
    <div className={styles.ModalCase}>
      <div
        className={styles.Close}
        onClick={() => [bodyLol(), removeCases(completed)]}
      >
        <div></div>
        <div></div>
      </div>
      <div className={styles.Container}>
        <div
          className={styles.FirstScreen}
          style={{ backgroundImage: `url(${imgMain})` }}
        >
          <h2>{title}</h2>
          <a className={styles.Link}>Перейти на сайт</a>
        </div>

        <div className={styles.Laprop}>
          <div
            className={[
              styles.FullScreen,
              styles.Scroll,
              styles.ProportionImg,
            ].join(" ")}
          >
            <div className={styles.Box}>
              <img src={imgFull}></img>
            </div>
          </div>
          <div className={styles.Content}>
            <h3>{title}</h3>
            <p>
              Разработка landing page для компании Ingenium по перевозкам грузов
              по России, Европе и Снг.
            </p>
            <p>Верстка шаблона, адаптация под мобильные устройства.</p>

            <ul className={styles.List}>
              <li>
                <img src={silhouetteSVG} alt="" />
                <span>Created by:</span> Pavel
              </li>
              <li>
                <img src={appointmentSVG} alt="" />
                <span>Completed on: </span> 29.11.2018
              </li>
              <li>
                <img src={coffeSVG} />
                <span>Skills:</span> HTML5 / CSS3 / JS
              </li>
              <li>
                <img src={maintenanceSVG} alt="" />
                <span>Category:</span> Web
              </li>
            </ul>
            <a className={styles.Link}>Перейти на сайт</a>
          </div>
        </div>

        <h3 className={styles.AdaptiveTitle}>Адаптация</h3>

        <div className={styles.Adaptive}>
          <div
            className={[styles.Pad, styles.Scroll, styles.ProportionImg].join(
              " "
            )}
          >
            <div className={styles.Box}>
              <img src={imgPad}></img>
            </div>
          </div>
          <div
            className={[styles.Phone, styles.Scroll, styles.ProportionImg].join(
              " "
            )}
          >
            <div className={styles.Box}>
              <img src={imgPhone}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCase;
