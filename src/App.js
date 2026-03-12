import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import SignUp from './component/SignUp';
import AddProducts from './component/AddProducts';
import GetProducts from './component/GetProducts';
import MpesaComponent from './component/MpesaComponent';
import SignIn from './component/SignIn';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Sokogarden-Buy and sell online</h1>
      </header>
      <nav className='m-4'>
        <Link className='btn bg-dark m-3 text-white link'to='/signup'>Signup</Link>
        <Link className='btn bg-dark m-3 text-white link'to='/signin'>Signin</Link>
        <Link className='btn bg-dark m-3 text-white link'to='/addproducts'>Add Products</Link>
        <Link className='btn bg-dark m-3 text-white link'to='/'>Get Products</Link>
      </nav>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/mpesa' element={<MpesaComponent/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
