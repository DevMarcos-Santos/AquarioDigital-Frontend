
export interface IUser{
    user: string | undefined;
    email?: string;
    token?: string;
}

export interface IContext extends IUser{
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface Peixe {
    imagem1: string;
    nome: string;
    id: number;
   
  }

