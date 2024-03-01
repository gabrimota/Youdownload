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

// Importamos o Header que usamos na linha 39
import {Header} from "../components/ui/header";

import {BackGround} from "../components/ui/background"
import download from './download';

 // Função do clique nos botões
const handleSubmit = () => {}

// Página Home

export default function Home() {
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
          
          <Form>
            <Input placeholder="E-Mail" type="text" />
            <Input placeholder="Password" type="password" />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Button
                type="submit"
                onClick={handleSubmit}
                style={{
                  backgroundColor: '#292728',
                  border: 'none',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={iconGoogle}
                  alt="Logo do Google"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                Entrar com o Google
              </Button>

              <Button
                type="submit"
                onClick={handleSubmit}
                style={{
                  backgroundColor: '#292728',
                  border: 'none',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={iconFacebook}
                  alt="Logo do Facebook"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                Entrar com o Facebook
              </Button>
            </div>

            <Button type="submit" 
            loading={false} 
            onClick={() => download()}
            >
           
              Log in
            </Button>
          </Form>
        
          <a className={styles.text}>Forgot password? </a>
       
          <br />
          <a className={styles.text}>Don't have an account? click here to create </a>
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
*/