import { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';


function App() {
  const [count, setCount] = useState(0);
  return (      
    
    <div>
      <p>Count Value: {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </div>
    
    
  );
}

export default App;
