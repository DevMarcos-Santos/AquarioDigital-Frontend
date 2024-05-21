import { useEffect, useState } from "react";
import Card from "../components/card";
import Header from "../components/header";
import Input from "../components/input";
import { peixelandia_api } from "../services/apiService";


export default function Home(){
    const [Nome, setNome] = useState("");
    const [NomeCientifico, setNomeCientifico] = useState("");
    const [Pais, setPais] = useState("");
    const [TipoAgua, setTipoAgua] = useState("");
    const [Tamanho, setTamanho] = useState("");
    const [Cor, setCor] = useState("");
    const [peixes, setPeixes] = useState([]);

    useEffect(() => {
        const object = {
            nome: Nome,
            nome_cientifico: NomeCientifico,
            paises: Pais,
            tipo_de_agua: TipoAgua,
            tamanho: Tamanho,
            cor: Cor
        }

      

     

        peixelandia_api.post("/peixes/find", object).then((resp) => {
        setPeixes(resp.data);
      

        })
    }, [Nome, NomeCientifico, Pais, TipoAgua, Tamanho, Cor]);

   

    const HendleInputChangeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    }
    const HendleInputChangeNomeCientifico = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomeCientifico(event.target.value);
    }
    const HendleInputChangePais = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPais(event.target.value);
    }
    const HendleInputChangeAgua = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoAgua(event.target.value);
    }
    const HendleInputChangeTamanho = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTamanho(event.target.value);
    }
    const HendleInputChangeCor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCor(event.target.value);
    }

    return (
        <div>
            <Header/>
            <div className="h-96 bg-cover bg-no-repeat" style={{backgroundImage: 'url(./src/assets/images/dashboard.jpg)'}}>
                <div className="text-5xl text-white pt-20 pl-12" style={{fontFamily: 'Staatliches'}}>
                    <h1>Desfrute do site com a <br/> maior variedade de peixes <br/> do brasil</h1>
                </div>
            </div>
           
            <div className="flex flex-row pl-10 mt-10  justify-center inputs">
                <div className="pr-2">
                     <Input value={Nome} onChange={HendleInputChangeNome} Children="Nome"/>
                </div>
                <div className="pr-2">
                    <Input value={NomeCientifico} onChange={HendleInputChangeNomeCientifico} Children="Nome científico"/>
                </div>
                <div className="pr-2">
                <Input value={Pais} onChange={HendleInputChangePais} Children="País"/>
                </div>
                
            </div>
                <div className="flex flex-row pl-10 mt-5  inputs justify-center">
                    <div className="flex flex-col pr-2">
                        <label>Tipo de Água</label>
                        <select value={TipoAgua} onChange={HendleInputChangeAgua} className="w-80 h-10 rounded-lg border-2 bg-gray-100 border-gray-200">
                            <option value=""></option>
                            <option value="Doce">Doce</option>
                            <option value="Salgada">Salgada</option>
                        </select>
                    </div>
                    <div className="flex flex-col pr-2">
                        <label>Tamanho</label>
                        <select value={Tamanho} onChange={HendleInputChangeTamanho} className="w-80 h-10 rounded-lg border-2 bg-gray-100 border-gray-200">
                            <option value=""></option>  
                            <option value="Grande">Grande</option>
                            <option value="Pequeno">Pequeno</option>
                            <option value="Médio">Médio</option>
                        </select>
                    </div>
                    <div className="pr-2">
                         <Input onChange={HendleInputChangeCor} value={Cor} Children="Cor"/>
                    </div>
                   
                </div>
                
                <div className=" flex flex-wrap mt-10 cards">
                    {peixes?.map((peixes, i) => {
                        return (
                            <div className="pl-6 mt-5">
                                <Card Imagem1={peixes.imagem1} Nome={peixes.nome} Id={peixes.id}/>
                            </div>
                        )
                    } )}
                    


                </div>
        </div>
    )
}