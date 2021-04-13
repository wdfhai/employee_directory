export function Table () {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" style={{height: "75px"},{width: "75px"}}/>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>555-555-555</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" style={{height: "75px"},{width: "75px"}}/>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>555-555-555</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" style={{height: "75px"},{width: "75px"}}/>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>555-555-555</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" style={{height: "75px"},{width: "75px"}}/>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>555-555-555</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" style={{height: "75px"},{width: "75px"}}/>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>555-555-555</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}