import { useState } from "react"

const NewFueling = () => {
    const [km, setKm] = useState()
    const [volume, setVolume] = useState()
    const [fuelType, setFuelType] = useState()
    const [price, setPrice] = useState()

    return (
        <section>
            <form>
                <div>
                    <label>km</label>
                    <input type="number" />
                </div>

                <div>
                    <label>volume</label>
                    <input type="number" /><span>l</span></div>
                <div>
                    <label>fuel type</label>
                    <select>
                        <option value={"95"}>95</option>
                        <option value={"100"}>100</option>
                        <option value={"diesel"}>diesel</option>
                    </select>
                </div>

                <div>
                    <label>price</label>
                    <input type="number" /><span>HUF</span>
                </div>

                <button type="submit">
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>
            </form>
        </section>
    )
}

export default NewFueling