import Dashboard from "./pages/Dashboard"
import Login from './pages/Login'
import Register from './pages/Register'
import Header from "./components/Header"
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}
  
export default App
