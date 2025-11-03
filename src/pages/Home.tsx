import { useContext } from "react"
import { Link } from "react-router-dom"
import { FuelContext } from "../App"
import RefuelCard from "../components/RefuelCard"

const Home = () => {
  const ctx = useContext(FuelContext)

  return (
    <section>
        <Link to={"/new"} className="newFueling" children={<button>
            <i className="fa-solid fa-gas-pump"></i>
        </button>} />
        
        <div className="cardWrapper">
        {ctx.fuelData.map(data => <RefuelCard {...data} />)}
        </div>
    </section>
  )
}

export default Home