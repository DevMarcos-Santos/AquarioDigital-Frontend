import { Link } from "react-router-dom";

interface Props{
    Nome: string;
    Imagem1: string;
    Id: number;
}

export default function Card(props: Props){
    return(
        <div>
            <div className="w-60 card h-72 rounded-2xl bg-gray-200 flex flex-col text-center">
                <div className="">
                    <img className="rounded-t-xl h-40 w-full" src={`/src/assets/images/imagesPeixes/${props.Imagem1}`} />
                    <h1 className="text-black mt-4 font-bold text-2xl">{props.Nome}</h1>
                </div>
                <div>
                    <Link to={`/fish/${props.Nome}/${props.Id}`}> <button className="bg-gray-900  text-white font-bold w-52 h-10 rounded-md mt-5">Mais</button></Link>
                </div>
            </div>
        </div>
    )
}