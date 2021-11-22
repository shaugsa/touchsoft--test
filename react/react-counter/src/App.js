import {React, useState} from 'react';
import "./App.css"


export default function App() {
  const [count, setCounter] = useState(0);
  const colorBody = {background: 'red'}

  const increment = () => {
    setCounter(count => count + 1)
    colorBody.background = 'green'
  };

  const dicrement = () => {
    if (count > 0) {
      setCounter(count => count - 1)
    }
  }

  const reset = () => {
    setCounter(0)
  }



  return (
      <div className="wrap">
        <div className="counter">
          <div className="wrap__output">
            <span className="counter__output">{count}</span>
          </div>
          <span className="counter__text">Введенное число</span>
          <div clasName="btn__container">
            <button className=" btn control__btn" onClick={dicrement}>-</button>
            <button className=" btn reset" onClick={reset}>Reset</button>
            <button className="btn control__btn" onClick={increment}>+</button>
          </div>
        </div>
      </div>
  )
}




