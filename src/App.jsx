import { useState } from 'react';

function App() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultadoIMC, SetResultadoIMC] = useState('');
    const [vazio, setVazio] = useState(false);

  
  function calculaIMC() {
    let classificacao = '';
    let imc;

      if(altura <= 0 || peso <= 0 ){
          alert('Digite um valor válido');
          setVazio(true);
      } else {
          imc = parseFloat(peso / (altura * altura)).toFixed(2);
          setVazio(false);
      }
      
      if(imc < 18.5) { 
        classificacao = 'MAGREZA';
      } else if(imc >= 18.5 && imc < 25) {
        classificacao = 'NORMAL';
      } else if(imc >= 25 && imc < 30) {
        classificacao = 'SOBREPESO';
      } else if(imc >= 30 && imc < 40) {
        classificacao = 'OBESIDADE';
      } else if(imc >= 40) {
        classificacao = 'OBESIDADE GRAVE';
      }

      SetResultadoIMC(`IMC: ${imc} classificação: ${classificacao}`)
  }
  return (
    <>
      <div className="container">
      <h1 className='title'>Calculadora IMC</h1>

          <span className='subtitle'>Digite sua altura</span>
          <input className='input' type="number" onBlur={(e) => setAltura(e.target.value)}/>

          <span className='subtitle'>Digite seu peso</span>
          <input className='input' type="number" onBlur={(e) => setPeso(e.target.value)}/>

          <button className='button' onClick={calculaIMC} type='button'>Calcular</button>

          <p className='resultado'>
            {vazio ? '' : resultadoIMC}
          </p>

      </div>
    </>
  )
}

export default App
