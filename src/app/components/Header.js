import styles from '../scss/header/header.module.css'
import SideMenu from './SideMenu'
import logo from '../../asset/img/loo_cmte.png'

const Header = () => {

    const handleClick = () => {
        console.log('clicado')
    }

    return(
        <header className={`${styles.header}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.logo}`}>
                    <img src={logo} className={`${styles.logo_image}`}/>
                </div>
                <input type="checkbox" className={`${styles.checkbox}`} onClick={handleClick} />
                <SideMenu/>
            </div>
        </header>
    )
}

export default Header