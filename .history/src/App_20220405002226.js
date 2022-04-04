import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const UserContext = React.createContext();

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/Signup' element={<Signup/>}></Route>
                    <Route path='/' element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function User() {
    return (
      <UserContext.Consumer>
        {value => <h1>{value}</h1>} 
        {/* prints: Reed */}
      </UserContext.Consumer>
    )
  }

export default App;
