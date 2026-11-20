function SearchBar( {search,setSearch} ){
    return(
        <input
           type="text"
           placeholder="search value"
           value={search}
           onChange={(e) => (
            setSearch(e.target.value)
           )}
        />
    );
}
export default SearchBar;