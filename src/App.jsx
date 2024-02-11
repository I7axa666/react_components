import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopItemFunc from './shopItemFunc'
import ShopItemClass from './shopItemClass'
import Calendar from './calendar'

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  const now = new Date();

  return (
    <>
    <div className="calendar">
      <Calendar date={now} />
    </div>
    <div className="container1">
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>
      </div>
    </div>
    <div className="container2">
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemClass item={item} />
        </div>
      </div>
    </div>

    </>
  )
}

export default App
