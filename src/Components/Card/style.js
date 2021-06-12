import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  /* margin-left: 100px; */
  flex-direction: row;
  /* margin: 0px 50; */
  background-color: #243b55;
  &:active {
    box-shadow: #2952a3 0px 3px 10px;
    transform: scale(0.95);
  }
  @media only screen and (max-width: 770px) {
    padding-right: 15px;
  }
`;
export const CardStyle = styled.div`
  width: 300px;
  height: 210px;
  margin: 0 2%;
  cursor: pointer;
`;

export const ImageTag = styled.div`
  position: relative;

  left: 220px;
  bottom: 50px;
  width: 50px;
`;
