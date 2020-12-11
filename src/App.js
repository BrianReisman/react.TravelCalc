import "./App.css";
import Form from "./components/Form";
import Header from './components/Header';
import data from "./data";

function App() {
  return (
    <div className="App-header App">
      <Header />
      <Form data={data} />
    </div>
  );
}

export default App;
