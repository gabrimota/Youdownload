import { Container,  Form } from 'react-bootstrap';
import React, { useState } from 'react';
import RoutesApp from '@/routes'
import Router from 'next/router'
import Head from "next/head";
import Image from "next/image";
//Importamos o componente Image que usamos na linha 24

//Importamos o style de home
import styles from '../../styles/home.module.scss';
//Importamos as imagens Aqui

import sair from '../../../public/sair.png'

//Importamos o Input que usamos na linha 28 e 34
 import {Input} from '../../components/ui/input';
// Importamos o Button que usamos na linha 38
 import { Button } from '../../components/ui/button';
 // Importamos o BackGround 
 import {BackGround} from '../../components/ui/background'
import { IoMdExit } from 'react-icons/io';

 
 
export default function ForgotPassWord() {
  <RoutesApp/>

      
      
      // função que é chamado quando aperto no Botão de sair
      function ButtonForgotPasswordExit(){
        return Router.push('/');
      }

      // a variavel Email recebe os valores do input, setEmail é uma instancia do useState(ele verifica a varivel Email)
    
      const [Email, setEmail] = useState('');
      
     
      // essa função é chamado quando apertamos o button de Send
      function Register(e: React.FormEvent<HTMLFormElement>) /* e:React.FormEvent previne o envio do formulario caso o usuario não preencha os campos obrigatorios*/  {
        //verifica se tem algo escrito no campo
        if (Email === '' ) {
          alert("Digite nos campos obrigatorios");
          e.preventDefault();
        } else {
          e.preventDefault();
          alert("See your Email")
          
        }
      }

      
  return (
  <>
      <Head>
        <title>Youdownload - Register</title>
      </Head>
        {/* botão que volta para pag home */}
        <IoMdExit style={{
          width:"5%", 
          height:"5%", 
          position:"absolute",
          marginTop:"2%",
          right:"4%", }} 
          type='submit'
          onClick={ButtonForgotPasswordExit}
          > </IoMdExit>

      <BackGround/>  

      <Container className={styles.containerCenter}>
        {/* Texto Grande */}
        <h3 style={{
          height:"100px", 
          color:"white", 
          fontSize:"50px",
           fontFamily:"Times New Roman" }}> 
            Recover Your Password
            </h3>
        <div className={styles.login}>
           
          <Form onSubmit={Register}>
            
          <Input 
            placeholder="E-Mail" 
            style={{
              height: "70px",
              }}   
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />
          
            <Button 
            type="submit" 
             loading={false}
              style={{ 
                height: "60px", 
                fontSize:"1.5rem", 
               }}
                 >
             Send
            </Button>
         </Form> 
        </div>
      </Container>
  </>
  );
}