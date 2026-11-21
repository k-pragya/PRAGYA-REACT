function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Employee"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

function App() {

  const [search, setSearch] =
    useState("");

  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <h3>Searching: {search}</h3>
    </div>
  );
}

export default App;