import { useState, useEffect } from "react";

const TableRows = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect (() => {
    fetch("https://randomuser.me/api/?nat=us&results=100")
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      setIsLoaded(true);
      setEmployeesData(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
    console.log(employeesData);
  },[]) 
  
  if (error) {
    return <tr><td style={{color: "red"}}>Error:{error.message}</td></tr>;
  } else if (!isLoaded) {
    return <tr><td style={{color: "blue"}}>Loading...</td></tr>;
  } else {
    return (
      <>
        {employeesData.length && employeesData.map((e, i) => {
        <tr>
          <th scope="row" key={i+1}>{i+1}</th>
          <td><img className="img-fluid img-thumbnail rounded" alt="employee" src={e.picture.thumbnail} style={{height: "75px", width: "75px"}}/></td>
          <td>{e.name.first}</td>
          <td>{e.name.last}</td>
          <td>{e.email}</td>
          <td>{e.phone}</td>
        </tr>
        })}
      </>
    )
  }
}

export const TableBody = () => {
  return(
    <tbody>
      <TableRows/>
      <tr>
        <td colSpan="6">Total Employees: 100</td>
      </tr>
    </tbody>
  )
}