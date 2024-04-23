import './App.css'
import Tables from './components/tables/Tables';




function App() {

  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];

  return (
    <Tables netIncomes = {netIncomes}/>

  )
  

}

export default App
