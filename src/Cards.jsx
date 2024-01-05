import {useState} from 'react'
import {useEffect} from 'react'

function Cards ({array}) {
    const [indexes, setIndexes] = useState([])

    useEffect(() => {
        setRandomIndexes()
    }, [])
    
    function setRandomIndexes() {
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
            <img src = {array[index].image} onClick = {() => {setRandomIndexes()}}></img>
            </div>
        })}
        </>
    )
}

export default Cards