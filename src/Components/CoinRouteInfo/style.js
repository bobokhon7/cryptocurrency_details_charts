import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #243b55;
`;
export const GoHomeButton = styled.button`
  width: 130px;
  height: 36px;
  background: rgb(126, 211, 33);
  border: 1px solid rgb(126, 211, 33);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  font-family: "SF Pro Display";
  font-style: normal;
  transition-duration: 0.4s;
  transform: scale(0.9);
  &:hover {
    background-color: white; /* Green */
    color: rgb(126, 211, 33);
  }
  &:active {
    box-shadow: rgb(126, 211, 33) 0px 3px 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #2fffe5; */
  border-radius: 10px;
  height: 200px;
  padding: 4rem;
  width: 150px;
  margin-top: 50px;
  background-color: #065978;
`;

export const Image = styled.img`
  /* margin-bottom: 1rem; */
  height: 120px;
  width: 120px;
  position: absolute;
  top: 5px;
`;

export const Title = styled.div`
  /* margin-top: 1rem; */
  color: white;
  font-size: ${(props) => (props.sizeChange ? "15px" : "22px")};
  padding: ${(props) => (props.sizeChange ? "0 20px" : "0px")};
  justify-content: center;
  text-align: center;
`;

export const MediaWrapper = styled.div`
  display: flex;
  margin-top: ${(props) => (props.changeSize ? "30px" : "0px")};
`;

export const IconSize = styled.div`
  font-size: 50px;
  padding: 0 20px;
  color: ${(props) => (props.changeColor ? "white" : "red")};
`;
export const Officailweb = styled.button`
  width: 100px;
  display: flex;
  position: relative;
  top: 70px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:active {
    transform: scale(0.95);
  }
  right: ${(props) => (props.leftChange ? "0px" : "50px")};
  left: ${(props) => (props.leftChange ? "20px" : "0px")};
`;

export const LineChart = styled.div`
  margin-top: 50px;
  height: 100%;
  background: white;
  color: black;
  width: 700px;
  font-family: sans-serif;
  text-align: center;
  @media only screen and (max-width: 770px) {
    width: 300px;
  }
`;

export const Descreption = styled.div`
  margin-top: 50px;
  width: 700px;
  height: 350px;
  @media only screen and (max-width: 770px) {
    width: 300px;
    height: 800px;
  }
  background-color: #243b55;
  color: white;
`;
