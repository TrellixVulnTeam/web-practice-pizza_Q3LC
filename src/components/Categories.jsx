import React from 'react';

const Categories = React.memo(function Categories({ activeCategory,items,onClickItem }){
  const onSelectitem = (index) => {
    onClickItem(index)
  }

  return (
         <div className="categories">
              <ul>
                <li className={activeCategory===null?'active':''} onClick={()=>{onSelectitem(null)}}>Все</li>
                {items &&
                  items.map((item, index) => (
                    <li
                      key={`${item}_${index}`}
                      className={activeCategory === index ? 'active' : ''}
                      onClick={() => { onSelectitem(index) }}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
    );
})

export default Categories;