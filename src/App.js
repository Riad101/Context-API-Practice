import { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {createContext } from 'react';

export const categoryContext = createContext();

function App() {
  const {count, setCount} = useState(0);
  return (
    
    // eslint-disable-next-line react/jsx-no-undef
    <CategoryContext.Provider value={count}>
    <Header setCount={setCount}></Header>
    <Home></Home>
    </CategoryContext.Provider>
  );
}

export default App;
