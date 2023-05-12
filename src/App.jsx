import "./index.css";
import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";

export default function App() {
  return (
    <div className="App">
      <TheHeader/>
      <div className="container">
      <FilterPanel/>
      <JobList/>
      </div>
    </div>
  );
}
