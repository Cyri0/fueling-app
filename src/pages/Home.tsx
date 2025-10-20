import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section>
        <Link to={"/new"} className="newFueling" children={<button>
            <i className="fa-solid fa-gas-pump"></i>
        </button>} />
    </section>
  )
}

export default Home