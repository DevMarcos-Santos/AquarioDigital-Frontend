import { Link, useParams } from "react-router-dom";
import { peixelandia_api } from "../services/apiService";
import { useEffect, useState } from "react";
import Button from "../components/button";
import cadeado from '../assets/images/cadeado.png';
import banner from '../assets/images/bannerPeixe.jpg';
import Card from "../components/card";
import Foot from "../components/foot";
// @ts-expect-error: ignore 
import { Helmet } from 'react-helmet';
import Header from "../components/header";


export default function Peixe(){
    const {id} = useParams();
    const [peixe, setPeixe] = useState([]);

    const tokenString = localStorage.getItem("u");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [imagem1 , setImagem1] = useState<string | null>(null);
    const [imagem2 , setImagem2] = useState<string | null>(null);


    const [Nome] = useState("");
    const [NomeCientifico] = useState("");
    const [Pais] = useState("");
    const [TipoAgua] = useState("");
    const [Tamanho] = useState("");
    const [Cor] = useState("");
    const [peixes, setPeixes] = useState([]);


    useEffect(() => {

        window.location.reload;

        const object = {
            nome: Nome,
            nome_cientifico: NomeCientifico,
            paises: Pais,
            tipo_de_agua: TipoAgua,
            tamanho: Tamanho,
            cor: Cor,
        }

        peixelandia_api.post("/peixes/find", object).then((resp) => {
            setPeixes(resp.data)
            console.log(resp.data);
        })
    }, [Nome, Cor, NomeCientifico, Pais, TipoAgua, Tamanho])


    useEffect( () => {
       
       
       
        // @ts-expect-error: ignore 
      import(`../assets/images/imagesPeixes/${peixe.imagem1}.jpg`)
      .then((imagem1) => setImagem1(imagem1.default))
      .catch((error) => console.error(error));
        // @ts-expect-error: ignore 
    }, [peixe.imagem1]);

    useEffect( () => {
       
        // @ts-expect-error: ignore 
      import(`../assets/images/imagesPeixes/${peixe.imagem2}.jpg`)
      .then((imagem2) => setImagem2(imagem2.default))
      .catch((error) => console.error(error));
        // @ts-expect-error: ignore 
    }, [peixe.imagem2]);

    
   

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
        <div className="h-full bg-cover  bg-no-repeat flex flex-col" style={{backgroundImage: `url(${banner})`}}>
        <Helmet>
            
            <title>{// @ts-expect-error: ignore 
             peixe.title}</title>
            <meta name="description" content={// @ts-expect-error: ignore 
                peixe.descricao}/>
        </Helmet>
            <div className="bg-white">
            <div>
            <Header/>
        </div>
            </div>
            <div className="flex items-center w-full justify-center">
                <p className="text-5xl text-white mt-16" style={{fontFamily: 'Staatliches'}}>{ // @ts-expect-error: ignore 
                peixe.nome}</p>
            </div>
            <div className="flex flex-row  pl-16 mt-10 imagesPeixes ">
                <div className="w-[600px] peixes rounded-2xl pr-2">
                    <img className="peixe1 rounded-2xl w-[600px] h-[380px]" alt={`Imagens do peixe ${// @ts-expect-error: ignore
                     peixe.nome}`} title={peixe.nome} src={imagem1} />
                </div>
                <div className="w-[600px] peixes  rounded-2xl pl-2">
                    <img className="peixe2 rounded-2xl w-[600px] h-[380px] " alt={`Imagens do peixe ${ // @ts-expect-error: ignore 
                    peixe.nome}`} title={peixe.nome} src={imagem2} />
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center">
                <div className="p-5 w-[90%] text-1xl rounded-2xl space-y-3 bg-white"> 
                    
                    <b>Nome:</b> { // @ts-expect-error: ignore
                     peixe.nome}<br/>  <br/>
                    <b>Nome científico:</b> { // @ts-expect-error: ignore 
                    peixe.nome_cientifico}<br/><br/>    
                    <b>Tipo de Água:</b> {// @ts-expect-error: ignore
                     peixe.tipo_de_agua}<br/><br/>
                    <b>Tamanho:</b> {// @ts-expect-error: ignore
                     peixe.tamanho}<br/><br/>
                    <b>Paises:</b> { // @ts-expect-error: ignore 
                    peixe.paises}<br/><br/>
                    <b>Cores:</b> { // @ts-expect-error: ignore 
                    peixe.cor}<br/><br/>
                    <b>Temperamento:</b>  { // @ts-expect-error: ignore 
                    peixe.temperamento}<br/>
                </div>
                
                {isAuthenticated ? (
  <div className="p-5 mt-5 w-[90%] mb-10 text-1xl rounded-2xl bg-white">   
    <p className="peixeDesc">{  // @ts-expect-error: ignore 
    peixe.descricao}</p>
  </div>
) : (
  <div className="p-5 mt-5 w-[90%] mb-10 text-1xl rounded-2xl flex justify-center items-center bg-white"> 
    <div className="blur-sm select-none">

      <p>{// @ts-expect-error: ignore
       peixe.descricao}</p>
    </div> 
    <img className="w-24 absolute mb-10" src={cadeado}/>
    <div className="absolute mt-32">
        <Link to={"/login"}><Button className="buttonMobile" children="Entrar"/></Link>
    </div>
  </div>
)}
    <div className="text-3xl  text-white">
        <p style={{fontFamily: 'Staatliches'}}>Outros Tipos de Peixe</p>
    </div>
    
                    
                
                
    </div>
    <div className="ml-20 mr-20 carrousselMobile overflow-hidden h-full mt-5 pb-10">
        <div className="carousel absolute left-0 flex items-center w-full">
            {peixes?.map((peixes) => {
                        return (
                            <div className="pl-6 mt-5">
                                <Card key={peixes["id"]} hiddenOferta="hidden" Imagem1={peixes["imagem1"]} Nome={peixes["nome"]} Id={peixes["id"]}/>
                            </div>
                        )
                    } )}
        </div>
    </div>
        <div>
            <Foot/>
        </div>
           
        </div>  
    )
}