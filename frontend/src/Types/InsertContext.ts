import { Category } from './Category';
import { Item } from './Item';

export type InsertContextType = {
  handleAddItem: (item: Item) => void;
  handleAddCategory: (
    categoryKey: string,
    categoryObj: {
      title: string;
      color: string;
      expense: boolean | undefined;
    },
  ) => void;
  categoriesList: Category;
};
