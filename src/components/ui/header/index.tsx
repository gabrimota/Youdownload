
import style from '../header/style.module.scss'
import Link from 'next/link'

export function Header() {
  return (
     <header className={style.HeaderContainer}>
      <div className={style.HeaderContent}>
        <Link href="/">
          <img src="/LogoBoa.png" alt="Logo Youdownload" className="img-fluid"  />
        </Link>
      </div>
    </header>
  );
}
