import { useState } from "react";
import { Link } from "react-router-dom";
import perfil from "../assets/images/perfil.png";
import icon from "../assets/images/iconFish.png";



export default function Header(){

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    function logout(){
        localStorage.removeItem("u");
        window.location.href = "/";
    }


    return (
        <div>
            <div className="flex flex-row pl-10 h-20 items-center">
                <div className="w-20">
                    <Link to={"/buscarPeixes"}><img alt="Logo do Áquario Digital" title="Aquário Digital" src={icon}/></Link>
                </div>
                <div className="pl-2 w-96   font-semibold  text-2xl">
                    <p className="titulo">Aquário Digital</p>
                    <p className="hidden" style={{fontSize: "12px"}}>Encontre diferentes <b> Tipos de Peixe </b></p>
                </div>
                <div className="w-full flex justify-end pr-10">
                    <div>
                        <img onClick={toggleMenu} className="w-9 cursor-pointer" src={perfil}/>
                    </div>
                    {isOpen ? 
                        <div className="absolute mt-8 right mt-2 bg-white border border-gray-300 rounded shadow-md">
                        <ul >
                            {localStorage.getItem("u") == null ? 
                            <Link to={"/login"}><li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Entrar</li></Link>
                            :
                            <li onClick={logout} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Sair</li>
                        }
                            
                        </ul>
                    </div>
                    : <div></div>}
                    
                   
                </div>
            </div>
        </div>
    )
}