
import { Navigate, Outlet } from "react-router-dom";
import { peixelandia_api } from "../services/apiService";
import { useEffect, useState } from "react";



export default function PrivateRoutes(){

    const tokenString = localStorage.getItem("u");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(tokenString != null){
            const tokenObj = JSON.parse(tokenString);
            
            peixelandia_api.defaults.headers.common.Authorization = `Bearer ${tokenObj["token"]}`;
            peixelandia_api.get("/users/validateToken").then(resp => {
                if(resp.status === 403){
                    setIsAuthenticated(false);
                }else{
                    setIsAuthenticated(true);
                    
                }       
                setLoading(false);
            }).catch(() => {
                setIsAuthenticated(false);
                setLoading(false);
            });
        }else{
            setLoading(false);
        }
    }, [tokenString])

    if(loading){
        return <div className=" h-screen text-4xl font-bold flex justify-center flex-col items-center te">
                   
                    Carregando  ...
                </div>
    }

    
    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
   
}