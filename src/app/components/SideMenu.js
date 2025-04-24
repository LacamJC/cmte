import styles from '../scss/header/header.module.css'

const SideMenu = () => {
    return (
        <nav className={`${styles.sideBar}`}>
            <ul>
                <li>OADOKSADO</li>
            </ul>
        </nav>
    )
}

export default SideMenu