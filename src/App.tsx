import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './pages'
import store, { AppStore } from './redux/store'
import { useSelector } from 'react-redux'

function App() {
  
  const user = useSelector((state: AppStore) => state.user);
  
  return (
    <>
      <span>{JSON.stringify (user)}</span>
      <Home />
    </>
  );


}

export default App
