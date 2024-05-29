import icon from '../assets/images/iconFish.png';
import gmail from '../assets/images/gmail.png';

export default function Foot(){
    return (
        <div className="bg-black h-auto text-white p-10">
            <div className="h-[320px] items-rodape flex flex-row pt-12 ">
                <div className='flex rodape-text flex-col w-[500px]'>
                    <div className='flex flex-row'>
                        <div className="mr-4">
                            <img className="w-16" src={icon}/>
                        </div>
                        <div >
                            <p className="font-medium text-2xl">Aquário Digital</p>
                            <p style={{fontSize: "13px"}}>Encontre diferentes <b> Tipos de Peixe </b></p>
                        </div>
                    </div>
                    <div className='pt-4 text-rodape'>
                        <p style={{fontSize: "12px"}}>No Aquário Digital, você encontrará um vasto mundo aquático ao seu alcance! Nosso site foi criado para os entusiastas de peixes, sejam eles novatos ou experientes. Com uma interface intuitiva e amigável, você pode explorar e descobrir uma variedade impressionante de espécies e tipos de peixes.</p>
                        <br/>
                        <p style={{fontSize: "12px"}}>Estamos sempre atualizando nosso banco de dados com novas espécies e informações, garantindo que você tenha acesso ao conteúdo mais recente e relevante. Venha mergulhar no Aquário Digital e transforme sua paixão por peixes em uma experiência ainda mais rica e informada. Explore, aprenda e compartilhe conosco essa fascinante jornada pelo mundo aquático!</p>
                    </div>
                </div>
                <div className='pl-16 especiesRodape'>
                    <p className='descubra'>Descubra Diferentes Espécies</p>
                    <p style={{fontSize: "12px"}}>Com nossa ferramenta de busca avançada, você pode filtrar peixes por várias características, como:</p>
                    <ul className='pt-5 ' style={{fontSize: "13px", listStyleType: "disc"}}>
                        <li><b>Nome Científico ou Comum:</b> Encontre peixes pelo nome específico que você conhece.</li>
                        <br/>
                        <li><b>Tipo de Água:</b> Selecione entre peixes de água doce, água salgada ou água salobra.</li>
                        <br/>
                        <li><b>Tamanho:</b> Encontre espécies pequenas para aquários compactos ou grandes para tanques maiores.</li>
                    </ul>
                    <p className='pt-6'>Contato</p>
                    <div className='flex flex-row mt-2'>
                        <img className='w-6' src={gmail} />
                        <p style={{fontSize: '13px'}} className='pl-2 '> aquariodigitaloficial@gmail.com</p>
                    </div>
                   
                </div>

            </div>
            <div  className=' bg-black'>
                <div className='pt-5 '>
                    <hr/> 
                    <p className='pt-5' style={{fontSize: '12px'}}>© 2024 Aquário Digital. Todos os direitos reservados.</p>
                </div>
                
            </div>
        </div>
    )
}