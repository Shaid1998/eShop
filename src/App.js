import logo from './logo.svg';
import './App.css';
import {Button }from 'react-bootstrap'
import Header from './Header'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './Login'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Register from './Register'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>eShop</h1>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/add'>
          <AddProduct />
        </Route>
        <Route path='/update'>
          <UpdateProduct />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
