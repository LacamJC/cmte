import PrimaryButton from '../../components/PrimaryButton'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import styles from '../../scss/sobre/sobre.module.css'
import foto_perfil from '../../../asset/img/cmte_hamilton.png'
const Sobre = () => {
    return (

        <main className={`${styles.sobre}`}>

            <div className={` ${styles.sobre_left}`}>
                <div className={`${styles.content}`}>
                    <Title
                        titulo="COMANDANTE HAMILTON"
                        subtitulo="SUA LIDERANÇA A SERVIÇO DO POVO"
                    />
                    <Paragrafo texto="Com uma trajetória marcada pela dedicação à aviação e um profundo compromisso com o bem-estar da comunidade, o Comandante Hamilton construiu uma reputação sólida de liderança e integridade. Sua experiência e credibilidade o credenciam como uma voz confiável e um agente de transformação para o nosso povo." />
                    <PrimaryButton url="/" descricao="Conheça a História Inspiradora do Comandante" />
                </div>

            </div>
            <div className={`${styles.sobre_right} `}>

                <picture>
                    <source media="(max-width: 992px" srcset='https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/comandante_hamilton_sbt_3db5437631.jpg' />
                    <img src={foto_perfil} />
                </picture>

            </div>
        </main>

    )
}

export default Sobre 