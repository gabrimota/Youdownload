// importando  InputHTMLAttributes vamos ter acesso as propriedades 
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
// importando estilo styles.module.scss que criamos para o input
import styles from './styles.module.scss';
// sobreescrevemos o InputHTMLAttributes e o tipo dele vai ser HTMLInputElement
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}
/* input é o campo de texto , aqui nós pegamos as propriedades dele e passamos as propriades na linha 15,
 e o tipo dele vai ser InputProps
 */
export function Input({...rest}: InputProps){
  return(                              
    //recebemos o que ele mandar por parametro aqui
    <input className={styles.inputArea} {...rest} />   
 )
}
// é a mesma coisa do input só que TextArea
export function TextArea({...rest}: TextAreaProps){
    return(
        <textarea className={styles.input} {...rest} />
    )
}
