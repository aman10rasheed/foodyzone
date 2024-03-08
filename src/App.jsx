import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

const URL = "http://localhost:3002/food";
function App() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setloading(true);
      try {
        const responce = await fetch(URL);
        const json = await responce.json();
        setdata(json);
        setloading(false);
      } catch (error) {
        seterror("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);
  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <>
      <MainContainer>
        <Nav />
        <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
      </MainContainer>
      <SearchResult data={data} />
    </>
  );
}

export const MainContainer = styled.div`
  background: #323334;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;
export const Button = styled.div`
  display: inline;
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  margin-bottom: 20px;
`;

export default App;
