function Rules({closeRules}) {
    return (
        <div className="modal">
            <div className="modal-window">
            <p>Five weapons at a time will appear on your screen from a list 
                of 100 Elden Ring weapons, and you must click a weapon to add 
                it to your arsenal. However, if you try to add the same weapon 
                twice, Miyazaki will punish your greed by emptying your arsenal 
                entirely and banishing you from the Lands Between. Good luck, 
                Tarnished!</p>
            <button onClick={() => closeRules()}>OK</button>
            </div>
        </div>
    )
}

export default Rules