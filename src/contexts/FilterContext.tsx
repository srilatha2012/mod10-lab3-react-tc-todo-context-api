import { createContext, useContext, useState, type ReactNode } from "react";
import type {Filter, FilterContextType} from "../types/Todo"

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider ({children}:{children : React.ReactNode}) {
      const [filter, setFilter] = useState<Filter>("all");

      return (
        <FilterContext.Provider value = {{filter,setFilter}}>
         {children}
        </FilterContext.Provider>
      );
}

export function useFilter () {
    const context = useContext(FilterContext);
    if(!context) {
        throw new Error("useFilter must be used inside FilterProvider");
    }
    return context;
}

