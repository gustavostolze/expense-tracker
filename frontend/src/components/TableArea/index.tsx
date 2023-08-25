import { Category } from "../../Types/Category";
import { Item } from "../../Types/Item";
import { TableItem } from "../TableItem";
import * as C from "./styles";

type Props = {
  list: Item[];
  categoriesList: Category;
  setIsLoading: (loading: boolean) => void;
};

export const TableArea = ({ list, categoriesList, setIsLoading }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem
            key={index}
            item={item}
            categoriesList={categoriesList}
            setIsLoading={setIsLoading}
          />
        ))}
      </tbody>
    </C.Table>
  );
};
