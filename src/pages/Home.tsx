import { useContext } from "react"
import { Link } from "react-router-dom"
import { FuelContext } from "../App"

const Home = () => {
  const ctx = useContext(FuelContext)

  return (
    <section>
        <Link to={"/new"} className="newFueling" children={<button>
            <i className="fa-solid fa-gas-pump"></i>
        </button>} />

        <ul>
          {ctx.fuelData.map(data => <li>{data.km} km - {data.price} Ft</li>)}
        </ul>
    </section>
  )
}

export default Home