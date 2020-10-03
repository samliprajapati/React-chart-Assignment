import * as types from "./ActionType";

export const addRow = (data) => (dispatch) => {
  debugger;
  dispatch({
    type: types.ADD_ROW_REQUEST,
  });

  dispatch({
    type: types.ADD_ROW_SUCCESS,
    payload: data,
  });
  dispatch({
    type: types.ADD_ROW_FAILURE,
  });
};

export const addCard = (data) => (dispatch) => {
  debugger;
  dispatch({
    type: types.ADD_CARD_REQUEST,
  });

  dispatch({
    type: types.ADD_CARD_SUCCESS,
    payload: data,
  });
  dispatch({
    type: types.ADD_CARD_FAILURE,
  });
};
