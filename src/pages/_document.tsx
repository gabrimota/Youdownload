// Nessa pag foi montada uma estrutura de renderização


import { Html, Head, Main, NextScript } from "next/document";
// estrutura que renderiza a aplicação apenas uma vez(quando nós rodamos a aplicação, ele renderiza o document())
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      
        <Main /> 
        <NextScript />
     
      </body>
    </Html>
  );
}
/*
<Html lang="en"> é a linguagem que estamos utilizando
<Head /> é a parte do código que não aparece na pagina da web
<body> é o corpo do código é a parte que aparece na pagina 
<Main />  é a pagina que vai ser renderizada
<NextScript /> carrega os scripts necessários para o site
*/