import { Category } from '../Types/Category';

const fetchCategories = async () => {
  const response = await fetch('http://localhost:3333/categories');
  const categories = await response.json();

  return categories;
};

export const loadCategories = async () => {
  return await fetchCategories();
};

export const categories: Category = {
  food: { title: 'a', color: 'a', expense: true },
};
