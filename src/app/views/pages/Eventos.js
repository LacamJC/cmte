import CardEvent from '../../components/eventos/CardEvent'
import Title from '../../components/Title'
import styles from '../../scss/eventos/eventos.module.css'

const Eventos = () => {
    const data = [
        {
          title: "Pizza do comandante",
          description: "Já imaginou receber uma pizza por um helicóptero dirigido pelo comandante?",
          image: "https://placehold.co/300x400"
        },
        {
          title: "Voo panorâmico com o Comandante Hamilton",
          description: "Desfrute de vistas aéreas incríveis de [Insira a cidade ou região] a bordo do helicóptero do Comandante Hamilton. Uma experiência inesquecível!",
          image: "https://placehold.co/300x400"
        },
        {
          title: "Encontro exclusivo com o Comandante Hamilton",
          description: "Participe de um evento exclusivo com o Comandante Hamilton. Uma oportunidade única para ouvir suas histórias e experiências.",
          image: "https://placehold.co/300x400"
        }
        // {
        //   title: "Comandante Hamilton nos bastidores da aviação",
        //   description: "Acompanhe o Comandante Hamilton em um dia de trabalho e descubra os segredos e desafios da aviação por dentro.",
        //   image: "https://placehold.co/300x400"
        // },
        // {
        //   title: "Aventura Off-Road com o Comandante Hamilton",
        //   description: "Aventure-se em trilhas emocionantes com o Comandante Hamilton a bordo de um veículo 4x4. Prepare-se para adrenalina e paisagens de tirar o fôlego.",
        //   image: "https://placehold.co/300x400"
        // },
        // {
        //   title: "Palestra inspiradora com o Comandante Hamilton",
        //   description: "Assista a uma palestra motivacional com o Comandante Hamilton, onde ele compartilhará suas lições de vida, superação e paixão pela aviação.",
        //   image: "https://placehold.co/300x400"
        // }
      ];
    return (
        <>
            <div className={`${styles.container}`}>
                <Title titulo="ÚLTIMOS EVENTOS" subtitulo="" />
                <div className='d-flex flex-wrap gap-5 justify-content-center align-items-center'>
                    {data.map((item) => (
                        <CardEvent title={item.title} description={item.description} image={item.image} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Eventos