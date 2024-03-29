import React from "react";
import styled from "styled-components";
import { Button, MainContainer } from "../App";
const SearchResult = ({ data }) => {
  return (
    <FoodcardContainer>
      <MainContainer>
        {" "}
        <Foodcards>
          {data?.map((food) => (
            <Foodcard key={food.name}>
              <div className="food_image">
                <img src={food.image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{food.name}</h3>
                  <p>{food.text}</p>
                </div>
                <Button>${food.price}.00</Button>
              </div>
            </Foodcard>
          ))}
        </Foodcards>
      </MainContainer>
    </FoodcardContainer>
  );
};

export default SearchResult;

const FoodcardContainer = styled.div`
  height: calc(100vh - 210px);
  background-image: url("./bg.png");
`;
const Foodcards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
const Foodcard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  padding: 8px;
  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;
