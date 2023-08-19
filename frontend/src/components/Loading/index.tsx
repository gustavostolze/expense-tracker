import axios from "axios";

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
  const fetchData = new Promise((response, reject) => {
    response(async () => {
      await axios
        .get("http://localhost:3333/items")
        .then((response) => setList(response.data))
        .catch((error) => console.log(error));
      await axios
        .get("http://localhost:3333/categories")
        .then((response) => setCategoriesList(response.data))
        .catch((error) => console.log(error));
    });
    reject(console.log('SOMETHING WENT WRONG ON FETCH DATA'));
  });

  fetchData.then(() => {
    console.log('FETCH DATA SUSCESS');
    setIsLoading(false);
  })

  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
};
