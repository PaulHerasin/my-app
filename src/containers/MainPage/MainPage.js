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
import ballet from "../../assets/images/ballet.png";
import osipov from "../../assets/images/osipov.png";
import preechal from "../../assets/images/preechal.png";
import autogis from "../../assets/images/autogis.png";
import business from "../../assets/images/business.png";
import autoparts from "../../assets/images/autoparts.png";
import salebot from "../../assets/images/salebot.png";
import maining from "../../assets/images/maining.png";
import monastic from "../../assets/images/monastic.png";
import city from "../../assets/images/city.png";

const MainPage = (props) => {
  const [cases] = useState([
    {
      id: 1,
      completed: false,
      title: "Ingenium",
      imgMain: ingenium,
      imgFull: ItsFull,
      imgPad: ItsPad,
      imgPhone: ItsPhone,
    },
    {
      id: 2,
      completed: false,
      title: "Balzar",
      imgMain: balzar,
    },
    { id: 3, completed: false, title: "Osipov", imgMain: osipov },
    { id: 4, completed: false, title: "Salebot", imgMain: salebot },
    { id: 5, completed: false, title: "Ballet", imgMain: ballet },
    { id: 6, completed: false, title: "Maining", imgMain: maining },
    { id: 7, completed: false, title: "Business", imgMain: business },
    { id: 8, completed: false, title: "Autoparts", imgMain: autoparts },
    { id: 9, completed: false, title: "Autogis", imgMain: autogis },
    { id: 10, completed: false, title: "Monastic", imgMain: monastic },
    { id: 11, completed: false, title: "Preechal", imgMain: preechal },
    { id: 12, completed: false, title: "City", imgMain: city },
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
