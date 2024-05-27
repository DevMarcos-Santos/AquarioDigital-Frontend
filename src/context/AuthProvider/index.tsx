import {createContext, useEffect, useState,} from "react";
import { IAuthProvider, IContext } from "./types";
import { peixelandia_api } from "../../services/apiService";
import toast from "react-hot-toast";



export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<string | undefined>(undefined);
   
    

    useEffect(() => {
       const storedUser = localStorage.getItem("u");

        if(storedUser){
            setUser(storedUser);
        }
      
       
    }, [])

     function  authenticate (email: string, password: string){
    
        return new Promise<void>((resolve) => {

        
    const data = {
        email: email,
        password: password
    }
    

        peixelandia_api.post("/users/auth", data).then(function(response){
            toast.success("Login efetuado com sucesso!");
            localStorage.setItem("u", JSON.stringify(response.data));
            window.location.href = "/BuscarPeixes";
            resolve();

            
               
               
              
               
            
            
           
            
        
        
        }).catch(function(){
            toast.error("Dados de login incorretos!");
        });
    });
}

    function logout(){
         setUser(undefined);
        localStorage.removeItem("u");

    }

    return (
        
        <AuthContext.Provider value={{ user, authenticate ,logout }}>
            {children}
        </AuthContext.Provider>
    )
}