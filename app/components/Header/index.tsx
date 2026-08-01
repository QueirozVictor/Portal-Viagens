import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/image/logo.png"
import styles from "./Header.module.css"

const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Link 
                href="/"
                >
                    <Image 
                    className={styles.header_logo}
                    src={Logo} 
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