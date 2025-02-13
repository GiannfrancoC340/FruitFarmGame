import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // Separate multipliers for apple and orange
  const [appleMultiplier, setAppleMultiplier] = useState(1);
  const [orangeMultiplier, setOrangeMultiplier] = useState(1);
  const [bananaMultiplier, setBananaMultiplier] = useState(1);

  const updateCountApple = () => setCount(count + appleMultiplier);
  const updateCountOrange = () => setCount(count + orangeMultiplier);
  const updateCountBanana = () => setCount(count + bananaMultiplier);

  // Apple Upgrades
  const buyAppleSmallBoost = () => {
    if (count >= 10) {
      setAppleMultiplier(appleMultiplier * 2);
      setCount(count - 10);
    }
  };

  const buyAppleBoost = () => {
    if (count >= 100) {
      setAppleMultiplier(appleMultiplier * 3);
      setCount(count - 100);
    }
  };

  const buyAppleBigBoost = () => {
    if (count >= 1000) {
      setAppleMultiplier(appleMultiplier * 5);
      setCount(count - 1000);
    }
  };

  // Orange Upgrades
  const buyOrangeSmallBoost = () => {
    if (count >= 15) {
      setOrangeMultiplier(orangeMultiplier * 3);
      setCount(count - 15);
    }
  };

  const buyOrangeBoost = () => {
    if (count >= 150) {
      setOrangeMultiplier(orangeMultiplier * 6);
      setCount(count - 150);
    }
  };

  const buyOrangeBigBoost = () => {
    if (count >= 1500) {
      setOrangeMultiplier(orangeMultiplier * 9);
      setCount(count - 1500);
    }
  };

  // Banana Upgrades
  const buyBananaSmallBoost = () => {
    if (count >= 20) {
      setBananaMultiplier(bananaMultiplier * 3);
      setCount(count - 20);
    }
  };

  const buyBananaBoost = () => {
    if (count >= 200) {
      setBananaMultiplier(bananaMultiplier * 6);
      setCount(count - 200);
    }
  };

  const buyBananaBigBoost = () => {
    if (count >= 2000) {
      setBananaMultiplier(bananaMultiplier * 9);
      setCount(count - 2000);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h6>Built by: Giannfranco Crovetto, Z23622354</h6>
        <h1>Fruit Farm</h1>
        <h2>Amount of $: {count}</h2>
        <img className="apple" src="https://pngimg.com/d/apple_PNG12439.png" alt="apple" onClick={updateCountApple} />
        <img className="orange" src="https://png.pngtree.com/element_our/png/20180903/orange-png-png_75700.jpg" alt="orange" onClick={updateCountOrange} />
        <img className="banana" src="https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png" alt="banana" onClick={updateCountBanana} />
        {/*<img className="raspberry" src="https://static.vecteezy.com/system/resources/previews/022/825/589/non_2x/raspberry-fruit-raspberries-on-transparent-background-png.png" alt="raspberry"/>
        <img className="watermelon" src="https://static.vecteezy.com/system/resources/previews/034/333/584/non_2x/set-fresh-watermelon-fruit-and-sliced-on-isolated-transparent-background-free-png.png" alt="watermelon"/>
       */}
      </div>

      
      <div className="container">
        <h2>Apple Upgrades</h2>
        <h4>Current Apple multiplier: x{appleMultiplier}</h4>
        <div className="upgrade">
          <h3>Apple Boost</h3>
          <p>2x per click</p>
          <button onClick={buyAppleSmallBoost}>$10</button>
        </div>
        <div className="upgrade">
          <h3>Super Apple Boost</h3>
          <p>3x per click</p>
          <button onClick={buyAppleBoost}>$100</button>
        </div>
        <div className="upgrade">
          <h3>Ultimate Apple Boost</h3>
          <p>5x per click</p>
          <button onClick={buyAppleBigBoost}>$1000</button>
        </div>

        
        <h2>Orange Upgrades</h2>
        <h4>Current Orange multiplier: x{orangeMultiplier}</h4>
        <div className="upgrade">
          <h3>Orange Boost</h3>
          <p>3x per click</p>
          <button onClick={buyOrangeSmallBoost}>$15</button>
        </div>
        <div className="upgrade">
          <h3>Super Orange Boost</h3>
          <p>6x per click</p>
          <button onClick={buyOrangeBoost}>$150</button>
        </div>
        <div className="upgrade">
          <h3>Ultimate Orange Boost</h3>
          <p>9x per click</p>
          <button onClick={buyOrangeBigBoost}>$1500</button>
        </div>

        
        <h2>Banana Upgrades</h2>
        <h4>Current Banana multiplier: x{bananaMultiplier}</h4>
        <div className="upgrade">
          <h3>Banana Boost</h3>
          <p>3x per click</p>
          <button onClick={buyBananaSmallBoost}>$20</button>
        </div>
        <div className="upgrade">
          <h3>Super Banana Boost</h3>
          <p>6x per click</p>
          <button onClick={buyBananaBoost}>$200</button>
        </div>
        <div className="upgrade">
          <h3>Ultimate Banana Boost</h3>
          <p>9x per click</p>
          <button onClick={buyBananaBigBoost}>$2000</button>
        </div>
      </div>
    </div>
  )
}

export default App