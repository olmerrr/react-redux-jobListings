import {useDispatch} from "react-redux";
import {resetToDefault} from "./filters-slice";
export const ResetFilters = () => {
  const dispatch  = useDispatch();
  return <div>
    <button onClick={() => dispatch(resetToDefault())}>Reset</button>
  </div>
}



