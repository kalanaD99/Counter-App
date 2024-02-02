
import './App.css';
import Button from './Component/Button';
import { useState } from 'react';


//useState HOOk
function App() {
  //const count = 0
  const [count,setCount] = useState(0);

  const increment = ()=>{
    //count+=1;
    setCount(count+1);
  }

  const decrement = ()=>{
    //count-=1;
    setCount(count-1);
  }
  return (
    <div className='main' >
    <span className='title'>Counter Application</span>
    <p className='countTag'>The Count is :{count}</p>
    <Button name='button1' click={increment} type='+'/>
    <Button name='button2' click={decrement} type='-' />
    </div>
  )
}


export default App;
