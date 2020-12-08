import './App.css';
import Form from './components/Form';
import data from './data';
console.log(data)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form data={data}/>
      </header>
    </div>
  );
}

export default App;
