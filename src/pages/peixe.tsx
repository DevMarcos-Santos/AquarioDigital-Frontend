import { Link, useParams } from "react-router-dom";
import Header from "../components/header";
import { peixelandia_api } from "../services/apiService";
import { useEffect, useState } from "react";
import ModalLogin from "../components/modalLogin";
import Button from "../components/button";


export default function Peixe(){
    const {nome, id} = useParams();
    const [peixe, setPeixe] = useState([]);

    const tokenString = localStorage.getItem("u");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        peixelandia_api.get(`/peixes/${id}`).then((resp) => {
        setPeixe(resp.data); 
        
        
        })
    }, [id]);
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


   
    return(
        <div className="h-full bg-cover  bg-no-repeat flex flex-col" style={{backgroundImage: "url(/src/assets/images/bannerPeixe.jpg)"}}>
            <div className="bg-white">
            <div>
            <div className="flex flex-row pl-10 h-20 items-center">
                <div className="w-20">
                    <img src="/src/assets/images/iconFish.png"/>
                </div>
                <div className="pl-2 w-96   font-semibold  text-2xl">
                    <h1>Aquário Digital</h1>
                </div>
                <div className="w-full flex justify-end pr-10">
                    <img className="w-9" src="/src/assets/images/perfil.png"/>
                </div>
            </div>
        </div>
            </div>
            <div className="flex items-center w-full justify-center">
                <h1 className="text-5xl text-white mt-16" style={{fontFamily: 'Staatliches'}}>{peixe.nome}</h1>
            </div>
            <div className="flex flex-row  pl-16 mt-10 imagesPeixes ">
                <div className="w-[600px] peixes rounded-2xl pr-2">
                    <img className="rounded-2xl w-[600px] h-[380px] " src={`/src/assets/images/imagesPeixes/${peixe.imagem1}`} />
                </div>
                <div className="w-[600px] peixes  rounded-2xl pl-2">
                    <img className="rounded-2xl w-[600px] h-[380px] " src={`/src/assets/images/imagesPeixes/${peixe.imagem2}`} />
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center">
                <div className="p-5 w-[90%] text-2xl rounded-2xl space-y-2 bg-white">       
                    <b>Nome:</b> {peixe.nome}<br/>
                    <b>Nome científico:</b> {peixe.nome_cientifico}<br/>
                    <b>Tipo de Água:</b> {peixe.tipo_de_agua}<br/>
                    <b>Tamanho:</b> {peixe.tamanho}<br/>
                    <b>Paises:</b> {peixe.paises}<br/>
                    <b>Cores:</b> {peixe.cor}<br/>
                    <b>Temperamento:</b> {peixe.temperamento}<br/>
                </div>
                
                {isAuthenticated ? (
  <div className="p-5 mt-5 w-[90%] mb-10 text-2xl rounded-2xl bg-white">   
    <h1>{peixe.descricao}</h1>
  </div>
) : (
  <div className="p-5 mt-5 w-[90%] mb-10 text-2xl rounded-2xl flex justify-center items-center bg-white"> 
    <div className="blur-sm select-none">
      <h1>{peixe.descricao}</h1>
    </div> 
    <img className="w-36 absolute mb-20" src="/src/assets/images/cadeado.png"/>
    <div className="absolute mt-44">
        <Link to={"/login"}><Button children="Entrar"/></Link>
    </div>
  </div>
)}

                    
                
                
                </div>
               
            
           
        </div>  
    )
}