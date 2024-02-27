// página feita para o Button
import { ReactNode, ButtonHTMLAttributes} from 'react';
// importamos o style do botão
import styles from './style.module.scss'

//importamos o icone de carregamento, ele vai funcionar quando o loading estiver como true
import { FaSpinner} from 'react-icons/fa'

// ButtonProps recebe o ButtonHTMLAttributes e o tipo dele é <HTMLButtonElement>
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    // aqui diz se o carregamento está true ou false, se estiver true o icone de carregamento vai aparecer
    loading?: boolean,
    // children é oque está dentro do botão, que seria um texto
    children: ReactNode,
}
// aqu
export function Button({loading,children, ...rest}:ButtonProps){
    return(
        // 
        <button className={styles.button}
      //recebe o valor booleano de loading
        disabled={loading}
       // recebe tudo que eu passar tipo o Type="Submit"
        {...rest}
        >
       
        { loading ? ( // quando loading estiver true ele vai passar o <FaSpinner>
        // cor e tamanho do icone spinner 
        <FaSpinner color='#000000' size={16}  />
        ) : ( 
       // quando o loading não estiver true ele vai passar o comando abaixo que seria o button e seu texto
       //Children recebe o texto de Button
       <a className={styles.buttonText}> 
          {children}
        </a>
        )}
    </button>
    )
}