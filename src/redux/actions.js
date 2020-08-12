import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_MODAL,
  HIDE_MODAL,
  POSITION_MODAL,
  CLEAN_MODAL,
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

export function showModal(id) {
  return (dispatch) => {
    dispatch(showLoader());
    dispatch({ type: SHOW_MODAL, payload: id });
    dispatch(modalPageYOffset(window.pageYOffset));
    document.body.classList.add("ScrollNon");
    setTimeout(() => {
      document.body.classList.add("OpenModal");
      window.scrollTo(0, 0);
    }, 500);
  };
}

export function hideModal(position) {
  return (dispatch) => {
    dispatch({ type: HIDE_MODAL });
    document.body.classList.remove("OpenModal", "ScrollNon");
    window.scrollTo(0, position);
    dispatch(hideLoader());
    setTimeout(() => {
      dispatch(cleanModal());
    }, 1000);
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
