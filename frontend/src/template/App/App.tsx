import * as C from "./App.styles";
import { Item } from "../../Types/Item";
import { items } from "../../data/items";
import { createContext, useEffect, useState } from "react";
import { filterListByMonth, getCurrentMonth } from "../../utils/dateFilter";
import { TableArea } from "../../components/TableArea";
import { InfoArea } from "../../components/InfoArea";
import { InsertContextType } from "../../Types/InsertContext";
import { InsertArea } from "../../components/InsertArea";
import { ManagerContextType } from "../../Types/ManagerContext";
import { categories } from "../../data/categories";

export const InsertContext = createContext<InsertContextType | null>(null);
export const ManagerContext = createContext<ManagerContextType | null>(null);

const App = () => {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [categoriesList, setCategoriesList] = useState(categories);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  console.log(filteredList);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    filteredList.forEach((item) => {
      if (categoriesList[item.category].expense == true) {
        expenseCount += item.value;
      }
      if (categoriesList[item.category].expense == false) {
        incomeCount += item.value;
      }
    });

    setExpense(expenseCount);
    setIncome(incomeCount);
  }, [filteredList, categoriesList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    const newList = [...list];
    newList.push(item);
    setList(newList);
  };

  const handleAddCategory = (
    categoryKey: string,
    categoryObj: {
      title: string;
      color: string;
      expense: boolean | undefined;
    }
  ): void => {
    const newCategory = { ...categoryObj };
    setCategoriesList({ ...categories, [categoryKey]: newCategory });
  };

  return (
    <C.Container id="app-container">
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* =-=-=-=-=-= */}
        <InsertContext.Provider
          value={{ handleAddItem, handleAddCategory, categoriesList }}
        >
          <InsertArea />
        </InsertContext.Provider>

        {/* =-=-=-=-=-= */}

        <ManagerContext.Provider value={{ filteredList, setFilteredList }}>
          <TableArea list={filteredList} categoriesList={categoriesList} />
        </ManagerContext.Provider>
      </C.Body>
    </C.Container>
  );
};

export default App;
