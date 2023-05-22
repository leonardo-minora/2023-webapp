import {useState} from "react";
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
      <button onClick={() => contar(contador+1)}>
        {`${titulo} (${contador})`}
      </button>
    </>
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
        <Botao titulo="Incrementar"/>
        <Botao titulo={"Decrementar"} />
        <Botao titulo={"zerar"}/>
        <button onClick={() => contar(contador + 1)}>Estado geral</button>
        <Componente />
			</div>
		</>
	);
}

export default App;