import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NewFueling, { type FuelEventType } from "./pages/NewFueling"
import Navbar from "./components/Navbar"
import { createContext, useEffect, useState } from "react"

export const FuelContext = createContext<
{
  fuelData: FuelEventType[], 
  addNewData: (e:FuelEventType)=>void
}>({fuelData: [], addNewData: ()=>{}})

const App = () => {
  const [fuelState, setFuelState] = useState<FuelEventType[]>([])

  useEffect(()=>{
    const storageData = localStorage.getItem("fuelState")
    
    if(storageData !== null){
      setFuelState(JSON.parse(storageData))
    }else{
      localStorage.setItem("fuelState", JSON.stringify(fuelState))
    }
  },[])

  return (
    <FuelContext.Provider value={
      {
        fuelData: fuelState,
        addNewData: (e:FuelEventType) => {
          localStorage.setItem("fuelState", JSON.stringify([...fuelState, e]))
          setFuelState(prev => [...prev, e])
        }
      }}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<NewFueling/>} />
        </Routes>
      </BrowserRouter>
    </FuelContext.Provider>
  )
}

export default App