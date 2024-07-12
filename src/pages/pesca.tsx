/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "../components/card";
import Foot from "../components/foot";
import Header from "../components/header";
import { Link } from "react-router-dom";
// @ts-expect-error: ignore 
import { Helmet } from 'react-helmet';



export default function Pesca(){
    return (
        <div>
             <Helmet>
            
            <title>Introdução à Pesca: História, Técnicas e Equipamentos</title>
            <meta name="description" content="Explore a história da pesca, suas diversas técnicas e os principais equipamentos utilizados. Descubra a importância da pesca artesanal, comercial e recreativa, e como a pesca sustentável pode preservar os recursos marinhos."/>
            </Helmet>
            <div>
                <Header/>
            </div>
            <div className="w-full items-center flex justify-center">
                <p className="text-gray-900 mt-10" style={{fontSize: "40px", fontFamily: 'Staatliches'}}>Pesca</p>
            </div>
            <div className="pl-10 pr-10 mt-5">
                <p>A pesca é uma atividade milenar que envolve a captura de peixes e outros organismos aquáticos, como crustáceos e moluscos, com o objetivo de obter alimento, lazer ou fins comerciais. Ao longo dos séculos, a pesca evoluiu significativamente, tanto em termos de técnicas quanto de impacto ambiental e socioeconômico.</p>
                <br/>
                <p>A pesca é uma das mais antigas atividades humanas, com evidências arqueológicas que datam de pelo menos 40.000 anos. Desde os primeiros tempos, povos de diversas regiões do mundo desenvolveram métodos e ferramentas para capturar peixes, como anzóis de osso, redes de fibras naturais e armadilhas rudimentares. Com o avanço das civilizações, especialmente ao longo das margens de rios e costas, a pesca se tornou uma importante fonte de sustento e comércio.</p>
                <br/>
                <p>Existem diferentes tipos de pesca, que podem ser categorizados de várias formas. Alguns dos principais tipos incluem:</p>
                <br/>
                <p><b>Pesca Comercial - </b>A pesca comercial é realizada em larga escala com o objetivo de fornecer peixe e frutos do mar para o mercado. Este tipo de pesca utiliza embarcações de pesca industrial e técnicas avançadas, como arrasto de fundo, pesca com rede de cerco e pesca com linha longa. A pesca comercial é uma indústria global que desempenha um papel crucial na economia de muitos países.</p>
                <br/>
                <p><b>Pesca Artesanal - </b>A pesca artesanal é realizada por comunidades locais, geralmente em pequena escala, utilizando métodos tradicionais. Este tipo de pesca é frequentemente sustentável, pois os pescadores artesanais tendem a usar técnicas que minimizam o impacto ambiental e garantem a sobrevivência das espécies. A pesca artesanal é vital para a subsistência de milhões de pessoas em todo o mundo.</p>
                <br/>
                <p><b>Pesca Recreativa - </b>A pesca recreativa, ou esportiva, é praticada por lazer e diversão. Os pescadores recreativos usam varas, anzóis e iscas para capturar peixes em rios, lagos e no mar. Muitas vezes, o objetivo é capturar e soltar os peixes, promovendo a conservação das espécies. A pesca recreativa também é uma atividade social e cultural em muitas regiões, proporcionando um meio de relaxamento e conexão com a natureza.</p>
            </div>   
            <div className="pl-10 pr-10 mt-5">
                <p>Os equipamentos de pesca são variados e adaptados para diferentes tipos de pesca, ambientes e espécies-alvo. Aqui estão alguns dos principais equipamentos utilizados na pesca:</p>
            </div>
            <div className="w-full pl-10 mt-5 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2 mb-4" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Varas de Pesca</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4 cards">
                     <Link to={"https://amzn.to/3RAUpRw"} target="_blank"><Card borda="borda" Imagem1="vara1" Nome="Vara de molinete carbono ágata S562 12lb 1,68m Albatroz" Id={0} hiddenOferta="hidden" hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3VMohN1"} target="_blank"><Card borda="borda" Imagem1="vara2" Nome="Vara para Carretilha Pro Staff I 532 5'3 1,60mts 8-17lbs" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 cards">
                <Link to={"https://amzn.to/3KRfaV2"} target="_blank"><Card borda="borda" Imagem1="vara3" Nome="Vara para Carretilha Pro Staff I 532 5'3 1,60mts 8-17lbs" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3z1jM8s"} target="_blank"><Card borda="borda" Imagem1="vara4" Nome="Vara de Pesca Telescópica para Molinete de 2,10m 15-30lb Cmik" Id={0} hiddenOferta="hidden" hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3Xq25d3"} target="_blank"><Card borda="borda" Imagem1="vara5" Nome="Vara para Molinete Sabre 1682 1,68mts 17lbs 2 Partes" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="w-full pl-10 mt-5 mb-4 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Molinetes e Carretas</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4  cards">
                     <Link to={"https://amzn.to/3VswswF"} target="_blank"><Card borda="borda" Imagem1="molinete1" Nome="Molinete Shimano FX 4000 FC" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/4b8K2uX"} target="_blank"><Card borda="borda" Imagem1="molinete2" Nome="Molinete Shimano FX C3000 FC" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                <Link to={"https://amzn.to/4c90cpI"} target="_blank"><Card borda="borda" Imagem1="molinete3" Nome="Molinete giratório Okuma Ceymar" hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3Vtpnfw"} target="_blank"><Card borda="borda" Imagem1="molinete4" Nome="HAUT TON Molinete giratório série 17" hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3KQkiJ4"} target="_blank"><Card borda="borda" Imagem1="molinete5" Nome="Molinetes de pesca giratórios Diwa para água salgada" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="w-full pl-10 mt-5 mb-4 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Linhas de Pesca</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4 cards">
                     <Link to={"https://amzn.to/4eutEI7"} target="_blank"><Card borda="borda" Imagem1="linha1" Nome="Linha de Pesca Multifilamento, Fio de Pesca Super Forte de 500 M"  Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/4c5Uu7N"} target="_blank"><Card borda="borda" Imagem1="linha2" Nome="Linha Pesca Dourado Mazzaferro 0,45 mm 250 Gramas 1270 metros 21,6 libras " hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                <Link to={"https://amzn.to/3z5s1R9"} target="_blank"><Card borda="borda" Imagem1="linha3" Nome="Linha Vexter Ultimate Soft 0,40mm 300m Azul" Id={0} hiddenOferta="hidden" hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3RAj1cV"} target="_blank"><Card borda="borda" Imagem1="linha4" Nome="Linha Vexter Ultimate Soft 0,40mm 300m Amarela" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3VNCQ32"} target="_blank"><Card borda="borda"  Imagem1="linha5" Nome="Linha Pesca Monofilamento Rapala Sufix Calema Xtreme 300m 0.25mm 23Lbs 11Kg" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="w-full pl-10 mt-5 mb-4 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Anzóis</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4  cards">
                     <Link to={"https://amzn.to/4b54ZH7"} target="_blank"><Card borda="borda" Imagem1="anzol1" Nome="Kit 600 Anzóis E Kit Chumbada Para Pesca!" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3VsNUBq"} target="_blank"><Card borda="borda" Imagem1="anzol2" Nome="Kit Anzol Chinu 10 Tamanhos 3 Ao 12 Aço Carbono c/Estojo 600un" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                <Link to={"https://amzn.to/4c5rlK5"} target="_blank"><Card borda="borda" Imagem1="anzol3" Nome="Kit Anzóis Chinu Dourado nos Tamanhos 3 ao 12 com 600 Unidades" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3RxwQJe"} target="_blank"><Card borda="borda" Imagem1="anzol4" Nome="Anzol Pesca Tamanho 4/0 até Tamanho 18 Mosquitinho 480 PÇS" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3VJmngd"} target="_blank"><Card borda="borda" Imagem1="anzol5" Nome="Marine Sports, Anzol Marine Sports Super Chinu Strong Blacknickel Nº 07 Cartela Com 50 Unidades" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="w-full pl-10 mt-5 mb-4 doce  mb-5 flex justify-center items-center">
                <h2 className="text-gray-900 mt-2" style={{fontSize: "30px", fontFamily: 'Staatliches'}}>Iscas</h2>
            </div>
            <div className=" mb-4 flex flex-wrap items-center justify-center">
                <div className="mr-4 mb-4  cards">
                     <Link to={"https://amzn.to/3zai7xC"} target="_blank"><Card borda="borda" Imagem1="isca1" Nome="Kit 50 Iscas Artificial Minhoca Minhocuçu 4 cm" hiddenOferta="hidden" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3Xuiihb"} target="_blank"><Card borda="borda" Imagem1="isca2" Nome="Melhor Kit C/ 6 Iscas Artificiais Camarão de Silicone 7,5cm 6,6 gramas" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                <Link to={"https://amzn.to/3VmZWfu"} target="_blank"><Card borda="borda" Imagem1="isca3" Nome="Kit 50 Iscas Artificiais MInhoca Pesca" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3VxJVmW"} target="_blank"><Card borda="borda" Imagem1="isca4" Nome="Outanaya Big Fish Isca de rato de pesca macia PVA" Id={0} hidden={"hidden "}/></Link>
                </div>
                <div className="mr-4 mb-4 cards">
                    <Link to={"https://amzn.to/3xnfSX7"} target="_blank"><Card borda="borda" Imagem1="isca5" Nome="KIT 10 ISCA ARTIFICIAL P/PESCA TUCUNARÉ DOURADO TRAIRA 11CM" Id={0} hidden={"hidden "}/></Link>
                </div>
                
            </div>
            <div className="mt-10">
                <Foot/>
            </div>
        </div>
    )
}