import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NewFueling from "./pages/NewFueling"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<NewFueling/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App