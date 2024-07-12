import { useState } from "react";
import Header from "../components/header";


export default function Profile(){

    const [editClick, setEditClick] = useState(false);

    function Cancelar(){
        setEditClick(false);
    }

    function Editar(){
        setEditClick(true);
    }

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="p-8">
                <div className="flex flex-row justify-center">
                    <div className="mt-8">
                        <img className="w-60 rounded-full" src="./src/assets/images/imagesPeixes/ok.jpeg"/>
                    </div>
                    <div className="mt-16 pl-6 flex flex-col">
                        <p className="font-bold text-2xl ">Marcos Vinicius</p>
                       

                        {editClick === true ? 
                        <div className="mt-2 flex flex-col">
                            <textarea className="bio p-1">

                            </textarea>
                            <div className="w-full flex items-end justify-end"> <button onClick={Cancelar} className="bg-gray-400 mr-2 w-32 h-8 rounded-md mt-2">Cancelar</button> <button className="bg-green-600 w-32 h-8 rounded-md mt-2">Salvar</button> </div>
                            
                        </div> :  <div>
                            
                        <p>Apaixonado por pesca e aquarismo.</p>
                        <p>Vencedor 3x Pesca Awards</p>

                        </div>}
                        {editClick === true ? <div></div> : 
                                <div className="flex flex-row mt-2">
                                <img onClick={Editar} className="w-5 cursor-pointer" src="./src/assets/images/imagesPeixes/editar.png"/>
                                <img className="w-5 ml-2" src="./src/assets/images/imagesPeixes/compartilhar.png"/>
                            </div>
                        }
                        
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-gray-900 mt-10 mb-10" style={{fontSize: "40px", fontFamily: 'Staatliches'}}>Destaques</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-60 h-52 mr-4 mb-4 flex adicionar justify-center items-center rounded-lg cursor-pointer">
                        <img className="w-[100px] h-[100px]" src="./src/assets/images/imagesPeixes/adicionar.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                    <div className="w-60 h-52 mr-4 mb-4">
                        <img className="w-60 h-52" src="./src/assets/images/imagesPeixes/anchova.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}