import Image from "next/image";


export function Loja (){
    return(

        <div>
         
           <img
          src="loja1.png"
          alt="Sua Imagem"
          className="img-fluid"
          style={{
            maxHeight: '15%',
            maxWidth: '15%', 
            position: "absolute",
            right: "5%",
            marginTop:"2%"
        }}
         />
      </div>

    )
}