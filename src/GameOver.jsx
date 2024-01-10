function GameOver({score, replay}) {
    return (
        <div className="modal">
            <div className="modal-window">
            {score===100 && <p>{`Well done, Tarnished! You got all 100 weapons in your arsenal. I guess all that's left now, is to try to do it again!`}</p>}
            {score!==100 && <p>{`Well, Tarnished, you managed to accumulate an arsenal of ${score} weapons before Miyazaki banned you from the Lands Between
            for trying to take the same weapon twice. You're welcome to try again, but you'll have to begin once more at The First Step.`}</p>}
            <button onClick={() => replay()}>OK</button>
            </div>
        </div>
    )
}

export default GameOver