import { TableHeader } from "./tableHeader";
import { TableBody } from "./tableBody"

export function Table () {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <TableHeader/>
        </thead>
        <TableBody/>
      </table>
    </div>
  )
}