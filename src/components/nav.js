import { SearchForm } from "./searchForm"

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="collapse navbar-collapse" id="navbar">
        <SearchForm />
      </div>
    </nav>
  )
}

