import React, {useState} from 'react';
import InputField from './components/InputField';
import Button from './components/Button';
import Grid from './components/Grid';
import './App.css';

function App() {

  const [rowInputVal, setRowInputVal] = useState('');
  const [showColInput, setShowColInput] = useState(false);
  const [colInputVal, setColInputVal] = useState('');
  const [showGrid, setShowGrid] = useState(false);

  const handleRowVal = (e) => {
    setRowInputVal(e.target.value);
    setShowColInput(false);
    setColInputVal('');
  }

  const handleShowColInput = () => {
    setShowColInput(true);
  }

  const handleColVal = (e) => {
    setColInputVal(e.target.value);
    setShowGrid(false);
  }

  const handleShowGrid = () => {
    setShowGrid(true);
  }

  return (
    <div className="App">
      Finding Treasure
      <div className="wrapper">
        <InputField 
          onChange={handleRowVal}
          value={rowInputVal}
          placeholder="Enter no of Rows"
        />
        <Button
          onClick={handleShowColInput}
        >
          Submit
        </Button>
          { showColInput &&  rowInputVal && 
            <React.Fragment>
              <InputField 
                onChange={handleColVal}
                value={colInputVal}
                placeholder="Enter no of Columns"
              />
              <Button
                onClick={handleShowGrid}
              >
                Submit
              </Button>
            </React.Fragment> 
          }
          { showGrid &&
            <Grid
              rowVal={rowInputVal}
              colVal={colInputVal}
            />
          }
      </div>  
    </div>
  );
}

export default App;
