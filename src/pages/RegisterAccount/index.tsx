import { Container,  Form} from 'react-bootstrap';
import React, {  useState } from 'react';
import RoutesApp from '@/routes'
import Router from 'next/router'
import Head from "next/head";
//Importamos o style de home
import styles from '@/pages/RegisterAccount/register.module.scss'
//import styles from '../../styles/home.module.scss';
//Importamos as icones Aqui
import { IoMdExit } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

//Importamos o Input 
 import {Input} from '../../components/ui/input';
// Importamos o Button 
 import { Button } from '../../components/ui/button';
 // Importamos o BackGround 
 import {BackGround} from '../../components/ui/background'

export default function RegisterAccount() {
  <RoutesApp/>
     
  // i = "Gabriel Bomfim Mota da Silva";
  // i = ["Gabriel","Bomfim", "Mota", "da", "Silva"]
     
      // função que é chamado quando aperto no Botão Facebook
      function ButtonRegisterExit(){
        return Router.push('/');
      }
      // a variavel Email recebe os valores do input, setEmail é uma instancia do useState(ele verifica a varivel Email)
      const [FullName, setFullName] = useState('');
      const [Email, setEmail] = useState('');
      const [Password, setPassword] = useState('');
      const [Confirmpassword, setConfirmpassword] = useState('');
      const [Showpassword, setShowpassword] = useState(false);
      const [ShowConfirmpassword, setShowConfirmpassword] = useState(false);
      //const [password2] = useState('peido');
      // essa função é chamado quando apertamos o button de log in
      function Register(e: React.FormEvent<HTMLFormElement>) /* e:React.FormEvent previne o envio do formulario caso o usuario não preencha os campos obrigatorios*/  {
        const nome = FullName;
        const FirstSpace = nome.indexOf(" ");
        //verifica se tem algo escrito nós dois campos
        if (FullName === ' ' ||Email === '' || Password === '') {
          alert("Digite nos campos obrigatorios");
          e.preventDefault();
        } else if( FirstSpace !== -1 || Password !== Confirmpassword ){
          e.preventDefault();
          const PrimeiroNome = nome.substring(0, FirstSpace);
          setFullName(PrimeiroNome);
          alert(`Nome:${PrimeiroNome}  Email:${Email}  Senha:${Password}`);
          //Router.push("/Download");
        } 
         else{
          e.preventDefault();
          alert("Senhas diferentes");
        }
      } 

      function ShowpasswordClick(){
        //!Showpassword
        setShowpassword(!Showpassword);
      }
      function ShowConfirmpasswordClick(){
        //!Showpassword
        setShowConfirmpassword(!ShowConfirmpassword);
      }
  return (
  <>
      <Head>
        <title>Youdownload - Register</title>
      </Head>
        {/* Botão de Exit  */}
      <IoMdExit style={{
          width:"5%", 
          height:"5%", 
          position:"absolute",
          marginTop:"2%",
          right:"4%", }} 
          type='submit'
          onClick={ButtonRegisterExit}
          > </IoMdExit>
       {/* Imagem de Background */}
      <BackGround/>  

      <Container className={styles.containerCenter}>
       {/* Texto Grande */}
        <h3 style={{
          height:"100px", 
          color:"white", 
          fontSize:"50px",
           fontFamily:"Times New Roman" }}> 
            Create Your Account 
            </h3>
       
        <div className={styles.login}>
           
          <Form onSubmit={Register}>
          {/* Entrada de Texto Username */}
          <Input 
            placeholder="Full Name" 
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            />
           

          {/* Entrada de Texto E-Mail */}
          <Input 
            placeholder="E-Mail" 
            style={{
             
              }}   
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />
          {/* Entrada de Texto Password */}
          <Input 
            placeholder="Password"
            type={Showpassword ? 'text' : 'password'}
            style={{
              
              top:"50%",
           }}   
          // A Variavel que guarda as inf do input é a Password
            value={Password} 
            onChange={(e) => setPassword(e.target.value)}
            />

          <Input 
            placeholder="Confirm Password"
            type={ShowConfirmpassword ? 'text' : 'password'}
           
          // A Variavel que guarda as inf do input é a Password
            value={Confirmpassword} 
            onChange={(e) => setConfirmpassword(e.target.value)}
            />
            
            {/* Div Feita para Deixar os botões em uma linha */}
            <div style={{flexDirection:'row'}}>
           {/* Botão de login Google */}
            <FcGoogle 
            type='submit'
            style={{
              width: '50px',
              height: '50px', 
              marginRight: '25px',
              
               }}
              onClick={() => alert("Register Google")}
              />
           {/* Botão de login Facebook */}
            <FaFacebook
            type='submit'
            style={{
              width: '50px',
              height: '50px', 
              marginRight: '10px',
              
              color:'#1C96EB',
              backgroundColor:'white',
              borderRadius:'50%'
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
         <button
              style={{
              position: 'absolute',
              right: '42%',
              bottom: '39.5%',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: '#292728',
              height: "20px",
              width:"10px",
               }}
            onClick={ShowpasswordClick}
            >
           {Showpassword ?
               <IoEyeSharp style={{width:"30px", height:"30px"}}/> :
                <IoEyeOffSharp style={{width:"30px", height:"30px"}} />}
             </button>

             <button
              style={{
              position: 'absolute',
              right: '42%',
              bottom: '29%',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: '#292728',
              height: "20px",
              width:"10px",
             
               }}
            onClick={ShowConfirmpasswordClick}
            >
           {ShowConfirmpassword ? <IoEyeSharp style={{width:"30px", height:"30px"}}/> :  <IoEyeOffSharp style={{width:"30px", height:"30px"}} />}
             </button>
                
                 {/* <IoEyeSharp style={{position:"absolute", right:"42%", bottom:"28.5%"}}/> */}
        </div> 
      </Container>
     
 
 
  </>
  );
}