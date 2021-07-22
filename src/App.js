import { Button } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Information from './pages/Information';


function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      {
        show ? <Information /> : null
      }
      <Button className="show" onClick={() => setShow(!show)} variant="outlined" color="primary">
        Information
      </Button>
    </div>
  );
}

export default App;
