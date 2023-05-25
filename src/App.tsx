import { useState } from "react";
import "./App.css";

// componente REact vazio
const Componente = () => null;

// componente React
const Botao = (props: any) => {
  const titulo = props.titulo ? props.titulo : "texto padrão";
  const [contador, contar] = useState(2);
  // if (props.titulo) {
  //   titulo = props.titulo;
  // } else {
  //   titulo = "texto padrão";
  // }
  return (
    <>
      <button onClick={() => contar(contador + 1)}>
        {`${titulo} (${contador})`}
      </button>
    </>
  );
}

const ListaItem = (props: any) => {
  return <li>{props.titulo}</li>
}

const Lista = () => {
  const tarefas = [
    "Baixar o projeto do github",
    "Instalar bibliotecas do projeto",
    "Executar apliação web",
    "Programar em js e React",
    "Guardar as modificações no repositório local",
    "Publicar as modificações no github"
  ];
  return (
    <div className="card">
      <ul>
        {tarefas.map( (item, ind) => <ListaItem key={ind} titulo={item} />)
        /* 
        [
          <ListaItem indice={0} titulo={"Baixar o projeto do github"} />,
          <ListaItem indice={1} titulo={"Instalar bibliotecas do projeto"} />,
          <ListaItem indice={2} titulo={"Executar apliação web"} />,
          <ListaItem indice={3} titulo={"Programar em js e React"} />,
          <ListaItem indice={4} titulo={"Guardar as modificações no repositório local"} />,
          <ListaItem indice={5} titulo={"Publicar as modificações no github"} /> 
        ]       
       */
      }
      </ul>
      <ul>
        <ListaItem indice={0} titulo={tarefas[0]} />
        <ListaItem indice={1} titulo={tarefas[1]} />
        <ListaItem indice={2} titulo={tarefas[2]} />
        <ListaItem indice={3} titulo={tarefas[3]} />
        <ListaItem indice={4} titulo={tarefas[4]} />
        <ListaItem indice={5} titulo={tarefas[5]} />
      </ul>
    </div>
  );
}

const App = () => {
  const [contador, contar] = useState(10);

  return (
    <>
      <div>
        <h1>Meu contador esta em {contador}</h1>
      </div>
      <div className="card">
        <Botao titulo="Incrementar" />
        <Botao titulo={"Decrementar"} />
        <Botao titulo={"zerar"} />
        <button onClick={() => contar(contador + 1)}>Estado geral</button>
        <Componente />
      </div>
      <Lista />
    </>
  );
}

export default App;