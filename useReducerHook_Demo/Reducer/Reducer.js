import React from "react";

function reducer(state , action){
   switch (action.type) {
    case "Add":
      return [...state , action.payload];

    case "Remove":
      return state.filter((contact) => contact.id !== action.payload.id);
   
    default:
      throw new Error();
   }
}

export default reducer ;