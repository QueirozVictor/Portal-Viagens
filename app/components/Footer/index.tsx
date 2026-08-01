import styles from './Footer.module.css'
import Logo from "@/public/image/logo.png"
import Link from 'next/link'
import Image from "next/image";

const Footer = () => {
    return(
        <footer className={styles.footer}>
             <Link 
                href="/"
                >
                    <Image 
                    className={styles.footer_logo}
                    src={Logo} 
                    alt="Logo"/>
                </Link>
            <p className={styles.footer_description}> - Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;