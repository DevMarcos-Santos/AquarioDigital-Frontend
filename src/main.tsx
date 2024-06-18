
import ReactDOM from 'react-dom/client'
import '../global.css'
import Login from './pages/login'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthProvider'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import Peixe from './pages/peixe'
import Subscribe from './pages/subscribe'
import PrivateRouteAuthenticated from './utils/PrivateRouteAuthenticated'
import NotFound from './pages/404'
import Aquarismo from './pages/aquarismo'
import Pesca from './pages/pesca'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Toaster position='top-right'/>
  <AuthProvider>
      <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastro" element={<Subscribe/>}/>
            <Route path="/pesca" element={<Pesca/>}/>
            <Route path="/BuscarPeixes" element={<Home/>}/>
            <Route path="/peixe/:nome/:id" element={<Peixe/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/aquarismo" element={<Aquarismo/>}/>
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
