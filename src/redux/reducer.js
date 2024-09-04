 const initialState = {
    translate: ""
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TRANSLATE":
        return {
          translate: action.payload
        }
      default:
        return state
    }
  }