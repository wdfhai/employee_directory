export const TableRow = ( props ) => {
  return(
    <>
      <tr key={props.i+2}>
        <th scope="row">{props.i+1}</th>
        <td><img className="img-fluid img-thumbnail rounded" alt="employee" src={props.img} style={{height: "75px", width: "75px"}}/></td>
        <td>{props.firstName} {props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
      </tr>
    </>
  )
}