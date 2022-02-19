import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../Layout/LinkButton'

function Home(){
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo ao <span>Cost </span></h1>
      <p>Comece a gerenciar o seus projetos agora mesmo.</p>
      <LinkButton to='/novoprojeto' text='Novo Projeto'/>
      <img src={savings} alt='Imagem fundo coast'/>
    </section>
  )
}

export default Home