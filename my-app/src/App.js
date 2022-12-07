import './App.css';
import { useState } from 'react';
 import About from '../src/Component/About'

 import Home from '../src/Component/Home';

function App() {

  const [isAboutVisible,setIsAboutVisible]=useState(false);

  return (
    <div className='App'>

   <button
    onClick={() => {
      setIsAboutVisible(!isAboutVisible);
    }}
  >
    Click Me!
  </button>
  {isAboutVisible ? <About /> : <Home />}
</div >
    
   
    
  );
}

export default App;
