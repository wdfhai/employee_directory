import { useState, useEffect } from "react";
import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow"

export const Table = () => {
  const sortTypes = {
    up: {
      class: "up",
      fn: (a, b) => (a.name.first > b.name.first) ? 1 : -1
    },
    down: {
      class: "down",
      fn: (a, b) => (a.name.first < b.name.first) ? 1 : -1
    },
    default: {
      class: "random",
      fn: ""
    }
  };

  const [search, setSearch] = useState("");
  const [currentSort, setCurrentSort] = useState()
  const [employeesData, setEmployeesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect (() => {
    console.log(search)
    fetch("https://randomuser.me/api/?nat=us&results=100")
    .then(res => res.json())
    .then((result) => {
      console.log(result.results);
      setIsLoaded(true);
      setEmployeesData(result.results);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
    console.log(employeesData);
  },[])

  const toggleSort = () => {}

  if (error) {
    return <tbody><tr><td style={{color: "red"}}>Error:{error.message}</td></tr></tbody>;
  } else if (!isLoaded) {
    return <tbody><tr><td style={{color: "blue"}}>Loading...</td></tr></tbody>;
  } else {
    return (
      <>
        <thead className="thead-dark">
          <TableHeader toggleSort={toggleSort}/>
        </thead>
        <tbody>
        {employeesData.length > 0 && employeesData.map((e, i) => (
          <TableRow i={i} img={e.picture.thumbnail} firstName={e.name.first} lastName={e.name.last} email={e.email} phone={e.phone}/>
        ))} 
          <tr>
            <td colSpan="5">Total Employees: {employeesData.length}</td>
          </tr>
        </tbody>
      </>
    )
  }
}