import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [estado, setEstado] = useState('ENTRADA')

  const [palpite, setPalpite] = useState(150)
  const [numPalpites, setNumPalpite] = useState(1)

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)


  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpite(1)
    setPalpite(150)
  }

  const menor = () => {
    setNumPalpite(numPalpites + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpite(numPalpites + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }

  if(estado==='ENTRADA'){
    return <button onClick={iniciarJogo}>Pense num número de 0 a 300!</button>
  }

  const acertou = () => {
    setEstado('FIM')
    //por que não posso fazer isso?
    //return <button onClick={iniciarJogo}>Iniciar novamente!</button>
  }
  if(estado==='FIM'){
    return (
    <div>
      <p>Acertei o número {palpite} com {numPalpites} chutes!</p>
      <button onClick={iniciarJogo}>Iniciar novamente!</button>
    </div>
    )
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <p>Mínimo: {min} / Máximo: {max}</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
