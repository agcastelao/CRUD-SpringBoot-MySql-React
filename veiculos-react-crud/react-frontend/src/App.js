import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListVeiculosComponent from './components/ListVeiculosComponent';
import CreateVeiculoComponent from './components/CreateVeiculoComponent';


function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path = "/" Component={ListVeiculosComponent}></Route>    
            <Route path = "/veiculos" Component={ListVeiculosComponent}></Route>
            <Route path="add-veiculo" Component={CreateVeiculoComponent}></Route>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
