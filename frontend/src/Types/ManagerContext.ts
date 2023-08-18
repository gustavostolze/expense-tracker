import { Item } from './Item';

export type ManagerContextType = {
  filteredList: Item[];
  setFilteredList: React.Dispatch<React.SetStateAction<Item[]>>;
};
