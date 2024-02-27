import style from '../header/style.module.scss'
import Link from 'next/link'
export function Header(){
    return(
        <header className={style.HeaderContainer}>
        <img src="Header4.png"  />
        <div className={style.HeaderContent}>
        <Link href="/">
         <img src="/LogoBoa.png" alt="Logo Youdownload"  />
        </Link>
        </div>
        
        </header>
    
    )



}