// importamos as rotas da nossa aplicação
import RoutesApp from '@/routes'
import Router from 'next/router'

import React, { ChangeEvent, useState } from 'react';
//import styled from 'styled-components';
import { Container, Row, Col, Form } from 'react-bootstrap';
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
import {BackGround} from "../components/ui/background"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

// Página Home

export default function Home() {
        
        <RoutesApp/> // Esse componente possui as rotas do nosso site

      // função que é chamado quando aperto no Botão Login
      function ButtonLoginGoogle(){
        return alert("Login Google")
      }
      // função que é chamado quando aperto no Botão Facebook / provavelment aqui seria um modal
      function ButtonLoginFacebook(){
        return alert("Login Facebook")
      }

      function ButtonForgotPassWord(){
        Router.push('/ForgotPassWord')
      }
      
      function Register(){
        Router.push('/RegisterAccount');
      }
      
      //  o UseState Possui o valor inicial q é uma String vazia 
      // Email  armazenará o valor atual 
      // setState permite atualizar o valor da variável de estado
      // declaramos variaveis de estado, Email, Password, elas começam vazias ('')
      // a variavel Email recebe os valores do input, setEmail é uma instancia do useState(ele verifica a varivel Email)

      const [Email, setEmail] = useState(''); 
     
      const [password, setpassword] = useState('');
      //const [password2] = useState('peido');

      // essa função é chamado quando apertamos o button de log in
      function handleLogin(e: React.FormEvent<HTMLFormElement>) /* e ou event:React.FormEvent previne o envio do formulario caso o usuario não preencha os campos obrigatorios*/  {
        //verifica se tem algo escrito nós dois campos , se tiver algo escrito nos dois campos o usuario é redirecionado p pag de Download
        if (Email === '' || password === '') {
          alert("Digite nos campos obrigatorios");
          e.preventDefault();
        } else {
          e.preventDefault();
          Router.push('/Download');
       
        }
      }
     
    
      return (
      <>
      <Head>
        {/* Titulo da Pag */}
        <title>Youdownload - Log in</title>
      </Head>
      {/* Uma div com um container que deixa minha estrutura flexivel */}
      <div className='container-flex'>
     {/* Componente que trás a Imagem de fundo do Site */}
      <BackGround>  
        
      </BackGround>
      {/* Um container que aplica estilo */}
      <Container className={styles.containerCenter}>
        {/*  Uma div que vai aplicar estilo nos componentes da pagina de login*/}
        <div className={styles.login}>
          {/* Formulário que chama a função handleLogin ao ser chamado */}
          <Form onSubmit={handleLogin}>
            {/* As Duas entradas De Texto */}
            <Input placeholder="E-Mail" type="text" value={Email} onChange={ (e) => setEmail(e.target.value)} /*OnChange chama uma função que muda o valor da var Email pelo oq foi digitado no campo é o setEmailque faz isso *//>
            <Input placeholder="Password" type="password" value={password} onChange={ (e) => setpassword(e.target.value)} />
            {/* Uma div para configurar a Direção dos dois Buttons Google Facebook */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
             {/* Botão do Google */}
             <FcGoogle 
            type='submit'
            style={{
              width: '50px',
              height: '50px', 
              marginRight: '25px',
              marginBottom: '10px',
               }}
              onClick={() => ButtonLoginGoogle()}
              />
           
            <FaFacebook
            type='submit'
            style={{
              width: '50px',
              height: '50px', 
              marginRight: '10px',
              marginBottom: '10px',
              color:'#1C96EB',
              backgroundColor:'white',
              borderRadius:'100%'
            }}
            onClick={() => ButtonLoginFacebook()}
            />
            </div>
              {/* Botão de login que vai chamar a Função HandleLogin*/}
            <Button
             type="submit" 
              loading={false}
               style={{ height: "60px", 
               fontSize:"1.5rem",
                width: "200px",
                
                 }} >
              Log in
            </Button>
           
          </Form>
          {/* Botão de esqueceu a senha */}
          <Button 
           style={{
            marginBottom:"0", 
            backgroundColor: '#292728',
             cursor: "pointer",
              fontSize:"20px",
            }} 
              onClick={() => ButtonForgotPassWord()}>
          <p 
          style={{
            color: "var(--whiteD)",
            fontSize:"1.3rem",
            }}>
              Forgot password? </p>
          </Button>
         
          <br /> 
         {/* Botão de não tem a conta? */}
          <Button  
          style={{
             marginTop:"0px", 
             backgroundColor: '#292728', 
             cursor: "pointer" , 
             fontSize:"20px"}} 
             onClick={() => Register()}>
          <p 
          style={{
            color: "var(--whiteD)",
            fontSize:"1.3rem",
            }}>
              Don't have an account? click here to create  </p> 
           </Button>
        
        </div>
        
      </Container>
      </div>
    </>
  );
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

os dois ultimos textos são buttons que levam para outras páginas como cadastro e esqueci a senha
*/