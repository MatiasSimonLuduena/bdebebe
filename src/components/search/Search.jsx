/* eslint-disable react/prop-types */
import "./search.css"

const Search = ({ setModal }) => {
  return (
    <div className="search">
      <div className="s-filter" onClick={() => setModal(true)}>
        <span>Filtros</span>
      </div>
    </div>
  )
}

export default Search