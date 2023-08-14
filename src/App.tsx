import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PositionComponent from './components/PositionComponent';
import { ShorthandPositions } from './components/PositionComponent';
import DatePickerWrapped from "./components/DatePicker";
import OffsetFunction, { AnchorToTarget } from "./components/OffsetFunction";
import AdapteProp from './components/StylesComponents';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* <PositionComponent />
      <ShorthandPositions />
      <OffsetFunction />
      <AnchorToTarget /> */}
      <DatePickerWrapped />
      {/* <AdapteProp /> */}
    </>
  )
}

export default App
