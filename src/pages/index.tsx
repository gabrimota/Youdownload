import {FormEvent, useContext} from 'react'
import React, { ChangeEvent, useState } from 'react';
//import styled from 'styled-components';
import { Container, Row, Col, Form } from 'react-bootstrap';

import Link from 'next/link';
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

import {AuthContext} from "../contexts/AuthContext"



 // Função do clique nos botões

// Página Home

export default function Home() {

      function ButtonLoginGoogle(){
        return alert("Login Google")
      }
      function ButtonLoginFacebook(){
        return alert("Login Facebook")
      }
      const [Email, setEmail] = useState('');
      const [password, setpassword] = useState('');
      //const [password2] = useState('peido');

      function handleLogin(e: React.FormEvent<HTMLFormElement>) {
       
        if (Email === '' || password === '') {
          alert("Digite nos campos obrigatorios");
          e.preventDefault();
        } else {
          alert(`Email: ${Email} Senha: ${password}`);
        }
      }
      
    
      return (
      <>
      <Head>
        <title>Youdownload - Faça seu login</title>
      </Head>
      
      <div className='container-flex'>
     
      <BackGround>  
        
      </BackGround>
      
      <Container className={styles.containerCenter}>
        
        <div className={styles.login}>
          
          <Form onSubmit={handleLogin}>
            <Input placeholder="E-Mail" type="text" value={Email} onChange={ (e) => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={ (e) => setpassword(e.target.value)} />
            
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Button type='reset' onClick={ButtonLoginGoogle} style={{ backgroundColor: '#292728', width:'50px' , height: '30px', marginLeft:'-1%',marginRight: '25px',border: 'none', padding: '10px', display: 'flex', alignItems: 'center',}}>
                <Image src={iconGoogle}  alt="Logo do Google"  style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
              </Button>
            <Button type='reset' onClick={ButtonLoginFacebook} style={{  backgroundColor: '#292728', width:'50px' , height: '30px', border: 'none',  padding: '10px',  display: 'flex',   alignItems: 'center'}}>
              <Image src={iconFacebook}  alt="Logo do Facebook"  style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
            </Button>
            </div>
            <Button type="submit"  loading={false} style={{ height: "50px", fontSize:"1.2rem", width: "200px", color:"black"}} >
              Log in
            </Button>
          </Form>
        
            
           

           
          


          
          <Link href="" style={{marginTop:"1rem", color: "var(--whiteD)", cursor: "pointer", fontSize:"15px"}} onClick={() => alert("Forgot Password")}>
          Forgot password? 
          </Link>
          <br />
          <Link href="" style={{marginTop:"1rem", color: "var(--whiteD)", cursor: "pointer" , fontSize:"15px"}} onClick={() => alert("click here to create ")}>
           Don't have an account? click here to create 
           </Link>
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

Link são os textos que levam para outras páginas como cadastro e esqueci a senha
*/