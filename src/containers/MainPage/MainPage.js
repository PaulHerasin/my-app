import React, { Component } from "react";
import { connect } from "react-redux";
import GsapScrollbar from "../../components/Gsap/GsapScrollbar/GsapScrollbar"
// import Scrollbar from 'react-smooth-scrollbar';
import { hidePreloader } from "../../redux/actions";
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
      this.props.hidePreloader();
    }, 3500);
  }

  render() {
    return (
      <>
        <GsapScrollbar >
          <Toolbar></Toolbar>
          <MainScreen></MainScreen>
          <AboutMe></AboutMe>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer>
        </GsapScrollbar>
        <Modal></Modal>
        <Preloader></Preloader>
      </>
    );
  }
}

const mapDispathToProps = {
  hidePreloader,
};

export default connect(null, mapDispathToProps)(MainPage);
