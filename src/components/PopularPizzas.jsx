import React from 'react';
import pizzaDay from '../assets/img/pizza.jpg'
import { Pizza } from '../components'

function PopularPizzas({popular}) {
    return (
        <div className="popular__pizzas">
          <img src={pizzaDay} alt="" />
          <hr />
          <h2 className="content__title">Популярные пиццы</h2>
          <div className="content__items"> 
             { popular.map((item) => <Pizza key={item.id} {...item}/>)}
          </div>
        </div>
    );
}

export default PopularPizzas;