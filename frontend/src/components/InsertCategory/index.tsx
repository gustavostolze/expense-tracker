/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Category } from '../../Types/Category';
import * as C from './styles';
import { overlayFn } from '../../utils/modal';

type Props = {
  onAdd: (
    categoryKey: string,
    categoryObj: { title: string; color: string; expense: boolean | undefined },
  ) => void;
  categoriesList: Category;
};

export const InsertCategory = ({ onAdd, categoriesList }: Props) => {
  const [colorField, setColorField] = useState('#00008b');
  const [categoryKey, setCategoryKey] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryExpense, setCategoryExpense] = useState<boolean | undefined>(
    undefined,
  );
  const categoriesListKeys = Object.keys(categoriesList);

  const handleAddCategory = () => {
    const errors: string[] = [];

    if (categoryTitle === '') {
      errors.push('Título inválido');
    } else {
      categoriesListKeys.filter((categories) => {
        if (categoryTitle == categoriesList[categories].title) {
          errors.push('Esse título já foi usado!');
        }
      });
    }

    if (categoryKey === '') {
      errors.push('Chave de categoria inválida');
    } else {
      categoriesListKeys.filter((categories) => {
        if (categoryKey == categories) errors.push('Essa chave já existe');
      });
    }

    if (categoryExpense === undefined) {
      errors.push('Por favor, defina se é ou não uma despesa!');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd(categoryKey, {
        title: categoryTitle,
        color: colorField,
        expense: categoryExpense,
      });
      clearFields();
      overlayFn('category', isModalOpen, setIsModalOpen);
    }
  };

  const clearFields = () => {
    setCategoryExpense(undefined);
    setCategoryKey('');
    setCategoryTitle('');
    setColorField('#00008b');
  };

  const handleModal = () => {
    overlayFn('category', isModalOpen, setIsModalOpen);
  };

  return (
    <C.Container>
      <C.Button onClick={() => handleModal()}>Adicionar categoria</C.Button>
      <C.DialogBox id="secondDialogBox" isModalOpen={isModalOpen}>
        <C.InsertContainer>
          <C.InputLabel>
            <C.InputTitle>Nova categoria</C.InputTitle>
            <C.Input
              type="text"
              value={categoryKey}
              onChange={(e: any) => setCategoryKey(e.target.value)}
              placeholder="Tipo da categoria"
            />
          </C.InputLabel>

          <C.InputLabel>
            <C.InputTitle>Título</C.InputTitle>
            <C.Input
              type="text"
              value={categoryTitle}
              onChange={(e: any) => setCategoryTitle(e.target.value)}
              placeholder="Título da categoria"
            />
          </C.InputLabel>

          <br />

          <C.InputLabel>
            <C.InputTitle>Cor</C.InputTitle>
            <C.InputColor
              type="color"
              onChange={(e: any) => setColorField(e.target.value)}
              value={colorField}
            />
          </C.InputLabel>

          <C.InputLabel>
            <C.InputTitle>É uma despesa?</C.InputTitle>
            <C.RadioSelect>
              <C.InputLabel>
                <C.RadioSpan>Sim</C.RadioSpan>
                <C.InputRadio
                  type="radio"
                  checked={
                    categoryExpense == undefined
                      ? false
                      : categoryExpense == true
                      ? true
                      : false
                  }
                  name="expense?"
                  onChange={() => setCategoryExpense(true)}
                />
              </C.InputLabel>

              <C.InputLabel>
                <C.RadioSpan>Não</C.RadioSpan>
                <C.InputRadio
                  type="radio"
                  checked={
                    categoryExpense == undefined
                      ? false
                      : categoryExpense == false
                      ? true
                      : false
                  }
                  name="expense?"
                  onChange={() => setCategoryExpense(false)}
                />
              </C.InputLabel>
            </C.RadioSelect>
          </C.InputLabel>

          <C.InputLabel>
            <C.InputTitle>&nbsp;</C.InputTitle>
            <C.Button onClick={handleAddCategory}>Adicionar</C.Button>
          </C.InputLabel>
        </C.InsertContainer>
        <C.Button onClick={() => handleModal()} width="50%">
          Fechar
        </C.Button>
      </C.DialogBox>
    </C.Container>
  );
};
