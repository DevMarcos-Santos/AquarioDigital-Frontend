import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface Props{
    Nome?: string;
    Imagem1?: string;
    Id?: number;
    hidden?: string;
    borda?: string;
}




export default function Card(props: Props){

    const [imagem , setImagem] = useState<string | null>(null);

    function scroll(){
      
        window.scrollTo(0, 0);
       
    }

    useEffect( () => {
      
      import(`../assets/images/imagesPeixes/${props.Imagem1}.jpg`)
      .then((imagem) => setImagem(imagem.default))
      .catch((error) => console.error(error));
    
    }, [props.Imagem1]);


    return(
        <div>
            <div className={`w-60  card h-auto rounded-2xl ${props.borda} bg-gray-200 flex flex-col text-center`}>
                <div className=" w-full h-auto">
                    {imagem && <img className="rounded-t-xl h-40 w-full" src={imagem} />} 
                    <p className="text-black mt-4 font-bold text-2xl">{props.Nome}</p>
                </div>
                <div className={`mb-4 ${props.hidden}`}>
                    <Link to={`/peixe/${props.Nome}/${props.Id}`}> <button onClick={scroll} className="bg-gray-900  text-white font-bold w-52 h-10 rounded-md mt-5">Mais</button></Link>
                </div>
            </div>
        </div>
    )
}