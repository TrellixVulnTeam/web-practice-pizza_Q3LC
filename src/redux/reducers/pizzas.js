const initialState = {
  items: [],
  popular: [],
  cart:[],
  isLoading:false
}

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading:action.payload
      }
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoading:true
      }
    case 'SET_POP_PIZZAS':
      return {
        ...state,
        popular: action.payload,
      }
    default:
      return state
  }
}

export default pizzas;