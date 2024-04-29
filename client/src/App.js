import './App.css';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Navigation from './components/Navigation/Navigation';
import Login from './components/authentication/Login';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Register from './components/authentication/Register';
import Blog from './components/Blog';
import NoPage from './components/NoPage';
import Logo from './components/Logo';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    

     <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />} >

          <Route index element={<Logo/>} />
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} /> 
          <Route path="register" element={<Register />} /> 
          <Route path="login" element={<Login />} /> 
          <Route path="*" element={<NoPage />} /> 

        </Route>
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
