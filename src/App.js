import './App.css';
import Login from './components/login/Login';
import { 
    BrowserRouter, 
    Routes,
    Route
} from 'react-router-dom';
import Register  from './components/register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className='loginAppCom'>
              <Login/>
          </div>
          <Routes>
              <Route path='/regiter' element={<Register/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
