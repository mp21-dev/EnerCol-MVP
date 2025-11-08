import { useState } from 'react'
import InteractionForm from './components/InteractionForm'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>EnerCol - Sistema de Servicio Posventa</h1>
        <p>Solicitud de Asistencia Técnica o Financiera</p>
      </header>
      <main className="app-main">
        <InteractionForm />
      </main>
    </div>
  )
}

export default App

