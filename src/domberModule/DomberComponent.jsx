import React, { useState, useEffect } from 'react'
import styles from './DomberComponent.module.css'

function DomberComponent() {

    const [count, setCount] = useState(0)
    const [eCount, setECount] = useState(0)

    function addCount() {
        setCount(count + 1)
    }

    function minusCount() {
        setCount(count - 1)
    }

    function resetCount() {
        setCount(document.getElementById("inputTextForCount").value.length)
    }

    return (
        <>
            <div className={styles.row}>
                <input id="inputTextForCount" type="text" placeholder="Type in me Daddy"></input>
                <p>Liczba znaków: {count}</p>
            </div>

            <div className={styles.buttonThingy}>
                <p>{count}</p>
                <button onClick={minusCount}>minus</button>
                <button onClick={resetCount}>reset</button>
                <button onClick={addCount}>plus</button>
            </div>

            <div className={styles.row}>
                <input id="inputTextForEffect" type="text" placeholder="Just Try Me Bro"></input>
                <p>Liczba znaków: {eCount}</p>
            </div>
        </>)
}

export default DomberComponent