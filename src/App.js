import "./App.css";
// import { PageHeader, Table } from "./components";
import { PageHeader } from "./components/pageHeader";
import { Table } from "./components/table";

function App() {
  return (
      <div className="container-fluid">
        <PageHeader/>
        <Table/>
      </div>
  );
}

export default App;
