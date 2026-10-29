import styles from './Footer.module.css'
import Link from 'next/link'

const logo = process.env.NODE_ENV === "production" ? "/Portal-Viagens" : "";

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer_inner}>
            <Link href="/" className={styles.footer_brand} aria-label="Voltar ao início">
                <img className={styles.footer_logo} src={`${logo}/image/logo.png`} alt="" />
            </Link>
            <p className={styles.footer_description}>Feito para inspirar sua próxima viagem.<br />© {new Date().getFullYear()} SkyTrip Viagens.</p>
        </div>
    </footer>
)

export default Footer;
