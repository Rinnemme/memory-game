import {useState} from 'react'
import {useEffect} from 'react'

function Cards ({array, incrementScore, gameOver}) {
    const [indexes, setIndexes] = useState([])
    const [lastIndexes, setLastIndexes] = useState([])
    const [clickedIDs, setClickedIDs] = useState([])
    const unclickedIDs = array.map(weapon => weapon.id).filter(id => !clickedIDs.includes(id))

    function resetClickedIDs() {
        setClickedIDs([])
    }

    function addClickedID(id) {
        setClickedIDs([...clickedIDs, id])
    }

    function processID(id) {
        if (clickedIDs.includes(id)) {
            resetClickedIDs()
            gameOver()
        } else if (clickedIDs.length===99) {
            incrementScore()
            gameOver()
        } else {
            addClickedID(id)
            const newUnclickedIDs = unclickedIDs.filter(number => number!==id)
            console.log(`as of clicking this, there are ${unclickedIDs.length} unclicked IDs and ${clickedIDs.length} clicked IDs`) 
            incrementScore()
    }}

    useEffect(() => {
        displayNewCards()
    }, [])
    
    function displayNewCards() {
        const newIndexes = []
        while (newIndexes.length < 5) {
            const number = Math.floor(Math.random()*array.length)
            if (!newIndexes.includes(number) && lastIndexes[newIndexes.length]!==number) {
                newIndexes.push(number)
                }
            }
        setIndexes(newIndexes)
        setLastIndexes(newIndexes)
    }

    return (
        <div className="card-container">
            {indexes.length>0 && indexes.map((index) => {
                return <div key={array[index].id} className="card" onClick = {() => {
                    processID(array[index].id)
                    displayNewCards()
                }}>
                <p>{array[index].name}</p>
                <img src = {array[index].image}></img>
                </div>
            })}
        </div>
    )
}

export default Cards