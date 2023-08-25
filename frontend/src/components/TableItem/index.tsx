/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { Category } from "../../Types/Category";
import { Item } from "../../Types/Item";
import { formatDate } from "../../utils/dateFilter";
import * as C from "./styles";
import * as D from "../InsertItem/styles";
import { overlayManagerFn } from "../../utils/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleXmark,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ManagerContext } from "../../template/App/App";
import { ManagerContextType } from "../../Types/ManagerContext";
import axios from "axios";

type Props = {
  item: Item;
  categoriesList: Category;
  setIsLoading: (loading: boolean) => void;
};

export const TableItem = ({ item, categoriesList, setIsLoading }: Props) => {
  const [dateField, setDateField] = useState(item.date);
  const [categoryField, setCategoryField] = useState(item.category);
  const [titleField, setTitleField] = useState(item.title);
  const [valueField, setValueField] = useState(item.value);
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { filteredList, setFilteredList } = useContext(
    ManagerContext
  ) as ManagerContextType;

  const categoryKeys: string[] = Object.keys(categoriesList);

  const handleTrash = (id: string) => {
    overlayManagerFn("delete", id, isTrashOpen, setIsTrashOpen);
  };
  const handleEdit = async (id: string) => {
    overlayManagerFn("edit", id, isEditOpen, setIsEditOpen);
  };

  const handleDeleteItem = async (id: string) => {
    setIsLoading(true);
    await axios
      .delete(`http://localhost:3333/items/${id}`)
      .then((response) => {
        console.log(response);
        overlayManagerFn("delete", id, isTrashOpen, setIsTrashOpen);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSaveChange = async (id: string) => {
    setIsLoading(true);
    await axios
      .put(`http://localhost:3333/items/${id}`, {
        date: dateField,
        category: categoryField,
        title: titleField,
        value: valueField,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categoriesList[item.category].color}>
          {categoriesList[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value
          color={categoriesList[item.category].expense ? "red" : "green"}
        >
          R$ {item.value.toFixed(2)}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.ManagerArea>
          <C.TrashBox id={`trashBox${item.id}`} isTrashOpen={isTrashOpen}>
            <C.Icon>
              <FontAwesomeIcon icon={faCircleXmark} />
            </C.Icon>
            <C.IconTitle>Tem certeza que quer deletar esse item?</C.IconTitle>
            <C.ButtonContainer>
              <C.Button
                background="#ff0000"
                backgroundHover="#e50000"
                margin="10px 20px"
                onClick={() => handleDeleteItem(item.id)}
              >
                Sim
              </C.Button>
              <C.Button margin="10px 20px" onClick={() => handleTrash(item.id)}>
                Cancelar
              </C.Button>
            </C.ButtonContainer>
          </C.TrashBox>
          <C.EditBox id={`editBox${item.id}`} isEditOpen={isEditOpen}>
            <C.Icon color={"gray"}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </C.Icon>
            <C.IconTitle>Lembre-se de salvar suas alterações!</C.IconTitle>
            {/* */}

            <D.InsertContainer>
              <D.InputLabel>
                <D.InputTitle>Data</D.InputTitle>
                <D.Input
                  type="date"
                  value={dateField}
                  onChange={(e: any) => setDateField(e.target.value)}
                />
              </D.InputLabel>
              <D.InputLabel>
                <D.InputTitle>Categoria</D.InputTitle>
                <D.Select
                  value={categoryField}
                  onChange={(e: any) => setCategoryField(e.target.value)}
                >
                  <>
                    <option></option>
                    {categoryKeys.map((key, index) => (
                      <option key={index} value={key}>
                        {categoriesList[key].title}
                      </option>
                    ))}
                  </>
                </D.Select>
              </D.InputLabel>
              <D.InputLabel>
                <D.InputTitle>Título</D.InputTitle>
                <D.Input
                  type="text"
                  value={titleField}
                  onChange={(e: any) => setTitleField(e.target.value)}
                />
              </D.InputLabel>
              <D.InputLabel>
                <D.InputTitle>Valor</D.InputTitle>
                <D.Input
                  type="number"
                  value={valueField}
                  onChange={(e: any) =>
                    setValueField(parseFloat(e.target.value))
                  }
                />
              </D.InputLabel>
            </D.InsertContainer>

            {/* */}
            <C.ButtonContainer>
              <C.Button
                margin="10px 20px"
                background="#ff0000"
                backgroundHover="#e50000"
                onClick={() => handleEdit(item.id)}
              >
                Cancelar
              </C.Button>
              <C.Button
                margin="10px 20px"
                onClick={() => handleSaveChange(item.id)}
              >
                Salvar
              </C.Button>
            </C.ButtonContainer>
          </C.EditBox>
          <C.ManagerIcon color="gray" onClick={() => handleEdit(item.id)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </C.ManagerIcon>
          <C.ManagerIcon color="red" onClick={() => handleTrash(item.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </C.ManagerIcon>
        </C.ManagerArea>
      </C.TableColumn>
    </C.TableLine>
  );
};
