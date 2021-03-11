export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload:items
})

export const setPopularPizzas = (items) => ({
    type: 'SET_POP_PIZZAS',
    payload:items
})

export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload:loading
})

export const fechPizza = (category, sortBy) => (dispatch) => {
    dispatch(setLoading(false))
    fetch(`http://localhost:3001/pizzas?${category !== null ? `category=${category}`:``}&_sort=${sortBy}&_order=desc`)
      .then(response => response.json())
      .then(json => dispatch(setPizzas(json)))
}

export const fechPopularPizza = () => (dispatch) => {
    fetch('http://localhost:3001/popularPizzas')
      .then(response => response.json())
      .then(json => dispatch(setPopularPizzas(json)))
}