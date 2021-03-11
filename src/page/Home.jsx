import React from 'react';
import { Slider, Pizza,PopularPizzas,SortPopup,Categories,Loading } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fechPizza,fechPopularPizza } from "../redux/actions/pizzas";

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые']
const sort = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' }]

function Home() {

  const dispatch = useDispatch()
  const {pizzas,popular,isLoading,category,sortBy} = useSelector((state) => {
    return {
      pizzas: state.pizzas.items,
      popular: state.pizzas.popular,
      isLoading: state.pizzas.isLoading,
      category: state.filters.category,
      sortBy: state.filters.sortBy
    }
  })

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  React.useEffect(() => {
    dispatch(fechPizza(category, sortBy))
  }, [category, sortBy])

  React.useEffect(() => {
    dispatch(fechPopularPizza())
  },[])
  
  const setCartItem = (id) => {
    dispatch(setCartItem(id))
  }

  return (
    <>
      <Slider />
      <div className="content">
        <div className="container">
          <PopularPizzas popular={popular}/>
          <hr />
          <div className="all__pizzas">
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__top">
              <Categories
                activeCategory={category}
                items={categories}
                onClickItem = {onSelectCategory}
              />
              <SortPopup items={sort} onSelectSortType={ onSelectSortType }/>
            </div>
            <div className="content__items">
              
              {isLoading
                ? pizzas.map((item) => <Pizza key={item.id} {...item}/>)
                : Array(8).fill('').map((_,i)=><Loading key={i} />)
              }
              
            </div>
          </div>
        </div>
        </div>
      </>
    );
}

export default Home;