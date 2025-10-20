const NewFueling = () => {
  return (
    <section>
        <form>
            <label>km</label>
            <input type="number" />

            <label>volume</label>
            <input type="number" /><span>l</span>

            <label>fuel type</label>
            <select>
                <option value={"95"}>95</option>
                <option value={"100"}>100</option>
                <option value={"diesel"}>diesel</option>
            </select>

            <label>price</label>
            <input type="number"/><span>HUF</span>

            <button type="submit">
                <i className="fa-solid fa-floppy-disk"></i>
            </button>
        </form>
    </section>
  )
}

export default NewFueling