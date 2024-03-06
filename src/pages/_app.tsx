/* o _app renderiza toda a nossa pagina,
ele vai estar em todas as páginas por isso que nós colocamos o estilo global nele
*/
import '../styles/App.scss'
// importamos o style global
import '../styles/globals.scss'
// importamos o AppProps que  fornece as propriedades padrão para o componente App.
import type { AppProps } from "next/app";

//import { AuthProvider} from "../contexts/AuthContext" 
// pageProps pega todas as propriedades das paginas 
 function App({ Component, pageProps }: AppProps) {
// aqui é renderizado a pag que está sendo chamada (quando nos entramos na home, cadastro, login)
  return( 
  //  Component é a pagina atual , ele recebe todas props de pageProps garantindo que as páginas tenham acesso às propriedades necessárias para sua renderização e funcionalidade
    <Component {...pageProps} />
   
    )
  
 
}
// exportamos o App
export default App