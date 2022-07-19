import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Ticket from './components/Ticket'
import Reporting from './components/Reporting'
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Routes>
        <Route>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/reporting' element={<Reporting />} />
        </Route>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;