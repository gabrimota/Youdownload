import { Container,  Form, Row } from 'react-bootstrap';
import React, { ChangeEvent, useState } from 'react';
import RoutesApp from '@/routes'
import Router from 'next/router'
import Head from "next/head";
import Image from "next/image";
//Importamos o componente Image que usamos na linha 24

//Importamos o style de home
import styles from '../../styles/home.module.scss';
//Importamos as imagens Aqui

import { IoMdExit } from "react-icons/io";

import sair from '../../../public/sair.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Loja1 from '../../../public/loja1.png'
//Importamos o Input que usamos na linha 28 e 34
 import {Input} from '../../components/ui/input';
// Importamos o Button que usamos na linha 38
 import { Button } from '../../components/ui/button';
 // Importamos o BackGround 
 import {BackGround} from '../../components/ui/background'

 
 
export default function RegisterAccount() {
  <RoutesApp/>

      // função que é chamado quando aperto no Botão Facebook
      function ButtonRegisterExit(){
        return Router.push('/');
      }

      // a variavel Email recebe os valores do input, setEmail é uma instancia do useState(ele verifica a varivel Email)
      const [Username, setUsername] = useState('');
      const [Email, setEmail] = useState('');
      const [Password, setPassword] = useState('');
      //const [password2] = useState('peido');

      // essa função é chamado quando apertamos o button de log in
      function Register(e: React.FormEvent<HTMLFormElement>) /* e:React.FormEvent previne o envio do formulario caso o usuario não preencha os campos obrigatorios*/  {
        //verifica se tem algo escrito nós dois campos
        if (Username === '' ||Email === '' || Password === ''  ) {
          alert("Digite nos campos obrigatorios");
          e.preventDefault();
        } else {
          e.preventDefault();
          alert("Registrado")
          Router.push('/Download');
        }
      }

      
  return (
  <>
      <Head>
        <title>Youdownload - Register</title>
      </Head>
        


      <IoMdExit style={{
          width:"5%", 
          height:"5%", 
          position:"absolute",
          marginTop:"2%",
          right:"4%", }} 
          type='submit'
          onClick={ButtonRegisterExit}
          > </IoMdExit>
       
      <BackGround/>  

      <Container className={styles.containerCenter}>
        <h3 style={{
          height:"100px", 
          color:"white", 
          fontSize:"50px",
           fontFamily:"Times New Roman" }}> 
            Create Your Account 
            </h3>
        <div className={styles.login}>
           
          <Form onSubmit={Register}>

          <Input 
            placeholder="Username" 
            style={{
            height: "70px",
           
          
              }}   
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            />

          <Input 
            placeholder="E-Mail" 
            style={{
              height: "70px",
              }}   
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />

          <Input 
            placeholder="Password"
            type='password'
            style={{
              height: "70px",
              top:"50%",
           }}   
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            />
            
            <div style={{flexDirection:'row'}}>
            <FcGoogle 
            type='submit'
            style={{
              width: '50px',
              height: '50px', 
              marginRight: '25px',
              marginBottom: '10px',
               }}
              onClick={() => alert("Register Google")}
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
            onClick={() => alert("Register Facebook")}
            />
            </div>
            <Button 
            type="submit" 
             loading={false}
              style={{ 
                height: "60px", 
                fontSize:"1.5rem", 
               
               }}
                 >
             Register
            </Button>

         </Form>
          
         {/* <Button  
          style={{
             marginTop:"0px", 
             backgroundColor: '#292728', 
             cursor: "pointer" , 
             fontSize:"20px"}} 
             onClick={() => alert("click here to create ")}>
          <p 
          style={{
            color: "var(--whiteD)"}}>
              Click here to login  </p> 
           </Button> */}
        
        </div>
        
      </Container>
     
 
 
  </>
  );
}