import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import { FiSearch } from "react-icons/fi";
import './styles.css';
import api from './services/api.js';
import {gsap} from 'gsap';

//inicio dos componentes
function App() {

const comp = useRef();
useLayoutEffect(()=>{
  let ctx = gsap.context(()=>{
    gsap.to('.title', {opacity: 1, y: -20, ease: 'easeIn'})
    gsap.to('.containerInput', {y:-20})
  })
})

  //const para a aplicação da api
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

    async function handleSearch(){
    if(input === ''){
      alert('preencha algum cep')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    }
    catch{
      alert('Ops ao buscar');
      setInput("");
    }
  }


  //inicio do JSX
  return (
    <div className="container">
      <h1 className="title">Buscardor CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite Seu CEP..."
        value={input}
        onChange={(e)=> setInput(e.target.value) }
        /> 

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>


      {Object.keys(cep).length > 0 && (
      <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Localidade: {cep.localidade}, {cep.uf}</span>
      </main>
      )}

    </div>
  );
}

export default App;
