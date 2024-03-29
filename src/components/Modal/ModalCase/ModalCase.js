import React from "react";
import { useDispatch } from "react-redux";

import styles from "./ModalCase.module.scss";
import ButtonLink from "./ButtonLink/ButtonLink";

import coffeSVG from "../../../assets/images/coffee-cup-on-a-plate-black-silhouettes.svg";
import appointmentSVG from "../../../assets/images/appointment.svg";
import { hideModal } from "../../../redux/actions";

const ModalCase = ({
  title,
  completed,
  imgMain,
  imgFull,
  imgPad,
  imgPhone,
  description,
  date,
  link,
  git,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.ModalCase}>
      <div className={styles.Close} onClick={() => dispatch(hideModal())}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.Container}>
        <div
          className={styles.FirstScreen}
          style={{ backgroundImage: `url(${imgMain})` }}
        >
          <h2>{title}</h2>
          <ButtonLink link={link}>Перейти на сайт</ButtonLink>
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
              <img src={imgFull} alt="full screen"></img>
            </div>
          </div>
          <div className={styles.Content}>
            <h3>{title}</h3>
            <p>Разработка landing page для {description}</p>
            <p>Верстка шаблона, адаптация под мобильные устройства.</p>

            <ul className={styles.List}>
              <li>
                <img src={appointmentSVG} alt="" />
                <span>Completed on: </span> {date}
              </li>
              <li>
                <img src={coffeSVG} alt="" />
                <span>Skills:</span> HTML5 / CSS3 / JS
              </li>
            </ul>
            <ButtonLink link={link}>Перейти на сайт</ButtonLink>
            <ButtonLink link={git}>Перейти на GitHub</ButtonLink>
          </div>
        </div>

        <h3 className={styles.AdaptiveTitle}>Адаптация</h3>

        <div className={styles.Adaptive}>
          <h3>Pad</h3>
          <div
            className={[styles.Pad, styles.Scroll, styles.ProportionImg].join(
              " "
            )}
          >
            <div className={styles.Box}>
              <img src={imgPad} alt="pad screen"></img>
            </div>
          </div>
          <h3>Phone</h3>
          <div
            className={[styles.Phone, styles.Scroll, styles.ProportionImg].join(
              " "
            )}
          >
            <div className={styles.Box}>
              <img src={imgPhone} alt="phone screen"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCase;
