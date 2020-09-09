export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASCKET":
      console.log(action);
      // logic for adding item
      return {
        ...state,
        bascket: [...state.bascket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
