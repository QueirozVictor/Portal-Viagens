import Link from "next/link";
import styles from "./Header.module.css"

const logo = process.env.NODE_ENV === "production" ? "/Portal-Viagens" : "";;

const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Link 
                href="/"
                prefetch={false}
                >
                    <img
                    className={styles.header_logo}
                    src={`${logo}/image/logo.png`}
                    alt="Logo"/>
                </Link>
            </div>
            <nav 
                className={`flex justify-between gap-2 ${styles.header_nav}`}>
                    <Link href="/gridCompleto"><h2>Catalogo de Viagens</h2></Link>
                </nav>
        </header>
    )
}

export default Header;