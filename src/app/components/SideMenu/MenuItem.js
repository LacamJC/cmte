import styles from  '../../scss/SideMenu/Main.module.css'

const MenuItem = ({label, url}) => {
    return (
        <>
            <a className={`nav-link ${styles.nav_link}`} href={url} aria-disabled="true">
                {label}
            </a>
        </>
    )
}

export default MenuItem