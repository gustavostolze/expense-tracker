import { useContext } from 'react';
import { InsertCategory } from '../InsertCategory';
import { InsertItem } from '../InsertItem';
import * as C from './styles';
import { InsertContext } from '../../template/App/App';
import { InsertContextType } from '../../Types/InsertContext';

export const InsertArea = () => {
  const { handleAddItem, handleAddCategory, categoriesList } = useContext(
    InsertContext,
  ) as InsertContextType;

  return (
    <C.Container>
      <InsertItem onAdd={handleAddItem} categoriesList={categoriesList} />
      <InsertCategory
        onAdd={handleAddCategory}
        categoriesList={categoriesList}
      />
    </C.Container>
  );
};
