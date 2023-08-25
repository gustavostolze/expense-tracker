import axios from "axios";
import './styles.css';

type Props = {
  setIsLoading: (loading: boolean) => void;
  setList: (response: any) => void;
  setCategoriesList: (response: any) => void;
};
export const Loading = ({
  setIsLoading,
  setList,
  setCategoriesList,
}: Props) => {
  const fetchData = async () => {
    await axios
      .get("http://localhost:3333/items")
      .then((res) => setList(res.data))
      .catch((error) => {
        console.log(error);
      });
    await axios
      .get("http://localhost:3333/categories")
      .then((res) => {
        setCategoriesList(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchData();
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
