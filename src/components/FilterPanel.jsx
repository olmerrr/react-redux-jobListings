import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';

import {useSelector, useDispatch} from "react-redux";
import {selectFilters, } from "../store/filters/filter-selectors";
import {clearFilter, removeFilter} from "../store/filters/filter-actions";

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            currentFilters.length > 0 ? currentFilters.map(filter => (
              <Badge
                key={filter}
                variant="clearable"
                onClear={() => dispatch(removeFilter(filter))}
            >
                {filter}
              </Badge>)) : <span className="no-filters">Choose Filters</span>
          }

        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};