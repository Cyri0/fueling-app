import { useState, type FormEvent } from "react"
import styles from "./NewFueling.module.css"
import { Link } from "react-router-dom"

type FuelEventType = {
    km: number,
    volume: number,
    fuelType: string,
    price: number
}

const NewFueling = () => {
    const [km, setKm] = useState<number>(0)
    const [volume, setVolume] = useState<number>(0)
    const [fuelType, setFuelType] = useState<string>("95")
    const [price, setPrice] = useState<number>(0)

    const formSubmitted = (e: FormEvent) => {
        e.preventDefault()
        const currentData:FuelEventType  = { km, volume, fuelType, price }
        console.log(currentData)
    }

    return (
        <section className={styles.newFueling}>
            <form onSubmit={formSubmitted}>
                <div>
                    <label>km</label>
                    <input type="number" value={km} onChange={(e) => setKm(Number(e.target.value))} />
                </div>

                <div>
                    <label>vol</label>
                    <input type="number" value={volume} onChange={(e) => setVolume(Number(e.target.value))} /><span>l</span></div>
                <div>
                    <label>fuel type</label>
                    <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                        <option value={"95"}>95</option>
                        <option value={"100"}>100</option>
                        <option value={"diesel"}>diesel</option>
                    </select>
                </div>

                <div>
                    <label>price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} /><span>HUF</span>
                </div>

                <button type="submit">
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>

                <Link to={"/"} className={styles.backButton}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
            </form>
        </section>
    )
}

export default NewFueling