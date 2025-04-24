import styles from '../scss/components/title.module.css'

const Title = ({titulo, subtitulo}) => {
    return(
        <>
            <h1 className={`${styles.titulo}`}>{titulo}</h1>
            <h2 className={`${styles.subtitulo}`}>{subtitulo}</h2>
        </>
    )
}

export default Title 