import {useState} from 'react'
import {useEffect} from 'react'

function Cards ({array, incrementScore, resetScore}) {
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
            resetScore()
        } else {
            addClickedID(id)
            incrementScore()
    }}

    useEffect(() => {
        displayRandomCards()
    }, [])
    
    function displayRandomCards() {
        const newIndexes = []
        while (newIndexes.length < 10) {
            const number = Math.floor(Math.random()*array.length)
            if (!newIndexes.includes(number)) {
                newIndexes.push(number)
                }
            }
        setIndexes(newIndexes)
    }

    return (
        <>
        {indexes.length>0 && indexes.map((index) => {
            return <div key={array[index].id}>
            <p>{array[index].name}</p>
            <img src = {array[index].image} onClick = {() => {
                    processID(array[index].id)
                    displayRandomCards()
                }}></img>
            </div>
        })}
        </>
    )
}

export default Cards