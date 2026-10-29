import Link from "next/link";
import styles from "./Header.module.css"

const logo = process.env.NODE_ENV === "production" ? "/Portal-Viagens" : "";

const Header = () => (
    <header className={styles.header}>
        <div className={styles.header_container}>
            <Link href="/" aria-label="SkyTrip — página inicial" className={styles.brand}>
                <img className={styles.header_logo} src={`${logo}/image/logo.png`} alt="" />
                <span className={styles.brand_name}>SkyTrip<span>Viagens</span></span>
            </Link>
            <nav className={styles.header_nav} aria-label="Navegação principal">
                <Link href="/" className={styles.nav_link}>Início</Link>
                <Link href="/gridCompleto" className={styles.nav_cta}>Explorar destinos <span aria-hidden="true">→</span></Link>
            </nav>
        </div>
    </header>
)

export default Header;
