// import logo from './logo.svg';
import "./App.css";

function Titulo(props) {
  return <h1> Hola Mundo </h1>;
}

function Mensaje(props) {
  return <p style={{ color: props.color }}> {props.msg} </p>;
}

function App() {
  return (
    <div className="App">
      <Titulo />
      <Mensaje color="red" msg="Que miras, pelotudo" />
      <Mensaje color="green" msg="Te calientan las paginas web?" />
      <Mensaje color="blue" msg="toca de aca enfermito." />
    </div>
  );
}

export default App;
