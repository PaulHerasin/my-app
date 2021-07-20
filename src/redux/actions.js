import {
  SHOW_PRELOADER,
  HIDE_PRELOADER,
  SHOW_MODAL,
  HIDE_MODAL,
  POSITION_MODAL,
  CLEAN_MODAL,
  SHOW_LOADER,
  HIDE_LOADER
} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showPreloader() {
  return {
    type: SHOW_PRELOADER,
  };
}

export function hidePreloader() {
  return {
    type: HIDE_PRELOADER,
  };
}

export function showModal(id) {
  return (dispatch) => {
    document.body.classList.add("ScrollNon");
    dispatch(showLoader());

    setTimeout(() => {
      dispatch(modalPageYOffset(window.pageYOffset));
      document.body.classList.add("OpenModal");
      dispatch({ type: SHOW_MODAL, payload: id });
      dispatch(hideLoader());
    }, 2000);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2500);
  };
}

export function hideModal(position) {
  return (dispatch) => {
    dispatch(showLoader());
    document.body.classList.remove("OpenModal");

    setTimeout(() => {
      dispatch(hideLoader());
      dispatch({ type: HIDE_MODAL });
    }, 2000)

    setTimeout(() => {
      document.body.classList.remove("ScrollNon");
      window.scrollTo(0, position);
      dispatch(cleanModal());
    }, 2500);
  };
}

export function modalPageYOffset(positionModal) {
  return {
    type: POSITION_MODAL,
    payload: positionModal,
  };
}

export function cleanModal() {
  return {
    type: CLEAN_MODAL,
  };
}
