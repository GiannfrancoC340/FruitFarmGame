import './App.css';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10)
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier( multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h6>Built by: Giannfranco Crovetto, Z23622354</h6>
        <h1>Fruit Farm</h1>
        <h2>Amount of $: {count}</h2>
        <img className="apple" src="https://pngimg.com/d/apple_PNG12439.png" alt="apple" onClick={updateCount} />
        <img className="orange" src="https://png.pngtree.com/element_our/png/20180903/orange-png-png_75700.jpg" alt="orange" onClick={updateCount} />
        {/* <img className="banana" src="https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png" alt="banana"/>
        <img className="raspberry" src="https://static.vecteezy.com/system/resources/previews/022/825/589/non_2x/raspberry-fruit-raspberries-on-transparent-background-png.png" alt="raspberry"/>
        <img className="watermelon" src="https://static.vecteezy.com/system/resources/previews/034/333/584/non_2x/set-fresh-watermelon-fruit-and-sliced-on-isolated-transparent-background-free-png.png" alt="watermelon"/>
       */}
      </div>

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>$10</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>$100</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>$1000</button>
        </div>
      </div>
    </div>
  )
}

export default App