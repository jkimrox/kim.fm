const Search = (props) => {
    return(
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleChange} value ={props.query}/>
                <button>Search!</button>
            </form>
        </>
    )
}

export default Search;