import { useEffect, useState } from "react";
import { InsertContext, ManagerContext } from "../../template/App/App";
import { InfoArea } from "../InfoArea";
import { InsertArea } from "../InsertArea";
import { TableArea } from "../TableArea";
import * as C from "./styles";
import { filterListByMonth, getCurrentMonth } from "../../utils/dateFilter";
import { Category } from "../../Types/Category";
import { Item } from "../../Types/Item";

type Props = {
  list: Item[];
  setList: (newList: any) => void,
  filteredList: Item[];
  setFilteredList: (newList: any) => void;
  categoriesList: Category;
  setCategoriesList: (list: Category) => void,
};

export const LoadedPage = ({
  list,
  setList,
  filteredList,
  setFilteredList,
  categoriesList,
  setCategoriesList,
}: Props) => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    filteredList.forEach((item) => {
      if (categoriesList[item.category].expense === true) {
        expenseCount += item.value;
      }
      if (categoriesList[item.category].expense === false) {
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
    setCategoriesList({ ...categoriesList, [categoryKey]: newCategory });
  };
  return (
    <>
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
    </>
  );
};
