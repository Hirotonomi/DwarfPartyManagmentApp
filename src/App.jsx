import Row from './RowModule/Row.jsx'
import tableData from './apiShit/GettingData.jsx'
import DomberComponent from './domberModule/DomberComponent.jsx'

const TableCon = tableData.map(row => <Row key={row.id} name={row.name} DNDc={row.DNDc} hp={row.hp} gold={row.gold}/>)

function App() {
  return (
    <>
      {TableCon}
      <Row/>
      <DomberComponent/>
 
    </>
  )
}

export default App
