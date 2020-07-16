import React, { useState } from "react";

import MainScreen from "../../components/MainScreen/MainScreen";
import Portfolio from "../../components/Portfolio/Portfolio";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import { Context } from "../../context";

import ingenium from "../../assets/images/ingenium.png";
import ItsFull from "../../assets/images/ITS.png";
import ItsPad from "../../assets/images/ItsPad.png";
import ItsPhone from "../../assets/images/ItsPhone.png";

import balzar from "../../assets/images/balzar.png";
import BalzarFull from "../../assets/images/BalzarFull.png";
import BalzarPad from "../../assets/images/BalzarPad.png";
import BalzarPhone from "../../assets/images/BalzarPhone.png";

import osipov from "../../assets/images/osipov.png";
import OsipovFull from "../../assets/images/OsipovFull.png";
import OsipovPad from "../../assets/images/OsipovPad.png";
import OsipovPhone from "../../assets/images/OsipovPhone.png";

import salebot from "../../assets/images/salebot.png";
import SalebotFull from "../../assets/images/SalebotFull.png";
import SalebotPad from "../../assets/images/SalebotPad.png";
import SalebotPhone from "../../assets/images/SalebotPhone.png";

import ballet from "../../assets/images/ballet.png";
import BalletFull from "../../assets/images/BalletFull.png";
import BalletPad from "../../assets/images/BalletPad.png";
import BalletPhone from "../../assets/images/BalletPhone.png";

import maining from "../../assets/images/maining.png";
import MainingFull from "../../assets/images/MainingFull.png";
import MainingPad from "../../assets/images/MainingPad.png";
import MainingPhone from "../../assets/images/MainingPhone.png";

import business from "../../assets/images/business.png";
import BusinessFull from "../../assets/images/BusinessFull.png";
import BusinessPad from "../../assets/images/BusinessPad.png";
import BusinessPhone from "../../assets/images/BusinessPhone.png";

import autoparts from "../../assets/images/autoparts.png";
import AutopartsFull from "../../assets/images/AutopartsFull.png";
import AutopartsPad from "../../assets/images/AutopartsPad.png";
import AutopartsPhone from "../../assets/images/AutopartsPhone.png";

import autogis from "../../assets/images/autogis.png";
import AutogisFull from "../../assets/images/AutogisFull.png";
import AutogisPad from "../../assets/images/AutogisPad.png";
import AutogisPhone from "../../assets/images/AutogisPhone.png";

import monastic from "../../assets/images/monastic.png";
import MonasticFull from "../../assets/images/MonasticFull.png";
import MonasticPad from "../../assets/images/MonasticPad.png";
import MonasticPhone from "../../assets/images/MonasticPhone.png";

import preechal from "../../assets/images/preechal.png";
import PreechalFull from "../../assets/images/PreechalFull.png";
import PreechalPad from "../../assets/images/PreechalPad.png";
import PreechalPhone from "../../assets/images/PreechalPhone.png";

import city from "../../assets/images/city.png";
import CityFull from "../../assets/images/CityFull.png";
import CityPad from "../../assets/images/CityPad.png";
import CityPhone from "../../assets/images/CityPhone.png";

