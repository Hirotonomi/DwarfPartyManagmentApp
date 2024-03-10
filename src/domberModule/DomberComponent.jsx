import React, {useState, useEffect} from 'react'
import styles from './DomberComponent.module.css'

function DomberComponent(){

    var [count, setCount] = useState(0)

    function changeCount(d){
        setCount(c => d.innerHTML.length)   
    }

    useEffect(()=>{
        var d = document.getElementById("inputTextForCount")
        changeCount(d)

    
    })

    return(
    <div className={styles.row}>
        <input id="inputTextForCount"  type="text" placeholder="Just Try Me Bro"></input>
        <p>Liczba znaków: {count}</p>
    </div>)
}

export default DomberComponent