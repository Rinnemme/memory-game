import { useState } from 'react'
import {useEffect} from 'react'
import Cards from './Cards.jsx'
import Score from './Score.jsx'
import Rules from './Rules.jsx'
import GameOver from './GameOver.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const [weaponData, setWeaponData] = useState([])
  const latestTopScore = localStorage.getItem("top-score") ? localStorage.getItem("top-score") : 0
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(latestTopScore)
  const [showRules, setShowRules] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  function toggleRules() {
    const toggleState = showRules === false ? true : false
    setShowRules(toggleState)
  }

  function incrementScore() {
    if (score+1 > topScore) updateTopScore(score+1)
    setScore(score+1)
  }

  function replay() {
    setScore(0)
    setGameOver(false)
  }

  function updateTopScore(n) {
    setTopScore(n)
    localStorage.setItem("top-score", n)
  }
  
  async function fetchWeapons() {
    try {
      const result = await fetch('https://eldenring.fanapis.com/api/weapons?limit=100')
      const json = await result.json()
      const data = await json.data
      return data
    } catch {error => console.log(error)}
  }

  useEffect(() => {
    fetchWeapons().then(result => {
      setWeaponData(result)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {showRules && <Rules closeRules={() => toggleRules()}/>}
      {gameOver && <GameOver score={score} replay={() => replay()}/>}
      <Score score={score} topScore={topScore}/>
      <div className="title"><div className="big-letter">E</div><h1>LDEN RIN</h1><div className="big-letter">G</div></div>
      <h2>MEMORY GAME</h2>
      <h3 className="rules" onClick={() => toggleRules()}>RULES</h3>
      {loading && <div>Loading...</div>}
      {!loading && <Cards array={weaponData} incrementScore={incrementScore} gameOver={() => setGameOver(true)}/>}
    </>
  )
}

export default App
