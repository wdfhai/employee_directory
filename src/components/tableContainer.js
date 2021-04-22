import { Table } from "./table"

export function TableContainer () {
  return (
    <div className="table-responsive sortable">
      <table className="table table-striped">
        <Table/>
      </table>
    </div>
  )
}