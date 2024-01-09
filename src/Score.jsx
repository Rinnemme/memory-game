// import {useEffect} from 'react'

function Score ({score, topScore}) {
    return (
        <div className="scoreboard">
            <h3>Current arsenal: {score} weapons</h3>
            <h3>Largest arsenal: {topScore} weapons</h3>
        </div>
    )
}

export default Score