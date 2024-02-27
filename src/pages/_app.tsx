/* o _app renderiza toda a nossa pagina,
ele vai estar em todas as páginas por isso que nós colocamos o estilo global nele
*/
import '../styles/App.scss'
// importamos o style global
import '../styles/globals.scss'
// immportamos o AppProps
import type { AppProps } from "next/app";
// pageProps pega todas as propriedades das paginas 
 function App({ Component, pageProps }: AppProps) {
// aqui é renderizado a pag que está sendo chamada (quando nos entramos na home, cadastro, login)
  return <Component {...pageProps} />;
}
// exportamos o App
export default App