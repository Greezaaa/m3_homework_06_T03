const Pokemon = ({ pokes }) => {
    // console.log(pokes)
    
    return (
        <div>
            {pokes.map((poke, i) => {
                return (
                    <h2 key={i}>{poke}</h2>
                )
            })}
        </div>
    )

}

export default Pokemon