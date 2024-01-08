import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'
import Cards from './Cards.jsx'
import Score from './Score.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const [weaponData, setWeaponData] = useState([])
  const latestTopScore = localStorage.getItem("top-score") ? localStorage.getItem("top-score") : 0
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(latestTopScore)

  function incrementScore() {
    if (score+1 > topScore) updateTopScore(score+1)
    setScore(score+1)
  }

  function resetScore() {
    setScore(0)
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
      <Score score={score} topScore={topScore}/>
      {loading && <div>Loading...</div>}=
      {!loading && <Cards array={weaponData} incrementScore={incrementScore} resetScore={resetScore}/>}
    </>
  )
}

export default App
