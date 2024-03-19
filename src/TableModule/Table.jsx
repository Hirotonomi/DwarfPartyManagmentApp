import Row from '../RowModule/Row.jsx'
import tableData from '../apiShit/GettingData.jsx'

const TableCon = tableData.map(row => <Row key={row.id} name={row.name} DNDc={row.DNDc} hp={row.hp} gold={row.gold}/>)

function Table() {
  return (
    <>
      {TableCon} 
    </>
  )
}

export default Table