import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";

import "./index.css";

import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPositions} from "./store/positions/position-actions";
import data from "./mock/data.json"

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPositions(data));
  });
  return (
    <div className="App">
      <TheHeader/>
      <div className="container">
      <FilterPanel/>
      <JobList data={data}/>
      </div>
    </div>
  );
}
