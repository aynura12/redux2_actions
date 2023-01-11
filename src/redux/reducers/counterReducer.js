
export const counterReducer = (state=0, action) => {
  switch (action.type) {
    case "Increment": {
      return state + 1;
    }
    case "Decrement": {
      return state - 1;
    }
    case "Reset": {
      return state = 0;
    }
    case "Hasil": {
      return state * 5;
    }

    default:
      return state
  }
};
export default counterReducer