import FormProjeto from "../Layout/Project/FormProjeto";
import styles from "./NovoProjeto.module.css";

function NovoProjeto() {
  return (
    <div className={styles.novoprojeto_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <FormProjeto btnText="Criar Projeto" />
    </div>
  );
}

export default NovoProjeto;
