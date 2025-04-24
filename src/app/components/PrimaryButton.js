import styles from '../scss/components/BtnPrimary.module.css'
const PrimaryButton = ({descricao, url}) => {
    return(
        <>
            <a href={url} className={`${styles.button_link}`}>
                <div className={`${styles.button}`}>
                    {descricao}
                </div>
            </a>
        </>
    )
}

export default PrimaryButton