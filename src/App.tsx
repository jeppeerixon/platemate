import './style/App.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Userinput from './components/Userinput'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Userinput />
    </div>
  )
}

export default App

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

