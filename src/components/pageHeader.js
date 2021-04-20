export const PageHeader = () => {
  return(
    <div className="jumbotron jumbotron-fluid" style={{backgroundColor:"black", color:"white", marginBottom:"0"}}>
      <div className="container">
        <h1 className="display-4" style={{textAlign:"center"}}>Employee Directory</h1>
        <p className="lead" style={{textAlign:"center"}}>Search using the Search Field or Sort by pressing the header buttons.</p>
      </div>
    </div>
  )
}