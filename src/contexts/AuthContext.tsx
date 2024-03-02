// useState vai servir para receber os dados do usuario
import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
    // informações do Usuario
   
   // serve para sabermos se o usuario esta logado ou não
    isAuthenticated: boolean; 
   // promise não está retornando nada por enquanto / ela vai ir na API
    singIn: (credentials: SingInProps) => Promise<void>; 
}

// informações do usuario / ainda n tenho um banco de dados com essas informações
type UserProps = {
    id: string;
    name: string;
    email: string;
}
// informações de login do usuario
type SingInProps = {
    email: string;
    password: string;

}
type AuthProviderProps = {
    // children recebe o ReactNode
    children: ReactNode; 
}
// aqui nós fazemos uma tipagem para o AuthContext(ele tem as 3 props do AuthContextData)
export const AuthContext = createContext({} as AuthContextData) 

export function AuthProvider({children}: AuthProviderProps ){
    // armazenamos os dados do Usuario / useState vai obedecer o UserProps
    const [user,setUser] = useState<UserProps>()
    // !! converte a variavel user em booleano, se o useState estiver vazio vai virar false, caso esteja com as informações do Usuario dentro ele fica true ( false = não está logado , true = vai estar logado)
    const isAuthenticated = !!user;
       
    async function singIn(){
            alert("${email}")   
        }

    return(
       // acessamos o AuthContexto aqui , nosso contexto vai estar por volta da aplicação
       // por volta vai ter o contexto e dentro dele vai ter as paginas(a renderização delas)
       <AuthContext.Provider value={{ isAuthenticated, singIn}}>
            {children}
       </AuthContext.Provider>
    )
}

