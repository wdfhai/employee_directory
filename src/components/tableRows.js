import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const TableRow = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?nat=us&results=100")
    .then((res) => res.json())
    .then((data) => setEmployees(data.results))
  },[])

  if (employees !== []){
    console.log(employees)
    return (
      <>
        {employees.length && employees.map((e) => {
        <tr>
          <td>{e.index+1}</td>,
          <td><img className="img-fluid img-thumbnail rounded" alt="employee" src={e.picture.thumbnail} style={{height: "75px", width: "75px"}}/></td>,
          <td>{e.name.first}</td>,
          <td>{e.name.last}</td>,
          <td>{e.email}</td>,
          <td>{e.phone}</td>,
        </tr>
        })}
      </>
    )
  }
}

export const TableRows = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TableRow/>
    </QueryClientProvider>
  )
}