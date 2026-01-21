import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0)
  const [history, setHistory] = useState([])

  const handler = (e)=>{
    setInput(e.target.value)
  }

  const evaluate = (input) => {
    try {
      // ensure a space after return and evaluate the expression safely
      const res = new Function(' return ' + input)();
      setResult(res);
      setHistory((prev) => [...prev, input]);
      return res;
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className='parent'>
  <center>
  <div className='inp'>
    <input type='text'value={input} onChange={handler} />
  </div>
  <button id='res' type='button' onClick={()=> evaluate(input)} >Result</button>
  <h4>Result : {result}</h4>

  <button onClick={()=>setInput(input+'6')}>6</button>
  <button onClick={()=>setInput(input+'7')}>7</button>
  <button onClick={()=>setInput(input+'8')}>8</button>
  <button onClick={()=>setInput(input+'9')}>9</button>
  <button onClick={()=>setInput(input+'0')}>0</button> <br />
  
  <button onClick={()=>setInput(input+'5')}>5</button>
  <button onClick={()=>setInput(input+'4')}>4</button>
  <button onClick={()=>setInput(input+'3')}>3</button>
  <button onClick={()=>setInput(input+'2')}>2</button>
  <button onClick={()=>setInput(input+'1')}>1</button>  <br />
  
  <button onClick={()=>setInput(input+'+')}>+</button>
  <button onClick={()=>setInput(input+'-')}>-</button>
  <button onClick={()=>setInput(input+'*')}>*</button>
  <button onClick={()=>setInput(input+'/')}>/</button>
  <button onClick={()=>setInput(input+'%')}>%</button> <br />
  
  <button onClick={()=>{ setInput(''); setResult(0) }}>Clr</button>
  <button onClick={()=>setInput(input.slice(0,-1))}>⌫</button>
  <button onClick={()=> evaluate(input)}>=</button>
  <button onClick={()=> setInput(history[history.length-1] || '')}>History</button>

 </center>
 </div>
  );
}

export default App;
