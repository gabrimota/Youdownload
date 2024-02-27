//import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
//Importamos o componente Head que usamos na linha 19
import Head from "next/head";
//Importamos o componente Image que usamos na linha 24
import Image from "next/image";
//Importamos o style de home
import styles from '../styles/home.module.scss';
//Importamos as imagens Aqui
import iconFacebook from '../../public/iconFacebook.png';
import iconGoogle from '../../public/iconGoogle.png';

//Importamos o Input que usamos na linha 28 e 34
import {Input} from '../components/ui/input';

// Importamos o Button que usamos na linha 38
import { Button } from '../components/ui/button';

// Importamos o Header que usamos na linha 39
import {Header} from "../components/ui/header";

import { Footer } from '@/components/ui/footer';

 // Função do clique nos botões
const handleSubmit = () => {}

// Página Home
export default function Home() {
  return (
   <>
   <Head /*Titulo do site*/>
    <title> Youdownload - Faça seu login </title>
   </Head>
   
   
   <div className="container-flex">
      <Header /* Cabeçalho */>
      </Header>
   </div>
   <div className={styles.containerCenter}>
   
   <div className={styles.login}>
    
    <form>
      <Input // campo de E-mail
        placeholder="E-Mail"
        type="text"
      />
      
      <Input // campo de senha
       placeholder="Password"
       type="password"
      />

     <div style={{ display: 'flex', flexDirection: 'row' /* adicionamos um display flex e um row para os buttons ficarem um do lado do outro*/}}>
     <button type="submit" onClick={handleSubmit} style={{ backgroundColor: '#292728', border: 'none', padding: '10px', display: 'flex', alignItems: 'center', /* o type do button é submit(envia dados), quando nós clicamos nele chamamos a função handleSubmit e temos o Style do button */}}>
        <Image
          src={iconGoogle} // icone do google
          alt="Logo do Google" // descrição textual alternativa da imagem(essa descrição é exibida quando a imagem não pode ser carregada).
          style={{ width: '50px', height: '50px', marginRight: '10px' }}// Style da logo
        />
        <a>
        Entrar com o Google
        </a>
      </button>
    
      <button type="submit" onClick={handleSubmit} style={{ backgroundColor: '#292728', border: 'none', padding: '10px', display: 'flex', alignItems: 'center'/* o type do button é submit(envia dados), quando nós clicamos nele chamamos a função handleSubmit e temos o Style do button */ }}>
        <Image
          src={iconFacebook} // icone do facebook
          alt="Logo do Facebook" // descrição textual alternativa da imagem(essa descrição é exibida quando a imagem não pode ser carregada).
          style={{ width: '50px', height: '50px', marginRight: '10px' }}// Style da logo
        />
      <a>
       Entrar com o Facebook 
       </a>
      </button>
      </div>
      <Button // botão de login
        type="submit"
        loading={true} //animação dele 
        >
        Login
        </Button>
      
     </form>
     <a className={styles.text}>forgot your password?  </a> 
     <br />
     <a className={styles.text}> Don't have an account? click here to create </a>
  
    </div>
   </div>
    <div className="container-flex">
    <Footer></Footer>
    </div>
   </>
  ); //
} 
/*
<> é um fragment, ele retorna múltiplos elementos 

<title> é o nome da página

<div className={styles.containerCenter}> é o container que vai centralizar tudo

<div className={styles.login}> é a area do formulario

input placeholder(placeholder é uma dica do que se tem que escrever),

 input são os campos de textos que o usuário vai digitar seu E-mail e login, 
 temos o tipo de text que aparece oque o usuario digitou e o password que censura
 o que o usuario digitou

Button é o botão de acessar, o tipo dele é submit(envia dados) e o loading é o icone 
de carregamento
*/