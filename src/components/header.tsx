

export default function Header(){
    return (
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
    )
}