import styles from './Footer.module.css'
import Link from 'next/link'

const logo = process.env.NODE_ENV === "production" ? "/Portal-Viagens" : "";;

const Footer = () => {
    return(
        <footer className={styles.footer}>
             <Link 
                href="/"
                prefetch={false}
                >
                    <img 
                    className={styles.footer_logo}
                    src={`${logo}/image/logo.png`} 
                    alt="Logo"/>
                </Link>
            <p className={styles.footer_description}> - Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;