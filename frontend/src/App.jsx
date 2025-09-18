import {  BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './pages/Main.jsx'
import Login from './pages/Login.jsx'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
