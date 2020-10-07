import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0px 15px 50px;
  }
`;

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: 300px;
  align-items: baseline;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    justify-items: flex-start;
    row-gap: 25px;
    grid-template-rows: 360px 105px 55px;
  }
`;