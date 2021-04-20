import "./App.css";
import { PageHeader } from "./components/pageHeader";
import { Nav } from "./components/nav";
import { Table } from "./components/table";

function App() {
  return (
      <section className="container-fluid">
        <PageHeader/>
        <Nav />
        <Table />
      </section>
  );
}

export default App;
