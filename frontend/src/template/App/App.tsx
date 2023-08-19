import * as C from "./App.styles";
import { Item } from "../../Types/Item";
import { createContext, useState } from "react";
import { Category } from "../../Types/Category";
import { Loading } from "../../components/Loading";
import { LoadedPage } from "../../components/LoadedPage";
import { InsertContextType } from "../../Types/InsertContext";
import { ManagerContextType } from "../../Types/ManagerContext";

export const InsertContext = createContext<InsertContextType | null>(null);
export const ManagerContext = createContext<ManagerContextType | null>(null);
export const LoadedPageContext = createContext<any | null>(null);

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [categoriesList, setCategoriesList] = useState<Category>({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <C.Container id="app-container">
      {isLoading ? (
        <Loading
          setIsLoading={setIsLoading}
          setList={setList}
          setCategoriesList={setCategoriesList}
        />
      ) : (
        <LoadedPage
          list={list}
          setList={setList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          categoriesList={categoriesList}
          setCategoriesList={setCategoriesList}
        />
      )}
    </C.Container>
  );
};

export default App;
