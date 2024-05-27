import { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { peixelandia_api } from "../services/apiService";
import banner from '../assets/images/banner.jpg'
import icon from '../assets/images/iconFish.png';
import close from '../assets/images/close.png';


export default function Subscribe(){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [number3, setNumber3] = useState("");
    const [number4, setNumber4] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(false);
    
    function send(){
        setButtonDisabled(true);
        const object = {
            username: nome,
            surname: sobrenome,
            email: email,
            password: senha,
        }
        const loadingToast = toast.loading("Aguarde");

        if(senha.length < 8){
            toast.dismiss(loadingToast);
            toast.error("A senha precisa ter mais de 8 caracteres!");
            setButtonDisabled(false);
        }else if(!email.includes("@") || !email.split("@")[1].includes(".")){
            toast.dismiss(loadingToast);
            toast.error("E-mail inválido");
            setButtonDisabled(false);
        }
        else{
            peixelandia_api.post("/users/confirmEmail", object).then(() => {
                toast.dismiss(loadingToast);
                setModalIsOpen(true);
                setButtonDisabled(false);
     
    
                
            }).catch(() => {
                toast.dismiss(loadingToast);
    
                    
                   
                    setButtonDisabled(false);
                    toast.error("Email já cadastrado!");
            
    
               
            })
        }

        
    }

    function closeModal(){
        setModalIsOpen(false);
    }

    function verifyEmail(){
        const object = {
            username: nome,
            surname: sobrenome,
            email: email,
            password: senha,
        }

        
        const codeString = number1 + number2 + number3 + number4;
        const code = parseInt(codeString, 10);

        peixelandia_api.post(`/users/create/${code}`, object).then(() => {
            const loadingTest = toast.loading("Aguarde");
            

            setTimeout(() => {
                toast.dismiss(loadingTest);
            }, 1000)

            setTimeout(() => {
                window.location.href = "/login"
            }, 1000)
            
        }).catch(() => {
            toast.error("Código de verificação incorreto!");
        });
    }

    return (
        <div className="h-screen bg-cover bg-no-repeat flex justify-center items-center " style={{backgroundImage: `url(${banner})`}}>
            {modalIsOpen ? 
            <div className="h-screen w-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white w-[600px] h-[300px] rounded-lg">
                <div className="w-full flex justify-end">
                    <img onClick={closeModal} className="w-10 cursor-pointer" src={close}/>
                </div>
                <div className="w-full mt-10 text-center">
                    <p>Preencha com o código de confirmação enviado ao seu email</p>
                </div>
                <div className="flex items-center mt-5 justify-center gap-3">
                    
                    <input value={number1} onChange={e => setNumber1(e.target.value)}
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        pattern="\d*" maxLength={1} />
                    <input value={number2} onChange={e => setNumber2(e.target.value)}
                        type="text" 
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength={1}/>
                    <input value={number3} onChange={e => setNumber3(e.target.value)}
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength={1} />
                    <input value={number4} onChange={e => setNumber4(e.target.value)}
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength={1} />
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
            <button type="submit" onClick={verifyEmail}
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-gray-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verificar conta</button>
        </div>
            </div>
        </div>
            : <div></div>}
            <div className="bg-white w-[450px] subscribe h-auto rounded-3xl flex flex-col items-center">
                <div className="mt-8 flex">
                    <img className="w-16" src={icon}/>
                </div>
                <div className="text-center">
                    <p className="font-medium text-2xl">Aquário Digital</p>
                    <p style={{fontSize: "13px"}}>Encontre diferentes <b> Tipos de Peixe </b></p>
                </div>
               
                    <div className="mt-6">
                        <Input value={nome} onChange={e => setNome(e.target.value)} type="name" Children="Nome"/>
                    </div>
                    <div className="mt-2">
                        <Input value={sobrenome}  onChange={e => setSobrenome(e.target.value)}  type="name" Children="Sobrenome" />
                    </div>
                    <div className="mt-2">
                        <Input value={email}  type="email"  onChange={e => setEmail(e.target.value)} Children="Email" />
                    </div>
                    <div className="mt-2">
                        <Input value={senha}  onChange={e => setSenha(e.target.value)}  type="password" Children="Senha" />
                    </div>
                    <div className="mt-6">
                        <Button disabled={buttonDisabled} className="send" onClick={send} type="submit" children="Criar"/>
                    </div>
                    <div className="mt-5 mb-4">
                        <p>Ja possui uma conta? <Link to={"/login"} className="text-black font-bold underline">Entrar</Link></p>
                    </div>
                   
                
            </div>
            
        </div>
    )
}