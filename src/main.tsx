import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import store from './redux/store'
import { Provider } from 'react-redux'
import { AxiosInterceptor } from './assets/interceptors/axios.interceptor';

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
