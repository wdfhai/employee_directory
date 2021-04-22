import "./App.css";
import { PageHeader } from "./components/pageHeader";
import { SearchNav } from "./components/SearchNav";
import { TableContainer } from "./components/tableContainer";

function App() {
  return (
      <section className="container-fluid">
        <PageHeader/>
        <SearchNav/>
        <TableContainer/>
      </section>
  );
}

export default App;
