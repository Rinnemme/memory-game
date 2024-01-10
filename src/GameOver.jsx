function GameOver({score, replay}) {
    return (
        <div className="modal">
            <div className="modal-window">
            {score===100 && <p>{`Well done, Tarnished! You got all 100 weapons in your arsenal. 
                                I guess all that's left now, is to try to do it again!`}</p>}
            {score!==100 && <p>{`You accumulated ${score} weapons before Miyazaki confiscated 
                                your aresenal and banished you from the Lands Between. Don't 
                                give up, skeleton!`}</p>}
            <button onClick={() => replay()}>OK</button>
            </div>
        </div>
    )
}

export default GameOver