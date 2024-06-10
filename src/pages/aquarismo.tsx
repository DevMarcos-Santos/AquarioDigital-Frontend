import Card from "../components/card";
import Foot from "../components/foot";
import Header from "../components/header";
import { Link } from "react-router-dom";



export default function Aquarismo(){
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="w-full items-center flex justify-center">
                <h2 className="text-gray-900 mt-10" style={{fontSize: "40px", fontFamily: 'Staatliches'}}>Aquarismo</h2>
            </div>
            <div className="pl-10 pr-10 mt-5">
                <p>O aquarismo, também conhecido como aquariofilia, é a prática de criar e manter peixes e outros organismos aquáticos em aquários. É um hobby que combina ciência, arte e paciência, proporcionando aos entusiastas a oportunidade de criar e cuidar de um ecossistema em miniatura dentro de suas casas.</p>
                <br/>
                <p>O aquarismo pode ser dividido em várias categorias, sendo as mais comuns o aquarismo de água doce e o de água salgada. O aquarismo de água doce é geralmente mais acessível para iniciantes, uma vez que os requisitos de manutenção são mais simples e os custos iniciais tendem a ser mais baixos. Nele, é possível manter uma grande variedade de peixes, plantas e invertebrados, como caracóis e camarões. Por outro lado, o aquarismo de água salgada, embora mais complexo e dispendioso, oferece a oportunidade de criar peixes marinhos, corais e outros organismos exóticos que são verdadeiramente fascinantes.</p>
                <br/>
                <p>A criação e a manutenção de um aquário exigem conhecimentos em várias áreas, como química da água, biologia e ecologia. É essencial compreender aspectos como a ciclagem do nitrogênio, a compatibilidade entre as espécies e as necessidades específicas de cada organismo mantido no aquário. Um dos principais desafios do aquarismo é manter o equilíbrio biológico do aquário, garantindo que a água permaneça limpa e adequada para os habitantes, o que envolve monitorar parâmetros como pH, amônia, nitritos e nitratos.</p>
                <br/>
                <p>Além dos aspectos técnicos, o aquarismo também é uma forma de arte. A disposição das plantas, rochas, troncos e outros elementos decorativos, conhecida como aquapaisagismo, pode transformar um simples aquário em uma obra de arte viva. Aquaristas talentosos conseguem criar cenários subaquáticos impressionantes, inspirados em paisagens naturais ou mesmo em conceitos abstratos, que encantam e relaxam os observadores.</p>
                <br/>
                <p>Para muitas pessoas, o aquarismo vai além de um hobby; é uma paixão que proporciona um profundo senso de satisfação e conexão com a natureza. Observar a vida dentro de um aquário pode ser uma experiência terapêutica, ajudando a reduzir o estresse e a ansiedade. Além disso, o aquarismo também pode servir como uma ferramenta educativa, especialmente para crianças, que podem aprender sobre biologia, ecossistemas e responsabilidade através do cuidado com os peixes.</p>
            </div>
            
            <div className="pl-10 pr-10 mt-5">
                <p>O aquarismo oferece uma vasta gama de opções de peixes para manter em aquários, cada um com suas próprias características e necessidades. Aqui estão alguns dos principais peixes populares entre os aquaristas, divididos em categorias de água doce e água salgada:</p>
            </div>
            <div className="w-full pl-10 mt-5 doce mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Peixes de Água Doce</h2>
            </div>
            <div className="w-full flex flex-wrap mt-4  items-center justify-center">
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Imagem1="tetra1" Id={41} Nome="Tetra Neon "/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Id={42} Imagem1="guppy1" Nome="Guppy"/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Id={40} Imagem1="betta1" Nome="Betta"/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Id={43} Imagem1="corydora1" Nome="Corydora"/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Id={30} Imagem1="disco1" Nome="Acará-Disco"/>
                </div>
            </div>
            <div className="w-full pl-10 mt-5 salgada  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2 " style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Peixes de Água Salgada</h2>
            </div>
            <div className="w-full flex flex-wrap mt-4 items-center justify-center ">
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Imagem1="palhaco1" Id={44} Nome="Peixe-palhaço"/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Imagem1="patela1" Id={45}  Nome="Cirurgião-patela"/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Imagem1="mandarim1" Id={46} Nome="Mandarim"/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Imagem1="anjo1" Id={47} Nome="Peixe-anjo"/>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Card hiddenOferta="hidden" Imagem1="gobio1" Id={48} Nome="Góbio"/>
                </div>
            </div>
            
            <div className="pl-10 pr-10 mt-5">
                <p>Para manter um aquário saudável e próspero, é necessário contar com uma variedade de produtos essenciais que ajudam a manter a qualidade da água, o bem-estar dos peixes e a estabilidade do ambiente aquático. Aqui estão alguns dos principais produtos para aquarismo:</p>
            </div>
            <div className="w-full pl-10 mt-5 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2 mb-4" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Aquário</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4 cards">
                     <Link to={"https://amzn.to/3yLoLdu"} target="_blank"><Card borda="borda" Imagem1="aquario1" Nome="Boyu - Aquário Curvo Ms-220 7,5L Preto 220v" Id={0} hiddenOferta="hidden" hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3wXhbvK"} target="_blank"><Card borda="borda" Imagem1="aquario2" Nome="Boyu - Aquário Curvo Ms-320 20L Preto 110v" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 cards">
                <Link to={"https://amzn.to/3X6s7BQ"} target="_blank"><Card borda="borda" Imagem1="aquario3" Nome="Aquário Betteira com Iluminação LED " Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3V2d5dP"} target="_blank"><Card borda="borda" Imagem1="aquario4" Nome="Boyu - Aquário Curvo Ms-320 20L Preto 220v" Id={0} hiddenOferta="hidden" hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3KrsjnK"} target="_blank"><Card borda="borda" Imagem1="aquario5" Nome="Aquário de Vidro Retangular Teruo Yamamoto" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="w-full pl-10 mt-5 mb-4 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Filtros</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4  cards">
                     <Link to={"https://amzn.to/4aJyP3O"} target="_blank"><Card borda="borda" Imagem1="filtro1" Nome="Filtro Interno Oceantech para Aquário 650L/H" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3RanAdE"} target="_blank"><Card borda="borda" Imagem1="filtro2" Nome="Maxxi Power Filtro Externo Hf-360 360L E H 220V" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                <Link to={"https://amzn.to/3RbaMDU"} target="_blank"><Card borda="borda" Imagem1="filtro3" Nome="Pawfly Filtro interno de aquário" hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3V8QdJL"} target="_blank"><Card borda="borda" Imagem1="filtro4" Nome="Maxxi Power Filtro Externo 60L E H 220V" hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3yCFpvC"} target="_blank"><Card borda="borda" Imagem1="filtro5" Nome="Filtro Externo Maxxi Power Hf-1000" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="w-full pl-10 mt-5 mb-4 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Termostatos</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4 cards">
                     <Link to={"https://amzn.to/3yJScwn"} target="_blank"><Card borda="borda" Imagem1="termosato3" Nome="Termostato Oceantech 200W - 110V" hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3V0qy5M"} target="_blank"><Card borda="borda" Imagem1="termosato2" Nome="Termostato com Aquecedor - Q3-100W " hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                <Link to={"https://amzn.to/3V4auQE"} target="_blank"><Card borda="borda" Imagem1="termosato1" Nome="HOPAR TERMOSTATO H-386 200W 127V" Id={0} hiddenOferta="hidden" hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3V4awIg"} target="_blank"><Card borda="borda" Imagem1="termosato4" Nome="Termostato Roxin HT-1300/Q3-200w" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3V8rZ1V"} target="_blank"><Card borda="borda"  Imagem1="termosato5" Nome="HOPAR TERMOSTATO K-50 25W 220V" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="mt-10">
                <Foot/>
            </div>
        </div>
    )
}