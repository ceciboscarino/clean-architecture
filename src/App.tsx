import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './pages'
import store, { AppStore } from './redux/store'
import { useSelector } from 'react-redux'
import { Login, Dashboard } from './pages'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard } from './Guards'


function App() {

  const user = useSelector((state: AppStore) => state.user);

  return (

    < div className='App'>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to= {PrivateRoutes.PRIVATE}/>}/>
        <Route path="*" element={<>NOT FOUND</>}/>
        <Route path= {PublicRoutes.LOGIN} element={<Login/>}/>
        <Route element= {<AuthGuard/>}>
          <Route path= {`${PrivateRoutes.DASHBOARD}/*`} element={<Dashboard/>}/>
        </Route>
      </Routes>
      

      </BrowserRouter>
      
    </div>
  )
}

export default App
