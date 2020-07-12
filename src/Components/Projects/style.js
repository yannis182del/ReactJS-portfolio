import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const CardContainer = styled.div`
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 4rem;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;

export const Column = styled.div`
  width: 100%;
  padding: 8px 8px;
  float: left;
`;

export const Row = styled.div`
  display: row;
`;

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  background-color: white;
`;

export const ElementsDiv = styled.div`
  display: flex;
  width: 15%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Description = styled.p`
  color: rgb(112, 112, 112);
`;

export const Title = styled.h3`
  color: rgb(81, 135, 253);
`;
