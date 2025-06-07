import { useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar.jsx'

function App() {
  const [progress, setProgress] = useState(0)

  function updateProgress() {
    setProgress(Math.min(progress + 10, 100));
  }

  return (
    <>
      <ProgressBar
      progress={progress}/>
      <button onClick={updateProgress}>Increase Progress</button>
    </>
  )
}

export default App
