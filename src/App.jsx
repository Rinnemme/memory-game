import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'
import Cards from './Cards.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const [weaponData, setWeaponData] = useState([])
  
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
    // setLoading(false)
  }, [])

  // console.log('rendered with data as:')
  // console.log(weaponData)

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && <Cards array={weaponData}/>}
    </>
  )
}

export default App
