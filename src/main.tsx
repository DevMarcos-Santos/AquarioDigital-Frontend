import React from 'react'
import ReactDOM from 'react-dom/client'
import '../global.css'
import Login from './pages/login'
import { Toaster } from 'react-hot-toast'
import { AuthContext, AuthProvider } from './context/AuthProvider'
import { UseAuth } from './context/AuthProvider/useAuth'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import Peixe from './pages/peixe'
import Subscribe from './pages/subscribe'
import PrivateRouteAuthenticated from './utils/PrivateRouteAuthenticated'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Toaster position='top-right'/>
  <AuthProvider>
      <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/subscribe" element={<Subscribe/>}/>
           
            <Route path="/home" element={<Home/>}/>
            <Route path="/fish/:nome/:id" element={<Peixe/>}/>

            <Route element={<PrivateRoutes/>}>
                
               
            </Route>

            <Route element={<PrivateRouteAuthenticated/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>
            
        </Routes>
      </BrowserRouter>  
  </AuthProvider>
  </>
  
)
