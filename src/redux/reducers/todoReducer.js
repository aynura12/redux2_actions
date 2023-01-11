import * as actionTypes from "../constants"
// import {Add,Sort} from "../constants"
const init = [1, 2, 3];
export const todoReducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.Add: {
      return [...state,action.payload];
    }
    case actionTypes.Sort:{
       return action.payload 
    }
    case actionTypes.Empty:{
        return action.payload
    }
    default:
      return state;
  }
};
