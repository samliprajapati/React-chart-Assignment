import * as types from "./ActionType";
const initialState = {
  addingRow: false,
  addingRowError: false,
  rows: [{ Row: 0, name: "", value: "", id: "" }],

  addingCard: false,
  addingCardError: false,
  cards: [],
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ROW_REQUEST:
      return { ...state, addingRow: true };
    case types.ADD_ROW_SUCCESS:
      return {
        ...state,
        addingRow: true,
        rows: [...state.rows, action.payload],
      };
    case types.ADD_ROW_FAILURE:
      return { ...state, addingRowError: true };

    case types.ADD_CARD_REQUEST:
      return { ...state, addingCard: true };
    case types.ADD_CARD_SUCCESS:
      return {
        ...state,
        addingCard: true,
        cards: [...state.cards, action.payload],
      };
    case types.ADD_CARD_FAILURE:
      return { ...state, addingCardError: true };

    default:
      return state;
  }
};
