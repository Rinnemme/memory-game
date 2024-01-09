function GameOver({score, replay}) {
    return (
        <div className="modal">
            <div className="modal-window">
            {score===100 && <p>Well done, Tarnished! You got all 100 weapons in your arsenal. I guess all that's left now, is to try to do it again!</p>}
            {score!==100 && }
            <button onClick={() => replay()}>OK</button>
            </div>
        </div>
    )
}