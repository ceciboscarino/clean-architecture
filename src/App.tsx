import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import store, { AppStore } from './redux/store'
import { Provider, useSelector } from 'react-redux'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard, RolGuard } from './Guards'
import RoutesWithNotFound from './Utilities/routes-with-not-found';
import { Logout } from './components/Logout'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))
import { Roles } from '@/models';
import Dashboard from './pages/Private/Dashboard/Dashboard';
import { SnackbarUtilitiesConfigurator } from './Utilities/snackbar-manager';
import { SnackbarProvider } from 'notistack';

function App() {



  return (

    < div className='App'>
      <Suspense fallback={<>Loading</>}>
        <Provider store={store}>
          <SnackbarProvider>
            <SnackbarUtilitiesConfigurator />
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true}/>}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RolGuard rol={Roles.ADMIN}/>}>
                <Route path={`${PrivateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
          </SnackbarProvider>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
