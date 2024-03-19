import { useState } from 'react'
import Row from '../RowModule/Row.jsx'
import tableData from '../apiShit/GettingData.jsx'
import styles from './Table.module.css'

function Table() {
    const [tableDataS, setTableDataS] = useState(tableData) 
    const [filtredTable, setFiltredTable] = useState(tableDataS)

    function searchChange(e){
        var input = e.target.value
        setFiltredTable(tableDataS.filter(row => row.name.toLowerCase().includes(input.toLowerCase())))
    }
    
  return (
    <>
    <div className={styles.inpt}><span>Filtruj po imieniu</span><input onChange={searchChange} type='text' ></input></div>

    {filtredTable.map(row => <Row key={row.id} name={row.name} DNDc={row.DNDc} hp={row.hp} gold={row.gold}/>)} 
    </>
  )
}

export default Table