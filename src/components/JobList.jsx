import { JobPosition } from './JobPosition';

import {useSelector, useDispatch} from "react-redux";
import {selectVisiblePositions} from "../store/positions/position-selectors";
import {selectFilters} from "../store/filters/filter-selectors";
import {addFilter} from "../store/filters/filter-actions";
const JobList = () => {
  const dispatch = useDispatch();
  const handleAddFilter = (filter) => dispatch(addFilter(filter));

  const currentFilters = useSelector(selectFilters);
  const positions = useSelector(state => selectVisiblePositions(state, currentFilters));

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export {JobList};