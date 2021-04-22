import { useState, useEffect } from "react";
import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow";
import { Search } from "./Search";

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
    return <tbody><tr><td style={{color: "red"}}>Error:{error.message}</td></tr></tbody>;
  } else if (!isLoaded) {
    return <tbody><tr><td style={{color: "blue"}}>Loading...</td></tr></tbody>;
  } else {
    return (
      <>
        <Search value={search} handleChange={handleSearch}/>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-dark">
              <TableHeader toggleSort={toggleSort}/>
            </thead>
            <tbody>
            {sortedEmployees.length > 0 && sortedEmployees.map((e, i) => (
              <TableRow i={i} img={e.picture.thumbnail} firstName={e.name.first} lastName={e.name.last} email={e.email} phone={e.phone}/>
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