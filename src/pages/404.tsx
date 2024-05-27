import peixe_morto from '../assets/images/peixe-morto.png';
export default function NotFound(){
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="h-screen flex flex-col justify-center items-center">
                <img className="w-24" src={peixe_morto}/>
                <p className="mt-4 text-gray-900 font-bold">Não encontramos o que você procura...</p>
                <p className="text-4xl mt-4 text-gray-900 font-bold">404</p>
            </div>
            
        </div>
    )
}