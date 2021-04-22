import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export const TableHeader = (props) => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Name
          <button
            type="button btn-dark"
            style={{
              backgroundColor: "inherit", 
              color: "white", 
              fontWeight: "bold", 
              border: "0",
              background: "none",
              boxShadow: "none",
              borderRadius: "0px",
              float: "right"
            }}
            onClick={props.toggleSort}
            ><FontAwesomeIcon icon={faSort}/>
          </button>
        </th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
  )
}