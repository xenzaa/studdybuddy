import { useState } from 'react'

function App() {
  const [section, setSection] = useState('start')
  const [quizAnswer, setQuizAnswer] = useState(null)

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h1>Xenia's Prüfungsbuddy 🎓</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <button onClick={() => setSection('start')}>🏠 Start</button>
        <button onClick={() => setSection('kv')}>❤️ KV</button>
      </nav>

      {section === 'start' && (
        <div>
          <p>Willkommen! Wähle einen Bereich zum Lernen aus.</p>
        </div>
      )}

      {section === 'kv' && (
        <div>
          <h2>Belastungsgrenze § 62 SGB V</h2>
          <p>Chronisch Kranke: 1 % der Bruttoeinnahmen</p>
          <p>Familienfreibeträge: 15 % der Bezugsgröße (Ehegatte), 8.388 € pro Kind</p>
          <p>Beispiel: Brutto 32.966,20 € – Freibeträge 14.310,00 € = 18.656,20 € → 1 % = 186,56 €</p>
          <p>Zuzahlung: 394,60 € → Erstattung: 208,04 €</p>

          <h3>Quiz: Wie hoch ist die Belastungsgrenze bei chronisch Kranken?</h3>
          <button onClick={() => setQuizAnswer('richtig')}>1 %</button>
          <button onClick={() => setQuizAnswer('falsch')}>2 %</button>
          {quizAnswer && (
            <p style={{ color: quizAnswer === 'richtig' ? 'green' : 'red' }}>
              {quizAnswer === 'richtig' ? '✅ Richtig!' : '❌ Falsch – es sind 1 %.'}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default App