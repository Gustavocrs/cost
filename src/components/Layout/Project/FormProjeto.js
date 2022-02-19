import { useEffect, useState } from "react";

import BotaoSubmit from "../../Form/BotaoSubmit";
import Input from "../../Form/Input";
import Select from "../../Form/Select";
import styles from "./FormProjeto.module.css";

function FormProjeto({ btnText }) {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategorias(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <div>
        <Input
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
      </div>
      <div>
        <Input
          type="number"
          text="Valor do Orçamento"
          name="badget"
          placeholder="Insira o valor total do orçamento"
        />
      </div>
      <div>
        <Select
          name="idcategoria"
          text="Selecione a Categoria"
          options={categorias}
        />
      </div>
      <div>
        <BotaoSubmit text={btnText} />
      </div>
    </form>
  );
}
export default FormProjeto;
