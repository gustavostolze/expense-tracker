import { useEffect, useState } from "react";
import { InsertContext, ManagerContext } from "../../template/App/App";
import { InfoArea } from "../InfoArea";
import { InsertArea } from "../InsertArea";
import { TableArea } from "../TableArea";
import * as C from "./styles";
import { filterListByMonth, getCurrentMonth } from "../../utils/dateFilter";
import { Category } from "../../Types/Category";
import { Item } from "../../Types/Item";
import axios from "axios";

type Props = {
  list: Item[];
  setList: (newList: any) => void;
  filteredList: Item[];
  setFilteredList: (newList: any) => void;
  categoriesList: Category;
  setCategoriesList: (list: Category) => void;
  setIsLoading: (loading: boolean) => void;
};

export const LoadedPage = ({
  list,
  setList,
  filteredList,
  setFilteredList,
  categoriesList,
  setCategoriesList,
  setIsLoading,
}: Props) => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth, setFilteredList]);

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

  const handleAddItem = async (item: Item) => {
    setIsLoading(true);
    axios
      .post("http://localhost:3333/items", item)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddCategory = async (
    categoryKey: string,
    categoryObj: {
      title: string;
      color: string;
      expense: boolean | undefined;
    }
  ) => {
    setIsLoading(true);
    await axios
      .post("http://localhost:3333/categories", {
        [categoryKey]: categoryObj,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <TableArea list={filteredList} categoriesList={categoriesList} setIsLoading={setIsLoading} />
        </ManagerContext.Provider>
      </C.Body>
    </>
  );
};