const MainPage = () => {
  const [cases] = useState([
    {
      id: 1,
      completed: false,
      title: "Ingenium",
      imgMain: ingenium, 
      imgFull: ItsFull,
      imgPad: ItsPad,
      imgPhone: ItsPhone,
      description:
        "компании Ingenium по перевозкам грузов по России, Европе и Снг.",
      date: "15.05.2019",
      link: "https://its-l.ru/",
    },
    {
      id: 2,
      completed: false,
      title: "Balzar",
      imgMain: balzar,
      imgFull: BalzarFull,
      imgPad: BalzarPad,
      imgPhone: BalzarPhone,
      description:
        "компании Balzar, которая производит автозапчасти из резины премиум качества в городе Балаково с 1993 года.",
      date: "11.06.2019",
      link: "https://balzap.ru/",
    },
    {
      id: 3,
      completed: false,
      title: "Петр Осипов",
      imgMain: osipov,
      imgFull: OsipovFull,
      imgPad: OsipovPad,
      imgPhone: OsipovPhone,
      description: "поддержки и продвижения Петра Осипова в Киеве.",
      date: "16.11.2018",
    },
    {
      id: 4,
      completed: false,
      title: "Salebot",
      imgMain: salebot,
      imgFull: SalebotFull,
      imgPad: SalebotPad,
      imgPhone: SalebotPhone,
      description:
        "компании Salebot, создает чат-боты для ключевых бизнес-процессов",
      date: "25.05.2019",
      link: "https://salebot.pro/",
    },
    {
      id: 5,
      completed: false,
      title: "АЛБ",
      imgMain: ballet,
      imgFull: BalletFull,
      imgPad: BalletPad,
      imgPhone: BalletPhone,
      description: "компании АЛБ - академия любительского балета",
      date: "01.05.2019",
    },
    {
      id: 6,
      completed: false,
      title: "Crypto World",
      imgMain: maining,
      imgFull: MainingFull,
      imgPad: MainingPad,
      imgPhone: MainingPhone,
      description: "компании ICrypto World",
      date: "06.06.2019",
    },
    {
      id: 7,
      completed: false,
      title: "Бизнес школа",
      imgMain: business,
      imgFull: BusinessFull,
      imgPad: BusinessPad,
      imgPhone: BusinessPhone,
      description: "продвижения Онлайн Бизнес Школы ",
      date: "27.06.2019",
    },
    {
      id: 8,
      completed: false,
      title: "Autoparts",
      imgMain: autoparts,
      imgFull: AutopartsFull,
      imgPad: AutopartsPad,
      imgPhone: AutopartsPhone,
      description: "компании Autoparts - магазин автозапчастей",
      date: "27.03.2019",
    },
    {
      id: 9,
      completed: false,
      title: "Autogis",
      imgMain: autogis,
      imgFull: AutogisFull,
      imgPad: AutogisPad,
      imgPhone: AutogisPhone,
      description: "компании Autogis - мобильный помощник водителя",
      date: "19.08.2019",
    },
    {
      id: 10,
      completed: false,
      title: "Монастик",
      imgMain: monastic,
      imgFull: MonasticFull,
      imgPad: MonasticPad,
      imgPhone: MonasticPhone,
      description:
        "компании Монастик. Отель Монастик СПА Отдых и оздоровление в Карпатах",
      date: "29.11.2018",
    },
    {
      id: 11,
      completed: false,
      title: "Preechal",
      imgMain: preechal,
      imgFull: PreechalFull,
      imgPad: PreechalPad,
      imgPhone: PreechalPhone,
      description: "портфолио",
      date: "02.03.2019",
    },
    {
      id: 12,
      completed: false,
      title: "City",
      imgMain: city,
      imgFull: CityFull,
      imgPad: CityPad,
      imgPhone: CityPhone,
      description: "портфолио",
      date: "15.03.2019",
    },
  ]);

  const [modal, setModal] = useState([]);

  const openModal = (id) => {
    setModal(
      cases
        .map((item) => {
          if (item.id === id) {
            item.completed = true;
          }
          return item;
        })
        .filter((item) => item.completed === true)
    );
    document.body.style.overflowY = "hidden";
  };

  const removeCases = () => {
    setModal(
      modal.map((item) => {
        if (item.completed === true) {
          item.completed = false;
        }
        return item;
      })
    );
    document.body.style.overflowY = "scroll";
  };

  const scrollButton = () => {
    const clientHeight = document.documentElement.clientHeight;
    window.scrollTo({
      top: clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <Context.Provider
      value={{
        openModal,
        removeCases,
        scrollButton,
      }}
    >
      <Modal modal={modal} completed={modal.completed}></Modal>
      <MainScreen></MainScreen>
      <AboutMe></AboutMe>
      <Portfolio caseItem={cases}></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </Context.Provider>
  );
};

export default MainPage;
