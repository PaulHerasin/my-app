import React, { Component } from "react";
import { connect } from "react-redux";

import { hideLoader } from "../../redux/actions";

import MainScreen from "../../components/MainScreen/MainScreen";
import Portfolio from "../../components/Portfolio/Portfolio";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import Preloader from "../../components/Preloader/Preloader";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class MainPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.hideLoader();
    }, 500);
  }

  render() {
    return (
      <div>
        <Preloader></Preloader>
        <Toolbar></Toolbar>
        <Modal></Modal>
        <MainScreen></MainScreen>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

const mapDispathToProps = {
  hideLoader,
};

export default connect(null, mapDispathToProps)(MainPage);
