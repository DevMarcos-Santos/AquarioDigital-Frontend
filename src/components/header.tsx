import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/images/iconFish.png";
import perfil from "../assets/images/perfil.png";
import menu from "../assets/images/menu.png";



export default function Header(){

    const [isOpen, setIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    function logout(){
        localStorage.removeItem("u");
        window.location.href = "/";
    }

    function openMenu(){
       if(menuIsOpen == true){
        setMenuIsOpen(false);
       }else{
        setMenuIsOpen(true);
       }
    }


    return (
        <div>
           
            <div className="nav flex flex-row pl-10 h-20 items-center">
                <div className="w-20">
                    <Link to={"/buscarPeixes"}><img alt="Logo do Áquario Digital" title="Aquário Digital" src={icon}/></Link>
                </div>
                <div className="pl-2 w-96   font-semibold  text-2xl">
                    <p className="titulo">Aquário Digital</p>
                    <p className="hidden" style={{fontSize: "12px"}}>Encontre diferentes <b> Tipos de Peixe </b></p>
                </div>
                <div className="w-full flex justify-end pr-10">
                    <div className="flex items-center flex-row  ">
                        <Link className="aquarismo mr-10" to={"/aquarismo"}>Aquarismo</Link>
                        <img onClick={toggleMenu} className="w-9 cursor-pointer perfil" src={perfil}/>
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
                    : <div>
                       
                    </div>}

                    <img onClick={openMenu}  className="w-10 menu" src={menu}/>    
                   
                </div>
            </div>
            {menuIsOpen ?
            <div className="flex items-start justify-end pr-10 mt-4 mb-4 ">
                <Link className="underline" to={"/aquarismo"}>Aquarismo</Link>
            </div>
             : 
             <div></div> }
           
        </div>
    )
}