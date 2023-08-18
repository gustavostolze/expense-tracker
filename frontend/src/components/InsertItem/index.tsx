/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import * as C from './styles';

import { Item } from '../../Types/Item';
import { newDateAdjusted } from '../../utils/dateFilter';
import { Category } from '../../Types/Category';
import { overlayFn } from '../../utils/modal';
import { items } from '../../data/items';
import { keyGen } from '../../utils/idGen';

type Props = {
  onAdd: (item: Item) => void;
  categoriesList: Category;
};

export const InsertItem = ({ onAdd, categoriesList }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryKeys: string[] = Object.keys(categoriesList);

  const handleAddEvent = () => {
    const errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd({
        date: dateField,
        category: categoryField,
        title: titleField,
        value: valueField,
        id: keyGen(),
      });
      clearFields();
      overlayFn('item', isModalOpen, setIsModalOpen);
    }
  };

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  };

  const handleModal = () => {
    overlayFn('item', isModalOpen, setIsModalOpen);
  };

  return (
    <C.Container>
      <C.Button onClick={() => handleModal()}>Adicionar item</C.Button>
      <C.DialogBox id="dialogBox" isModalOpen={isModalOpen}>
        <C.InsertContainer>
          <C.InputLabel>
            <C.InputTitle>Data</C.InputTitle>
            <C.Input
              type="date"
              value={dateField}
              onChange={(e: any) => setDateField(e.target.value)}
            />
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>Categoria</C.InputTitle>
            <C.Select
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
            </C.Select>
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>Título</C.InputTitle>
            <C.Input
              type="text"
              value={titleField}
              onChange={(e: any) => setTitleField(e.target.value)}
            />
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>Valor</C.InputTitle>
            <C.Input
              type="number"
              value={valueField}
              onChange={(e: any) => setValueField(parseFloat(e.target.value))}
            />
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>&nbsp;</C.InputTitle>
            <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
          </C.InputLabel>
        </C.InsertContainer>
        <C.Button onClick={handleModal} width="25%">
          Fechar
        </C.Button>
      </C.DialogBox>
    </C.Container>
  );
};
