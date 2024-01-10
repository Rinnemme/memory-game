import {useState} from 'react'
import {useEffect} from 'react'

function Cards ({array, incrementScore, gameOver}) {
    const [indexes, setIndexes] = useState([])
    const [clickedIDs, setClickedIDs] = useState([])
    let unclickedIDs = array.map(weapon => weapon.id).filter(id => !clickedIDs.includes(id))

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
            unclickedIDs = unclickedIDs.filter(weaponID => weaponID!==id)
            incrementScore()
    }}

    function randomIndexFrom(arr) {
        return Math.floor(Math.random()*arr.length)
    }

    function shuffle(arr) {
        for (let i=0; i<10; i++) {
            const index = randomIndexFrom(arr)
            const item = arr[index]
            arr.splice(index,1)
            arr.unshift(item)
        }
    }

    useEffect(() => {
        getNewCardIndexes()
    }, [])
    
    function getNewCardIndexes() {
        const newIndexes = []
        if (unclickedIDs.length>0) {
            const index = randomIndexFrom(unclickedIDs)
            const weapon = array.find(weapon => weapon.id === unclickedIDs[index])
            newIndexes.push(array.indexOf(weapon))
        }
        while (newIndexes.length < 5) {
            const index = randomIndexFrom(array)
            if (!newIndexes.includes(index) && indexes[newIndexes.length]!==index) {
                newIndexes.push(index)
                }
            }
        shuffle(newIndexes)
        setIndexes(newIndexes)
    }

    return (
        <div className="card-container">
            {indexes.length>0 && indexes.map((index) => {
                return <div key={array[index].id} className="card" onClick = {() => {
                    processID(array[index].id)
                    getNewCardIndexes()
                }}>
                <p>{array[index].name}</p>
                <img src = {array[index].image}></img>
                </div>
            })}
        </div>
    )
}

export default Cards