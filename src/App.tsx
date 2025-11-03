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
    if(!fuelState){
      const storageData = localStorage.getItem("fuelState")
      if(storageData){
        setFuelState(JSON.parse(storageData))
      }else{
        localStorage.setItem("fuelState", JSON.stringify([]))
        setFuelState([])
      }
    }else{
      localStorage.setItem("fuelState", JSON.stringify(fuelState))
    }
  },[fuelState])

  return (
    <FuelContext.Provider value={
      {
        fuelData: fuelState,
        addNewData: (e:FuelEventType) => {
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