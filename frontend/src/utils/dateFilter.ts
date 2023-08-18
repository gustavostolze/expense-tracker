import { Item } from "../Types/Item";

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split("-");

  for (const i in list) {
    if (
      new Date(list[i].date).getFullYear() === parseInt(year) &&
      new Date(list[i].date).getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-');

  return `${handleDateFormated(parseInt(day))}/${handleDateFormated(parseInt(month))}/${parseInt(year)}`;
};

// opa

export const formatDefaultInputDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  console.log(`${year}-${month}-${day}`);
  return `${year}-${handleDateFormated(month)}-${handleDateFormated(day)}`;
};

const handleDateFormated = (number: number): string => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
};

export const formatCurrentMonth = (date: string): string => {
  const [year, month] = date.split("-");

  const formatMonth = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${formatMonth[Number(month) - 1]} de ${year}`;
};

export const newDateAdjusted = (dateField: string) => {
  const [year, month, day] = dateField.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
