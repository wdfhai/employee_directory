import "./App.css";
import { PageHeader } from "./components/pageHeader";
import { Table } from "./components/table";

function App() {
  return (
      <section className="container-fluid">
        <PageHeader/>
        <Table/>
      </section>
  );
}

export default App;
