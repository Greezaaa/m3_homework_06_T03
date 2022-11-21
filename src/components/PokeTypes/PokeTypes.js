const PokeTypes = ({data, setLink}) => {
    return (
        <div >
            <select defaultValue={"Seleciona estilo"} onChange={(e)=>setLink(e.target.value)} >
            {data.map((type, i) => {
                return (
                    <option key={i} value={type.url}>{type.name}</option>
                )
            })}
            </select>
        </div>
    ) 
}

export default PokeTypes