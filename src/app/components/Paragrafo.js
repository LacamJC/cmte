import styles from '../scss/components/paragrafo.module.css'

const Paragrafo = ({texto}) => {
    return(
        <p className={`${styles.paragrafo}`}>{texto}</p>
    )
}

export default Paragrafo