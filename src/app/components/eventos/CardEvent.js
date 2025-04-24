import styles from '../../scss/eventos/CardEvent.module.css'

const CardEvent = ({image, title, description}) => {
    return (
        <>
            <div className={`${styles.card}`}>
                <div className={`${styles.header}`}>
                    <img src={image} />
                </div>
                <div className={`${styles.body}`}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className={`${styles.footer}`}>
                    <a href="#">
                        <div className={`${styles.btn}`}>
                        Descobrir mais sobre
                        </div>
                    </a>
                </div >
            </div >
        </>
    )
}

export default CardEvent 