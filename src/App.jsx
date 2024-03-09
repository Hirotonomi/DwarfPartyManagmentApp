
import './App.css'
import Row from './RowModule/Row.jsx'
import tableData from './apiShit/GettingData.jsx'

const TableCon = tableData.map(row => <Row name={row.name} DNDc={row.DNDc} hp={row.hp} gold={row.gold}/>)

function App() {
  return (
    <>
      {TableCon}
      <Row/>
 
    </>
  )
}

export default App
