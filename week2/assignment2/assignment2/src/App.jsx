import DataTable from "./components/DataTable";


function App() {
  var cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Corolla"
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic"
    },
    {
      id: 3,
      brand: "Ford",
      model: "Mustang"
    },
    {
      id: 4,
      brand: "Chevrolet",
      model: "Camaro"
    }
  ];

  const title = "Car List";
  const text = "Our Cars";
  const number = 4;

  return (
    <div className="App">
      <DataTable title={title} data={cars} text={text} number={number}></DataTable>
    </div>
  );
}

export default App;