import { Container,  Form , Row , Col} from 'react-bootstrap';
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
import { ImExit } from "react-icons/im";
//Importamos o Input 
 import {Input} from '../../components/ui/input';
// Importamos o Button 
 import { Button } from '../../components/ui/button';
 // Importamos o BackGround 
 import {BackGround} from '../../components/ui/background'

export default function RegisterAccount() {
  <RoutesApp/>
      
      
      
      // a variavel Email recebe os valores do input, setEmail é uma instancia do useState(ele verifica a varivel Email)
      const [FullName, setFullName] = useState('');
     // a variavel Email recebe os valores do input, setEmail é uma instancia do useState(ele verifica a varivel Email)
      const [Email, setEmail] = useState('');
      const [Password, setPassword] = useState('');
      const [Confirmpassword, setConfirmpassword] = useState('');
      const [Showpassword, setShowpassword] = useState(false);
      const [ShowConfirmpassword, setShowConfirmpassword] = useState(false);
      //const [password2] = useState('peido');
      // essa função é chamado quando apertamos o button de log in
       /* e:React.FormEvent previne o envio do formulario caso o usuario não preencha os campos obrigatorios*/  
      function Register(e: React.FormEvent<HTMLFormElement>){
       // Variavel que recebe o nome digitado no input
        const nome = FullName;
       // indexOf verifica se tem espaço no que foi escrito pelo Usuario se tiver ele retorna 0 ou um número maior se não retorna -1
       //atribuimos isso ao FirstSpace
        const FirstSpace = nome.indexOf(" ");
        //verifica se tem algo escrito nos campos
        e.preventDefault();
        if (FullName === '' || FullName === ' ' ||Email === '' || Password === '' || Confirmpassword === '') {
          if(FullName === ''){
            alert("Digite seu nome completo")
          }  if(FullName === ' '){
            alert("Digite seu nome completo")}
          if(Email === ''){
            alert("Digite seu Email")
          }  if(Email === ' '){
            alert("Digite seu Email")}
          if(Password === ''){
            alert("Digite sua Password")
          } if(Password === ' '){
            alert("Digite seu Password")}
          if(Confirmpassword === ''){
            alert("Digite seu Confirmpassword")
          }  if(Confirmpassword === ' '){
            alert("Digite seu Confirmpassword")}
          // serve para previnir a atualização da pagina
         
          return
        }  
        
         if(Password === Confirmpassword ){
          alert("Registrado");
         
          Router.push("/Download")
         } 
          else{
           alert("Senhas diferentes");
          
           return
         } // verifica se o espaço foi encontrado caso não seja encontrado o indexOf retorna -1, caso ele encontre ele retorna um número maior ou igual a zero
         
        if( FirstSpace !== -1){
          // substring serve serve para extrair tudo que foi escrito antes do primeiro espaço, 0 é a posição que seria o primeiro espaço e FirstSpace seria o espaço
          const nomeAntesDoEspaco = nome.substring(0, FirstSpace);
          setFullName(nomeAntesDoEspaco);
          
          alert(`Nome: ${nomeAntesDoEspaco}  Email: ${Email}  Senha: ${Password}`);
          

        }  // verifica se não tiver espaço envia apenas o nome que foi escrito , fiz isso pq ele n mostrava o nome caso não tivesse espaço
         else if(FirstSpace === -1){
          alert(`Nome: ${FullName}  Email: ${Email}  Senha: ${Password}`);
         
        }  
      } 
      // Função que é chamada para mudar o valor booleano do Showpassword
      function ShowpasswordClick(){
        
        //Muda o estado da variavel usando o operador de negação ("!") , de false ele vai para true
        setShowpassword(!Showpassword);
      }
      // Função que é chamada para mudar o valor booleano do ShowConfirmpassword
      function ShowConfirmpasswordClick(){
        
        //Muda o estado da variavel usando o operador de negação ("!") , de false ele vai para true
        setShowConfirmpassword(!ShowConfirmpassword);
      }
      // função que é chamado quando clicamos no botão de sair da pagina
      function ButtonRegisterExit(){
        //solicita a navegação para a rota Home
        return Router.push('/');
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

      <Container fluid="md" className={styles.containerCenter}>
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
              position: 'fixed',
              right: '42%',
              bottom: '39.5%',
              border: 'none',
              transform: 'translateY(-50%)',
              background: 'none',
              cursor: 'pointer',
              color: "white", //'#292728'
              height: "20px",
              width:"10px",
               }}
            onClick={ShowpasswordClick}
            >
           {Showpassword ?
               <IoEyeSharp style={{width:"30px", height:"30px"}}/> :
                <IoEyeOffSharp style={{width:"30px", height:"30px"}} />}
             </button>

             <button className=" align-items-center justify-content-center"
              style={{
              position:'absolute',
              right: '42%',
              bottom: '29%',
              border: 'none',
              transform: 'translateY(-0%)',
              background: 'none',
              cursor: 'pointer',
              color: "blue", //'#292728'
              height: "20px",
              width:"10px",
              
             
             
               }}
            onClick={ShowConfirmpasswordClick}
            >
           {ShowConfirmpassword ? <IoEyeSharp style={{width:"30px", height:"30px"}}/> :  <IoEyeOffSharp style={{width:"30px", height:"30px"}} />}
             </button> 
             </div>
         
            
             
                 {/* <IoEyeSharp style={{position:"absolute", right:"42%", bottom:"28.5%"}}/> */}
      </Container>
       
 
 
  </>
  );
}