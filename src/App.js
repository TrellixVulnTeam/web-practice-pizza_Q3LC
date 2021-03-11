import React from 'react'
import './scss/app.scss'
import logoSvg from './assets/img/pizza-logo.png'
import { Header,Footer } from './components'
import { Home,Cart } from './page'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="wrapper">
      <Header logoSvg={logoSvg} />
        <Route exact path={'/'} component={ Home }/>
        <Route exact path={'/cart'} component={Cart} />
      </div>
      <Footer />
    </>
  );
}

export default App;
