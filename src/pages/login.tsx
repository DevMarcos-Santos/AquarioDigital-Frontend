
import {  useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import { peixelandia_api } from "../services/apiService";
import toast from "react-hot-toast";
import { UseAuth } from "../context/AuthProvider/useAuth";
import { Link } from "react-router-dom";
import banner from '../assets/images/banner.jpg';
import icon from '../assets/images/iconFish.png';
import close from '../assets/images/close.png';



export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = UseAuth();
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [number3, setNumber3] = useState("");
    const [number4, setNumber4] = useState("");
    const [emailRecuperation, setEmailRecuperation] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [dataUser, setDataUser] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);


    const [modalConfirmEmail, setModalConfirmEmail ] = useState(false);
    const [modalPasswordIsOpen, setModalPasswordIsOpen ] = useState(false);

   
    
    function openModalConfirmEmail(){
        setModalConfirmEmail(true);
    }

    function closeModalConfirmEmail(){
        setModalConfirmEmail(false);
    }   

    function closeModalPasswordIsOpen(){
        setModalPasswordIsOpen(false);
    }

    function sendCode(){
        peixelandia_api.get(`/users/findId/${emailRecuperation}`).then((resp) => {
            const id = resp.data.id;
            setButtonDisabled(true);
            
            setDataUser(resp.data);

           
            const object = {
                id: id,
                email: emailRecuperation
            }
            const loadMessage = toast.loading("Aguarde");
            
            
            if(object.id != null || object.id != undefined){
                peixelandia_api.post("/users/confirmCodePassword", object).then(() => {
                    toast.dismiss(loadMessage);
                    setModalPasswordIsOpen(true);
                    setButtonDisabled(false);
                });
            }else{
                toast.dismiss(loadMessage);
                toast.error("Email não cadastrado");
                setButtonDisabled(false);
            }

            
            
        });
        
    }

    function ChangePassword(){
        
       
        const object = {
             // @ts-expect-error: correção
            id: dataUser.id,
            // @ts-expect-error: correção
            username: dataUser.username,
            // @ts-expect-error: correção
            surname: dataUser.surname,
            // @ts-expect-error: correção
            email: dataUser.email,
            password: newPassword,
            // @ts-expect-error: correção
            creation_date: dataUser.creation_date
        }
        setButtonDisabled(true);
      

        const code = `${number1}${number2}${number3}${number4}`
        const number = parseInt(code, 10);
        const loadMessage = toast.loading("Aguarde");

        if(newPassword.length < 8){
            toast.dismiss(loadMessage);
            toast.error("A senha deve conter no mínimo 8 caracteres");
            setButtonDisabled(false);
            return;
        }else if(newPassword != confirmPassword){
            toast.dismiss(loadMessage);
            toast.error("As senhas devem ser iguais");
            setButtonDisabled(false);
            return;
        }else{
            peixelandia_api.post(`users/passwordUpdate/${number}`, object).then(() => {
                toast.dismiss(loadMessage);
                toast.success("Senha alterada com sucesso");
                setModalPasswordIsOpen(false);
                setModalConfirmEmail(false);
                setButtonDisabled(false);
            }).catch(() => {
                toast.dismiss(loadMessage);
                toast.error("Código de verificação incorreto!");
                setButtonDisabled(false);
            });
        }

       
    }   

    
    async function onFinish(){
       
          await  auth.authenticate(email, password);
       
    
   }
    
    

    return (
        <div className="h-screen bg-cover bg-no-repeat flex justify-center items-center " style={{backgroundImage: `url(${banner})`}}>
            {modalConfirmEmail ? 
                <div className="h-screen w-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white w-[600px] h-auto rounded-lg">
                    <div className="w-full flex justify-end">
                        <img onClick={closeModalConfirmEmail}  className="w-10 cursor-pointer" src={close}/>
                    </div>
                    <div className="w-full flex flex-col mt-10 text-center">
                        <p>Enviaremos um email com o código para redefinição da senha</p>
                        <p>Preecha o seu email</p>
                    </div>
                    
                    <div className="flex items-center justify-center mt-6">
                        <Input value={emailRecuperation} onChange={e => setEmailRecuperation(e.target.value)} type="email" />
                    </div>
                    
                    <div className="max-w-[260px] mx-auto mt-4">
                <button disabled={buttonDisabled} type="submit" onClick={sendCode}
                    className="mb-16 mt-4 w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-gray-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Confirmar</button>
            </div>
                </div>
            </div>
            
            : <div></div>}

            {modalPasswordIsOpen ? 
            
            <div className="h-screen w-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white w-[600px] h-auto rounded-lg">
                <div className="w-full flex justify-end">
                    <img onClick={closeModalPasswordIsOpen} className="w-10 cursor-pointer" src={close}/>
                </div>
                <div className="w-full mt-10 text-center">
                    <p>Preencha com o código de confirmação enviado ao seu email</p>
                </div>
                <div className="flex items-center mt-4 mb-5 justify-center gap-3">
                    
                    <input value={number1} onChange={e => setNumber1(e.target.value)}
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        pattern="\d*" maxLength={1} />
                    <input value={number2} onChange={e => setNumber2(e.target.value)}
                        type="text" 
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength={1} />
                    <input value={number3} onChange={e => setNumber3(e.target.value)}
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength={1} />
                    <input value={number4} onChange={e => setNumber4(e.target.value)}
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-black hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength={1} />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}  type="password"  Children="Nova senha"/>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} Children="Confirme a senha"/>
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
            <button disabled={buttonDisabled} type="submit" onClick={ChangePassword}
                className="mb-16 mt-4 w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-gray-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Confirmar</button>
        </div>
            </div>
        </div>
            
            : <div></div>}


            <div className="bg-white w-[450px] h-[500px] rounded-3xl login flex flex-col items-center">
                <div className="mt-8 flex">
                    <img className="w-16" src={icon}/>
                </div>
                <div className="text-center">
                    <p className="font-medium text-2xl">Aquário Digital</p>
                    <p style={{fontSize: "13px"}}>Encontre diferentes <b> Tipos de Peixe </b></p>
                </div>
               
                    <div className="mt-6">
                        <Input value={email}  type="email" Children="Email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-2">
                        <Input value={password} type="password" Children="Senha" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="mt-6">
                        <Button onClick={onFinish} type="submit" children="Entrar"/>
                    </div>
                    <div className="mt-10">
                        <p>Ainda não possui uma conta? <Link to={"/cadastro"} className="text-black font-bold underline">Inscreva-se</Link></p>
                    </div>
                    <div className="mt-2">
                        <a onClick={openModalConfirmEmail} className="text-black underline font-bold cursor-pointer">Esqueci a senha</a>
                    </div>
                
            </div>
            
        </div>
    )
}