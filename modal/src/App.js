import './App.css';
import Modal from './Components/Modal';


import { useState } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='App'>
      <div style={{display:isVisible?'none':'block'}}>
      <h1 style={{margin:'0px'}}>Modal in React</h1>
      <button className='openModelBtn' onClick={
        ()=>{
          setIsVisible(true);
        }
      }>Modal</button>
      </div>
      {/* {isVisible ? <Modal/>: ''} */}
      {isVisible && <Modal closeModal={setIsVisible}/>}
    </div>
  );
}

export default App;
