import { TableHeader } from "./tableHeader";
import { TableRows } from "./tableRows"

export function Table () {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <TableHeader/>
        </thead>
        <tbody>
          <TableRows/>
        </tbody>
      </table>
    </div>
  )
}