import { useFilter } from "../contexts/FilterContext"
import type { Filter } from "../types/Todo";

export function FilterButtons () {

    const {filter, setFilter} = useFilter();
    const filters: Filter[] = ["all", "active", "completed"] ;
    return (
        <div>
          {filters.map((item) => (
            <button 
             key = {item}
             onClick={ () => setFilter(item)}
             style ={{
                fontWeight: filter === item ? "bold": "normal"
             }}
            >
                {item}
            </button>
          ))}

        </div>
    );
}