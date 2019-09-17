export default function(state, action) {
  // Compute + return new state
  // handle state
  if (state === undefined) {
    return [];
  }

  // handle action
  // if (action.type === "SET_FLATS") {
  //   return action.payload;
  // }
  // else {
  //   return state;
  // }
  switch (action.type) {
    case "SET_FLATS":
      return action.payload;
    default:
      return state;
  }
}
