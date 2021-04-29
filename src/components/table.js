import { useState, useEffect } from "react";
// import { TableHeader, TableRow, Search, LoadingError, LoadingMessage } from "../components";
import { TableHeader } from "../components/tableHeader";
import { TableRow } from "../components/tableRow";
import { Search } from "../components/search";
import { LoadingError } from "../components/loadingError";
import { LoadingMessage } from "../components/loadingMessage";

export const Table = () => {
  const sortTypes = {
    up: {class: "up"},
    down: {class: "down"},
    default: {class: "random"}
  };

  const [currentSort, setCurrentSort] = useState()
  const [employeesData, setEmployeesData] = useState([]);
  const [sortedEmployees, setSortedEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect (() => {
    fetch("https://randomuser.me/api/?nat=us&results=100")
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setEmployeesData(result.results);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
  },[])

  useEffect(() => {
    setCurrentSort(sortTypes.default)
    setSearchedEmployees(employeesData)
  },[employeesData])

  useEffect(() => {
    setSortedEmployees(searchedEmployees)
  },[searchedEmployees])

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearch(value);
    if (!search) {
    setSearchedEmployees(employeesData)
    } else {
      const filteredEmployees = employeesData.filter((employee) => {
        let firstName = employee.name.first.toLowerCase()
        let lastName = employee.name.first.toLowerCase()
        let email = employee.email
        let phone = employee.phone
        return firstName.includes(value) || lastName.includes(value) || email.includes(value) || phone.includes(value)
      });
      setSearchedEmployees(filteredEmployees);
    }
  };

  const toggleSort = () => {
    if (currentSort.class === "random"){
      setCurrentSort(sortTypes.up)
      setSortedEmployees(searchedEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1))
    } else if (currentSort.class === "up"){
      setCurrentSort(sortTypes.down)
      setSortedEmployees(searchedEmployees.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1))
    } else if (currentSort.class === "down"){
      setCurrentSort(sortTypes.up)
      setSortedEmployees(searchedEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1))
    }
  }

  if (error) {
    return (
      <LoadingError error={error.message}/>
    );
  } else if (!isLoaded) {
    return (
      <LoadingMessage/>
    );
  } else {
    return (
      <>
        <Search value={search} handleChange={handleSearch}/>
        <div className="table-responsive">
          <table className="table table-striped">
            <TableHeader toggleSort={toggleSort}/>
            <tbody>
              {sortedEmployees.length > 0 && sortedEmployees.map((e, i) => (
              <TableRow key={e.phone} i={i} img={e.picture.thumbnail} firstName={e.name.first} lastName={e.name.last} email={e.email} phone={e.phone}/>
              ))} 
              <tr>
                <td colSpan="5">Total Employees: {employeesData.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}