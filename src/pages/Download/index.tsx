import { Container,  Form } from 'react-bootstrap';
import React, { ChangeEvent, useState } from 'react';
import RoutesApp from '@/routes'
import Router from 'next/router'
import Head from "next/head";
import Image from "next/image";
//Importamos o componente Image que usamos na linha 24

//Importamos o style de home
import styles from '../../styles/home.module.scss';
//Importamos as imagens Aqui

import IconAds from '../../../public/IconAds.png'
import sair from '../../../public/sair.png'


import Loja1 from '../../../public/loja1.png'
//Importamos o Input que usamos na linha 28 e 34
 import {Input} from '../../components/ui/input';
// Importamos o Button que usamos na linha 38
 import { Button } from '../../components/ui/button';
 // Importamos o BackGround 
 import {BackGround} from '../../components/ui/background'
import { json } from 'stream/consumers';

export default function Download() {
  <RoutesApp/>
  // função criada para contar o click no button
  function ClickSave() {
    // o localStorage é um recurso do navegador para armazenar dados localmente no dispositivo do usuário esses dados persistam mesmo após o fechamento e reabertura do navegador.
    // aqui o savedclicks recebe o valor armazenado no localStorage.getItem da chave @PlayListClicks
    const savedclicks = localStorage.getItem("@PlayListClicks");
    // aqui o a var clicksave inicializa como um array do tipo string vazio ( ele vai receber a string "ja usado" sinalizando que o usuario já deu o click)
    let clicksave: String[] = [];
    // vejo se existe algo dentro do savedclicks
    if (savedclicks) {
       // aqui o clicksave recebe o JSON.parse que converte o contéudo String JSON do savedclicks para o formato do String do Javascript(seguindo a lógica se ele entrar nesse if é pq o usuario já utilizou o download então o clicksave já vai ter recebido o "ja usado" q já está no formato JSON então o parse transforma ele em javascript novamente)
       // JSON.parse() é usado para converter a string de volta para um array quando é recuperada do localStorage.
       clicksave = JSON.parse(savedclicks);
        
    }
    // aqui o hasclick recebe o clicksave.some que verifica se o array clicksave tem o valor  "ja usado" se sim ele retorna um true se não um false
    // o some verifica se tem pelo menos um elemento no array que seja igual ao "ja usado"( verifica se satisfaz uma condição)
    // (click) é uma declaração de parâmetro da função de seta, sempre que a função for chamada(click) espera receber um valor que pode ser "Ja usado" ou não ai comparamos o valor do parâmetro click com a string "ja usado"
    const hasclick = clicksave.some((click) => click === "ja usado");
    // vejo se tem algo dentro do hasclick(que vai ser true ou false) se sim ele entra no if e mostra o alert
    // verifica se existe algo no hasclick (se tiver um true quer dizer q o usuario já fez download e aparece o alert se não ele vai para o clicksave.push que vai pegar o calor de clickButton que é "ja usado")
    if (hasclick) {
      // mostra pro usuario que ele já fez 1 download e tem q pagar 
        alert("Pague para usar novamente");
        // leva até a pagina Store
        Router.push("/Store");
        return;
    }
    
    // o push adiciona o valor de ClicksButtons("Ja usado") ao array clicksave
    clicksave.push(ClicksButtons);
    // o setItem adiciona o valor de clicksave(que é "Ja usado")  a chave @PlayListClicks que é adicionado ao localStorage
                         // Chave       |    Valor que desejamos adicionar a chave é transformado em uma String no formato JSON( o locaLStorage só pode guardar Strings)
    localStorage.setItem("@PlayListClicks", JSON.stringify(clicksave));
    alert("Download Concluído");
    
}
      // função que é chamado quando aperto no Botão Login
      function ButtonRemovaAds(){
        return Router.push('/Store')
      }
      // função que é chamado quando aperto no Botão Facebook
      function ButtonLoginExit(){
        return Router.push('/');
      }
      // a variavel Email recebe os valores do input, setEmail é uma instancia do useState(ele verifica a varivel Email)
      const [Video, setVideo] = useState('');
      const [PlayListVideo, setPlayListVideo] = useState('');
      const [ClicksButtons, setClicksButtonst] = useState('ja usado');
      //const [password2] = useState('peido');
      // essa função é chamado quando apertamos o button de log in
      function DownloadVideo(e: React.FormEvent<HTMLFormElement>) /* e:React.FormEvent previne o envio do formulario caso o usuario não preencha os campos obrigatorios*/  {
        //verifica se tem algo escrito nós dois campos
        e.preventDefault();
        if (Video === '' ) {
          alert("Digite no campo Video Link");
          
        } else {
          
          alert("Download Video")
       
        }
      }

      function DownloadListVideo(e: React.FormEvent<HTMLFormElement>) /* e:React.FormEvent previne o envio do formulario caso o usuario não preencha os campos obrigatorios*/  {
        setClicksButtonst(ClicksButtons + 1 );
        //verifica se tem algo escrito no campos
        e.preventDefault();
        if (PlayListVideo === '') {
          alert
        } 
      }
 
  return (
  <>
      <Head>
        <title>Youdownload - Download Video</title>
      </Head>
     
        <Button 
        type='submit' 
        style={{
          width:"2%", 
          height:"5%", 
          position:"absolute",
          backgroundColor:"red", 
          right:"4%", }} 
          onClick={ButtonLoginExit} >
          <Image
           src={sair}
            alt='Icon Exit'
             style={{
              width:"60px", 
              height:"60px",
              paddingRight:"0%"}}>
              </Image>
        </Button>   
        <Button 
        type='submit'
         style={{
          width:"2%", 
          height:"5%",
           position:"absolute",
            marginRight:"8%", 
            backgroundColor:"red",
           right:"80px"}}
            onClick={ButtonRemovaAds}>
          <Image 
          src={IconAds}
           alt='Icon Ads'
            style={{
              width:"80px",
               height:"60px", 
               paddingRight:"18px" }}>
               </Image>
        </Button>       

        <BackGround/>  

      <Container className={styles.containerCenter}>
        
        <div className={styles.login}>
          
          <Form onSubmit={DownloadVideo}>
          
            <Input 
            placeholder="Video Link" 
            type="text" 
            style={{
            height: "70px",
            fontSize:"1.5rem"}}  /*OnChange chama uma função que muda o valor da var Email pelo oq foi digitado no campo é o setEmailque faz isso */
            value={Video}
            onChange={(e) => setVideo(e.target.value)}
            />

            <Button 
            type="submit"  
            loading={false} 
            style={{ 
              
              height: "60px", 
              fontSize:"1.5rem", 
              width: "200px",  
              marginBottom:"10%",
              }} >
            
             Download
            </Button>
            
           
           
          </Form>

          <Form onSubmit={DownloadListVideo}>
    
          <Input 
            placeholder="Playlist Link" 
            style={{height: "70px",
            fontSize:"1.5rem"}}   
            value={PlayListVideo}
            onChange={(e) => setPlayListVideo(e.target.value)}
            />
           <div className={styles.button}>
            <Button 
            type="submit" 
             loading={false}
              style={{ 
                height: "60px", 
                fontSize:"1.5rem", 
                width: "200px", 
                 }} 
                 onClick={ClickSave}   
                    >
             Download
            </Button>
            </div>
         </Form>
          
        </div>
        
      </Container>
     
 
 
  </>
  );
}