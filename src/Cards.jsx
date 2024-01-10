import {useState} from 'react'
import {useEffect} from 'react'

function Cards ({array, incrementScore, gameOver}) {
    const [indexes, setIndexes] = useState([])
    const [clickedIDs, setClickedIDs] = useState([])

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
        } else {
            addClickedID(id)
            incrementScore()
    }}

    useEffect(() => {
        displayRandomCards()
    }, [])
    
    function displayRandomCards() {
        const newIndexes = []
        while (newIndexes.length < 5) {
            const number = Math.floor(Math.random()*array.length)
            if (!newIndexes.includes(number)) {
                newIndexes.push(number)
                }
            }
        setIndexes(newIndexes)
    }

    return (
        <div className="card-container">
            {indexes.length>0 && indexes.map((index) => {
                return <div key={array[index].id} className="card" onClick = {() => {
                    processID(array[index].id)
                    displayRandomCards()
                }}>
                <p>{array[index].name}</p>
                <img src = {array[index].image}></img>
                </div>
            })}
        </div>
    )
}

export default Cards