import { useContext, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import { peixelandia_api } from "../services/apiService";
import toast from "react-hot-toast";
import { loginto } from "../context/AuthProvider/util";
import { UseAuth } from "../context/AuthProvider/useAuth";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = UseAuth();

    

    
    async function onFinish(){
       
          await  auth.authenticate(email, password);
       
    
   }
    
    

    return (
        <div className="h-screen bg-cover bg-no-repeat flex justify-center items-center " style={{backgroundImage: 'url(./src/assets/images/banner.jpg)'}}>
            <div className="bg-white w-[450px] h-[500px] rounded-3xl flex flex-col items-center">
                <div className="mt-8 flex">
                    <img className="w-16" src="./src/assets/images/iconFish.png"/>
                </div>
                <div>
                    <h1 className="font-medium text-2xl">Aquário Digital</h1>
                </div>
               
                    <div className="mt-6">
                        <Input value={email}  type="email" Children="Email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-2">
                        <Input value={password} type="password" Children="Senha" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="mt-6">
                        <Button onClick={onFinish} type="submit" children="Entrar"/>
                    </div>
                    <div className="mt-10">
                        <p>Ainda não possui uma conta? <Link to={"/subscribe"} className="text-black font-bold underline">Inscreva-se</Link></p>
                    </div>
                    <div className="mt-2">
                        <a className="text-black underline font-bold">Esqueci a senha</a>
                    </div>
                
            </div>
            
        </div>
    )
}