const initialState = {
    counter : 0
}
export const decCount = (state = initialState, action) => {
    switch (action.type) {
      case "DECREMENT": {
        return ({...state, counter : state.counter-1});
      }
      default:
        return state;
    }
  };

 
  