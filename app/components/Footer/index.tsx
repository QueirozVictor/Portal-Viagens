import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return(
        <footer className={styles.footer}>
             <Link 
                href="/"
                >
                    <img 
                    className={styles.footer_logo}
                    src="/image/logo.png" 
                    alt="Logo"/>
                </Link>
            <p className={styles.footer_description}> - Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;