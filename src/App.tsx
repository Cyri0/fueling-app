import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NewFueling from "./pages/NewFueling"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<NewFueling/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App